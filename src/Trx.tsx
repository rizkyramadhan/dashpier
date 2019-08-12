import { Entypo, EvilIcons } from '@expo/vector-icons';
import { observer, useObservable } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';
import {
  iOSColors,
  materialColors,
  systemWeights
} from 'react-native-typography';
import store from './store';
import api from './api';
import { toJS } from 'mobx';

const money = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export default observer(({ navigation }: any) => {
  const id = navigation.getParam('id');
  const name = navigation.getParam('name');

  const meta = useObservable({
    list: [],
    loading: true
  });

  useEffect(() => {
    const fetch = async () => {
      meta.list = (await api.get(`/trx?id=${id}`)).body;
      meta.loading = false;
    };
    fetch();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}
          style={{ marginLeft: -15, marginRight: -10 }}
        >
          <EvilIcons name='chevron-left' size={64} />
        </TouchableOpacity>
        <Text style={styles.title}>{name}</Text>
      </View>

      <View style={{ alignItems: 'stretch', flex: 1 }}>
        {meta.loading ? (
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.itemTitle}>Loading...</Text>
          </View>
        ) : (
          <FlatList
            data={meta.list}
            renderItem={({ item }: any) => (
              <View
                style={{
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderColor: '#ccc',
                  padding: 10
                }}
              >
                <Text style={styles.itemTitle}>{item.desc}</Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Text style={styles.amtTitle}>{item.docno}</Text>
                  <Text style={styles.amtTitle}>{item.date}</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 5 }}>
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

                  <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Text style={styles.amtTitle}>KREDIT</Text>
                    <Text
                      style={{
                        fontSize: 13,
                        ...systemWeights.semibold,
                        ...(item.kredit > 0 ? { color: iOSColors.red } : {})
                      }}
                    >
                      {money(item.kredit || 0)}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        )}
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
  title: {
    ...systemWeights.light,
    fontSize: 35,
    color: iOSColors.black,
    marginVertical: 15
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
    fontSize: 18,
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
