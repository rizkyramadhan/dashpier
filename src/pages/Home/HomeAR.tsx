import { AntDesign } from '@expo/vector-icons';
import _ from 'lodash';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Text, View } from 'react-native';
import { VictoryPie } from 'victory';
import Card from '../../components/Card';
import store from '../../misc/store';
import { color } from '../../misc/styles';
import { money, moneyFontSize } from '../../misc/util';

export default observer(({ style, navigation }: any) => {
  return (
    <Card
      style={style}
      size='single-short'
      onPress={() => {
        navigation.push('AR');
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
          style={{ fontFamily: 'regular', fontSize: 16, color: color.black }}
        >
          Receivable
        </Text>
        <AntDesign name='clouddownloado' size={18} color={color.black} />
      </View>
      <View style={{ alignSelf: 'center', marginTop: 30 }}>
        <Text style={{ color: color.green, fontSize: 13, fontFamily: 'bold' }}>
          IDR
        </Text>
        <Text
          style={{
            color: color.green,
            fontFamily: 'light',
            fontSize: moneyFontSize(store.recv.total)
          }}
        >
          {money(store.recv.total, false)}
        </Text>
        <Text style={{ color: color.grey, fontSize: 13, fontFamily: 'bold' }}>
          Open Invoice
        </Text>
      </View>
      <VictoryPie
        labels={(item: any) => ''}
        data={_.values(store.recv.list).map((item: any, key: number) => ({
          x: item.name,
          y: item.sum * 1
        }))}
        colorScale='green'
        innerRadius={100}
      />
    </Card>
  );
});
