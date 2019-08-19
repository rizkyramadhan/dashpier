import { AntDesign } from '@expo/vector-icons';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Text, View } from 'react-native';
import Card from '../../components/Card';
import store from '../../misc/store';
import { color } from '../../misc/styles';
import { money } from '../../misc/util';

const img = require('../../imgs/bg2.png');
export default observer(({ style, navigation }: any) => {
  return (
    <Card
      style={style}
      bg={img}
      onPress={() => {
        navigation.push('Bank');
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
          Bank
        </Text>
        <AntDesign name='home' size={18} color={color.black} />
      </View>
      <View style={{ alignSelf: 'center', marginTop: 30 }}>
        <Text style={{ color: color.blue, fontSize: 13, fontFamily: 'bold' }}>
          IDR
        </Text>
        <Text
          style={{
            color: color.blue,
            fontFamily: 'light',
            fontSize: store.bank.total > 999999999 ? 19 : 24
          }}
        >
          {money(store.bank.total, false)}
        </Text>
        <Text style={{ color: color.grey, fontSize: 13, fontFamily: 'bold' }}>
          as of today
        </Text>
      </View>
    </Card>
  );
});
