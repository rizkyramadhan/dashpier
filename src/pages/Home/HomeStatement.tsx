import { AntDesign } from '@expo/vector-icons';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Text, View } from 'react-native';
import { VictoryArea, VictoryGroup } from 'victory';
import Card from '../../components/Card';
import store from '../../misc/store';
import { color } from '../../misc/styles';
import { money, moneyFontSize } from '../../misc/util';

export default observer(({ navigation }: any) => {
  return (
    <Card
      size='double-short'
      style={{
        marginBottom: 70,
        paddingBottom: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      }}
      onPress={() => {
        navigation.push('Statement');
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Text
          style={{
            fontFamily: 'regular',
            fontSize: 16,
            color: color.black
          }}
        >
          Income Statement
        </Text>
        <AntDesign name='linechart' size={18} color={color.black} />
      </View>

      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <View style={{ marginLeft: 20 }}>
          <Text style={{ color: color.blue, fontSize: 13, fontFamily: 'bold' }}>
            IDR
          </Text>
          <Text
            style={{
              color: color.blue,
              fontFamily: 'light',
              fontSize: moneyFontSize(store.is.rev.total)
            }}
          >
            {money(store.is.rev.total, false)}
          </Text>
          <Text style={{ color: color.blue, fontSize: 13, fontFamily: 'bold' }}>
            REVENUE
          </Text>
        </View>

        <View style={{ alignItems: 'flex-end', marginRight: 20 }}>
          <Text
            style={{ color: color.purple, fontSize: 13, fontFamily: 'bold' }}
          >
            IDR
          </Text>
          <Text
            style={{
              color: color.purple,
              fontFamily: 'light',
              fontSize: moneyFontSize(store.is.rev.total)
            }}
          >
            {money(store.is.exp.total, false)}
          </Text>
          <Text
            style={{ color: color.purple, fontSize: 13, fontFamily: 'bold' }}
          >
            EXPENSES
          </Text>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: -20,
          marginTop: 20,
          marginBottom: -25
        }}
      >
        <VictoryGroup
          height={100}
          padding={{
            top: 10,
            left: 0,
            bottom: 0,
            right: 0
          }}
          style={{
            parent: { padding: 0, margin: 0 },
            data: { strokeWidth: 1, fillOpacity: 0.4 }
          }}
        >
          <VictoryArea
            interpolation='catmullRom'
            labels={() => null}
            style={{
              data: { fill: color.purple, strokeWidth: 1 }
            }}
            data={Object.keys(store.is.exp.list).map(key => {
              const item = store.is.exp.list[key];
              return {
                x: key,
                y: Math.abs(item.total)
              };
            })}
          />
          <VictoryArea
            interpolation='catmullRom'
            labels={() => null}
            style={{
              data: { fill: color.blue, strokeWidth: 1 }
            }}
            data={Object.keys(store.is.rev.list).map(key => {
              const item = store.is.rev.list[key];
              return {
                x: key,
                y: Math.abs(item.total)
              };
            })}
          />
        </VictoryGroup>
      </View>
    </Card>
  );
});
