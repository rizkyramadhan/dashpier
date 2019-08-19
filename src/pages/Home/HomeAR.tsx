import { AntDesign } from '@expo/vector-icons';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Text, View } from 'react-native';
import Card from '../../components/Card';
import store from '../../misc/store';
import { color } from '../../misc/styles';
import { money } from '../../misc/util';

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
        <AntDesign name='menuunfold' size={18} color={color.black} />
      </View>
      <View style={{ alignSelf: 'center', marginTop: 30 }}>
        <Text style={{ color: color.green, fontSize: 13, fontFamily: 'bold' }}>
          IDR
        </Text>
        <Text
          style={{
            color: color.green,
            fontFamily: 'light',
            fontSize: store.recv.total > 999999999 ? 19 : 24
          }}
        >
          {money(store.recv.total, false)}
        </Text>
        <Text style={{ color: color.grey, fontSize: 13, fontFamily: 'bold' }}>
          Open Invoice
        </Text>
      </View>
    </Card>
  );
});
