import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import Card from '../../components/Card';
import { color } from '../../misc/styles';
import store from '../../misc/store';
import { observer } from 'mobx-react-lite';
import { money, moneyFontSize } from '../../misc/util';

const img = require('../../imgs/bg.png');
export default observer(({ navigation }: any) => {
  return (
    <Card
      bg={img}
      onPress={() => {
        navigation.push('Cash');
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
          Cash
        </Text>
        <AntDesign name='tagso' size={18} color={color.black} />
      </View>
      <View style={{ alignSelf: 'center', marginTop: 30 }}>
        <Text style={{ color: color.purple, fontSize: 13, fontFamily: 'bold' }}>
          IDR
        </Text>
        <Text
          style={{
            color: color.purple,
            fontFamily: 'light',
            fontSize: moneyFontSize(store.cash.total)
          }}
        >
          {money(store.cash.total, false)}
        </Text>
        <Text style={{ color: color.grey, fontSize: 13, fontFamily: 'bold' }}>
          as of today
        </Text>
      </View>
    </Card>
  );
});
