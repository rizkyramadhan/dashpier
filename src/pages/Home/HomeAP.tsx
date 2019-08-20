import { FontAwesome } from '@expo/vector-icons';
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
        navigation.push('AP');
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
          Payable
        </Text>
        <FontAwesome name='send-o' size={18} color={color.black} />
      </View>
      <View style={{ alignSelf: 'center', marginTop: 30 }}>
        <Text style={{ color: color.orange, fontSize: 13, fontFamily: 'bold' }}>
          IDR
        </Text>
        <Text
          style={{
            color: color.orange,
            fontFamily: 'light',
            fontSize: moneyFontSize(store.payb.total)
          }}
        >
          {money(store.payb.total, false)}
        </Text>
        <Text style={{ color: color.grey, fontSize: 13, fontFamily: 'bold' }}>
          Open Bill
        </Text>
      </View>
      <VictoryPie
        data={_.values(store.payb.list).map((item: any, key: number) => ({
          x: item.name,
          y: item.sum * 1
        }))}
        colorScale="red"
        innerRadius={100}
      />
    </Card>
  );
});
