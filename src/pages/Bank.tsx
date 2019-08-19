import { AntDesign } from '@expo/vector-icons';
import _ from 'lodash';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../components/Card';
import Title from '../components/Title';
import store from '../misc/store';
import { color, styles } from '../misc/styles';
import { money } from '../misc/util';

export default observer(({ navigation }: any) => {
  return (
    <ScrollView style={styles.body}>
      <Title navigation={navigation} />
      <View
        style={{
          flexDirection: 'row',
          padding: 8,
          paddingTop: 0
        }}
      >
        <Card size='double-short'>
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
              Current Bank Balance
            </Text>
            <AntDesign name='tagso' size={18} color={color.black} />
          </View>
          <View style={{ marginVertical: 10, marginLeft: 10 }}>
            <Text
              style={{ color: color.blue, fontSize: 13, fontFamily: 'bold' }}
            >
              IDR
            </Text>
            <Text
              style={{ color: color.blue, fontFamily: 'light', fontSize: 24 }}
            >
              {money(store.cash.total, false)}
            </Text>
            <Text
              style={{ color: color.grey, fontSize: 13, fontFamily: 'bold' }}
            >
              as of today
            </Text>
          </View>
        </Card>
      </View>
      <Text
        style={{
          fontFamily: 'light',
          fontSize: 30,
          color: color.grey,
          padding: 20
        }}
      >
        Details
      </Text>
      <View
        style={{
          padding: 8,
          paddingTop: 0
        }}
      >
        {_.values(store.bank.list).map((item: any, key: number) => {
          return (
            <Card size='double-short' key={key}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <Text>{item.name}</Text>
                <Text>{money(item.debet - item.kredit)}</Text>
              </View>
            </Card>
          );
        })}
      </View>
    </ScrollView>
  );
});