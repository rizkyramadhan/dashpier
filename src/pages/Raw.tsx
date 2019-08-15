import { Entypo, EvilIcons } from '@expo/vector-icons';
import { observer, useObservable } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {
  iOSColors,
  materialColors,
  systemWeights
} from 'react-native-typography';
import store from '../misc/store';
import Title from '../components/Title';
import { money } from '../misc/util';
import { toJS } from 'mobx';

export default observer(({ navigation }: any) => {
  const meta = useObservable({
    current: {} as any,
    debet: 0,
    kredit: 0,
    trx: 0,
    chartKey: 'debet',
    mode: 'total',
    drill: [] as any[]
  });
  const scrollRef = useRef(null as any);

  useEffect(() => {
    meta.current = toJS(store.list);
    calcDebetKredit();
  }, []);

  const drillTo = (id: string, item: any) => {
    meta.drill.push({
      id: id,
      name: item.name
    });

    meta.debet = item.debet || 0;
    meta.kredit = item.kredit || 0;
    meta.trx = item.count || 0;
    meta.current = item.childs;
    scrollRef.current.scrollTo({ x: 0, y: 0, animated: true });
  };

  const calcDebetKredit = () => {
    let debet = 0;
    let kredit = 0;
    let trx = 0;
    Object.keys(meta.current).forEach((key: any) => {
      const item = meta.current[key];
      debet += item.debet || 0;
      kredit += item.kredit || 0;
      trx += item.count || 0;
    });
    meta.debet = debet;
    meta.kredit = kredit;
    meta.trx = trx;
  };

  return (
    <View style={styles.container}>
      <Title navigation={navigation} />

      <View
        style={{
          borderRadius: 4,
          borderWidth: 1,
          borderColor: '#ccc',
          backgroundColor: '#fff',
          marginHorizontal: 5,
          marginBottom: 5
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            minHeight: 30,
            padding: 5,
            paddingBottom: 0,
            borderColor: '#ccc',
            flexWrap: 'wrap',
            borderWidth: 0,
            borderBottomWidth: 1
          }}
        >
          <>
            <TouchableOpacity
              onPress={() => {
                meta.drill = [];
                meta.current = store.list;
                scrollRef.current.scrollTo({ x: 0, y: 0, animated: true });
                calcDebetKredit();
              }}
              style={styles.drillItem}
            >
              <Entypo name='home' size={16} />
            </TouchableOpacity>
            {meta.drill.length > 0 && (
              <Entypo
                name='chevron-right'
                style={{ marginHorizontal: 5, paddingBottom: 5 }}
              />
            )}
            {meta.drill.length === 0 && (
              <Text
                style={{
                  paddingHorizontal: 10,
                  paddingBottom: 5,
                  color: iOSColors.gray
                }}
              >
                &laquo; Root COA &raquo;
              </Text>
            )}
          </>
          {meta.drill.map((d: any, idx: number) => {
            if (meta.drill.length === idx + 1) {
              return null;
            }
            return (
              <View key={idx} style={styles.drillItem}>
                <TouchableOpacity
                  onPress={() => {
                    meta.drill.splice(idx + 1, meta.drill.length - idx - 1);
                    meta.current = store.list;
                    for (let i in meta.drill) {
                      let item = meta.drill[i];
                      if (meta.current[item.id]) {
                        meta.debet = meta.current[item.id].debet || 0;
                        meta.kredit = meta.current[item.id].kredit || 0;
                        meta.trx = meta.current[item.id].count || 0;
                        meta.current = meta.current[item.id].childs;
                      }
                    }
                    scrollRef.current.scrollTo({ x: 0, y: 0, animated: true });
                  }}
                >
                  <Text style={{ textTransform: 'capitalize' }}>
                    {d.name.toLowerCase()}
                  </Text>
                </TouchableOpacity>
                {idx !== meta.drill.length - 2 && (
                  <Entypo
                    name='chevron-right'
                    style={{ marginHorizontal: 5 }}
                  />
                )}
              </View>
            );
          })}
        </View>
        <View>
          {meta.drill.length > 0 && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingRight: 5
              }}
            >
              <Text style={styles.currentItemTitle}>
                {meta.drill[meta.drill.length - 1].name.toLowerCase()}
              </Text>
              <Text style={styles.amtTitle}>
                [{meta.drill[meta.drill.length - 1].id}]
              </Text>
            </View>
          )}
          <View
            style={{
              flexDirection: 'row',
              padding: 5,
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            {meta.mode === 'total' ? (
              (() => {
                const diff = meta.debet - meta.kredit;
                return (
                  <>
                    <View style={{ flexDirection: 'row' }}>
                      <Text
                        style={{
                          fontSize: 11,
                          color: diff > 0 ? 'green' : 'red',
                          fontWeight: 'bold'
                        }}
                      >
                        {money(diff > 0 ? meta.debet : meta.kredit)}
                      </Text>
                    </View>
                    {meta.drill.length === 0 ? (
                      <Text style={{ fontSize: 11 }}>{meta.trx} trx</Text>
                    ) : (
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          borderTopLeftRadius: 3,
                          borderBottomLeftRadius: 3,
                          borderWidth: 1,
                          borderColor: '#ccc',
                          borderRightWidth: 0,
                          paddingHorizontal: 10,
                          backgroundColor: '#ececeb',
                          marginRight: -5,
                          alignItems: 'center'
                        }}
                        onPress={() => {
                          navigation.navigate('Trx', {
                            id: meta.drill[meta.drill.length - 1].id,
                            name: meta.drill[meta.drill.length - 1].name
                          });
                        }}
                      >
                        <Text style={{ fontSize: 11 }}>{meta.trx} trx</Text>
                        <EvilIcons
                          name='chevron-right'
                          size={20}
                          style={{ marginRight: -8 }}
                        />
                      </TouchableOpacity>
                    )}
                  </>
                );
              })()
            ) : (
              <>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 11 }}>DEBET: </Text>
                  <Text
                    style={{ fontSize: 11, color: 'green', fontWeight: 'bold' }}
                  >
                    {money(meta.debet)}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 11 }}>{meta.trx} trx</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 11 }}>KREDIT: </Text>
                  <Text
                    style={{ fontSize: 11, color: 'red', fontWeight: 'bold' }}
                  >
                    {money(meta.kredit)}
                  </Text>
                </View>
              </>
            )}
          </View>
        </View>
      </View>

      <View style={{ alignItems: 'stretch', flex: 1 }}>
        <ScrollView
          ref={scrollRef}
          snapToEnd={true}
          style={{
            paddingHorizontal: 10
          }}
        >
          {/* {generateChart(meta, drillTo)} */}
          {Object.keys(meta.current)
            .sort((id: any, oldid: any) => {
              return id - oldid;

              // sort by debet credit
              // const item = meta.current[id];
              // const old = meta.current[oldid];
              // if (item.debet > old.debet) return -1;
              // else if (item.debet < old.debet) return 1;

              // if (item.kredit < old.kredit) return 1;
              // else if (item.kredit > old.kredit) return -1;
              // return 0;

              // sort by name alphabetically
              // return ('' + item.name).localeCompare(old.name);
            })
            .map((id, idx) => {
              const item = meta.current[id];
              return (
                <View key={idx}>
                  <TouchableOpacity
                    key={idx}
                    style={{
                      paddingBottom: 15,
                      paddingTop: idx > 0 ? 15 : 5
                    }}
                    onPress={() => {
                      drillTo(id, item);
                    }}
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <Text style={styles.itemTitle}>
                        {item.name.toLowerCase()}
                      </Text>
                      <Text style={styles.amtTitle}>[{id}]</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                      }}
                    >
                      {meta.mode === 'total' ? (
                        (() => {
                          const diff = (item.debet || 0) - (item.kredit || 0);
                          return (
                            <>
                              <View style={{ flexDirection: 'row' }}>
                                <Text
                                  style={{
                                    fontSize: 11,
                                    color: diff > 0 ? 'green' : 'red',
                                    fontWeight: 'bold'
                                  }}
                                >
                                  {money(
                                    diff > 0
                                      ? item.debet || 0
                                      : item.kredit || 0
                                  )}
                                </Text>
                              </View>
                              <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 11 }}>
                                  {item.count || 0} trx
                                </Text>
                              </View>
                            </>
                          );
                        })()
                      ) : (
                        <>
                          <View style={{ flex: 1 }}>
                            <Text style={styles.amtTitle}>DEBET</Text>
                            <Text
                              style={{
                                fontSize: 13,
                                ...systemWeights.semibold,
                                ...(item.debet > 0 ? { color: 'green' } : {})
                              }}
                            >
                              {money(item.debet || 0)}
                            </Text>
                          </View>

                          <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 11 }}>
                              {item.count} trx
                            </Text>
                          </View>
                          <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Text style={styles.amtTitle}>KREDIT</Text>
                            <Text
                              style={{
                                fontSize: 13,
                                ...systemWeights.semibold,
                                ...(item.kredit > 0
                                  ? { color: iOSColors.red }
                                  : {})
                              }}
                            >
                              {money(item.kredit || 0)}
                            </Text>
                          </View>
                        </>
                      )}
                    </View>
                  </TouchableOpacity>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      marginHorizontal: -5,
                      borderColor: '#aaa'
                    }}
                  />
                </View>
              );
            })}
        </ScrollView>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  drillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5
  },
  container: {
    backgroundColor: '#fafafa',
    position: 'absolute',
    alignItems: 'stretch',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start'
  },
  currentItemTitle: {
    ...systemWeights.light,
    paddingTop: 0,
    fontSize: 23,
    paddingLeft: 5,
    textTransform: 'capitalize'
  },
  itemTitle: {
    ...systemWeights.light,
    fontSize: 23,
    paddingBottom: 3,
    textTransform: 'capitalize'
  },
  amtTitle: {
    fontSize: 10,
    paddingBottom: 3,
    ...systemWeights.semibold,
    color: materialColors.blackSecondary
  }
});

// const generateChart = (meta: any, drillTo: any) => {
// const capitalize = s => {
//   if (typeof s !== 'string') return '';
//   return s.charAt(0).toUpperCase() + s.slice(1);
// };
//   const chartData = Object.keys(meta.current)
//     .map((key: any) => {
//       const item = meta.current[key];
//       const label = capitalize(
//         (item.name || '').toLowerCase().replace(/(.{25})..+/, '$1…')
//       );

//       const percent = (item[meta.chartKey] / meta[meta.chartKey]) * 100;

//       return {
//         x: percent > 1 ? `${label} ${Math.round(percent)}%` : '-',
//         y: item[meta.chartKey] || 0,
//         id: key
//       };
//     })
//     .filter((item: any) => item.x !== '-');

//   const chartLegendData = chartData.map((item: any) => {
//     return {
//       name: item.x
//     };
//   });
//   const colorScale = ['tomato', 'orange', 'gold', '#1C5253', 'navy'];
//   return (
//     <View>
//       <Text
//         style={{
//           ...systemWeights.thin,
//           fontSize: 15,
//           marginBottom: -20
//         }}
//       >
//         Persentase {capitalize(meta.chartKey)}
//       </Text>
//       <VictoryPie
//         data={chartData}
//         events={[
//           {
//             target: 'data',
//             eventHandlers: {
//               onClick: () => {
//                 return [
//                   {
//                     target: 'data',
//                     mutation: props => {
//                       const item = meta.current[props.datum.id];
//                       drillTo(props.datum.id, item);
//                     }
//                   }
//                 ];
//               }
//             }
//           }
//         ]}
//         colorScale={colorScale}
//       />
//       <View style={{ flexDirection: 'row-reverse' }}>
//         <TouchableOpacity
//           style={{
//             borderRadius: 2,
//             marginBottom: 5,
//             marginTop: -20,
//             backgroundColor: '#ccc',
//             paddingHorizontal: 10,
//             paddingVertical: 3
//           }}
//           onPress={() => {
//             meta.chartKey = meta.chartKey === 'debet' ? 'kredit' : 'debet';
//           }}
//         >
//           <Text style={{ fontSize: 14 }}>
//             View {meta.chartKey === 'debet' ? 'Kredit' : 'Debet'}
//           </Text>
//         </TouchableOpacity>
//       </View>
//       <View
//         style={{
//           borderTopWidth: 1,
//           borderBottomWidth: 1,
//           borderColor: '#ccc',
//           marginHorizontal: -5,
//           paddingTop: 5
//         }}
//       >
//         <VictoryLegend
//           height={34 * Math.ceil(chartData.length / 2)}
//           itemsPerRow={2}
//           style={{
//             labels: { fontSize: 16 }
//           }}
//           orientation='horizontal'
//           colorScale={colorScale}
//           data={chartLegendData}
//         />
//       </View>
//     </View>
//   );
// };
