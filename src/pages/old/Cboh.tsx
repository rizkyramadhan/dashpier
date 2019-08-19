import { observer } from 'mobx-react-lite';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { iOSUIKit, systemWeights } from 'react-native-typography';
import Org from './Org';
import Title from './Title';
import store from '../../misc/store';
import { money } from '../../misc/util';

export default observer(({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Title navigation={navigation} text='Cash &amp; Bank' />
      <View style={{ paddingLeft: 50, paddingRight: 10, paddingBottom: 10 }}>
        <Text
          style={{
            fontSize: 22,
            textAlign: 'left',
            marginTop: -5,
            ...systemWeights.light
          }}
        >
          {money(store.cboh.total)}
        </Text>
        <Org style={{ marginTop: 10 }} />
      </View>
      <View style={{ padding: 10 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Text style={iOSUIKit.title3Emphasized}>Cash Account</Text>
          <Text>{money(store.cboh.list[0].debet - store.cboh.list[0].kredit, false)}</Text>
        </View>
        <View style={{ padding: 10 }}>
          {Object.keys(store.cboh.list[0].childs).map((key: any, k: number) => {
            const item = store.cboh.list[0].childs[key];

            if (item.debet - item.kredit === 0) return null;
            return (
              <TouchableOpacity
                key={k}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
                onPress={() => {
                  navigation.navigate('Trx', {
                    id: key,
                    name: item.name
                  });
                }}
              >
                <Text>{item.name}</Text>
                <Text>{money(item.debet - item.kredit, false)}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Text style={iOSUIKit.title3Emphasized}>Bank Account</Text>
          <Text>{money(store.cboh.list[1].debet - store.cboh.list[1].kredit, false)}</Text>
        </View>
        <View style={{ padding: 10 }}>
          {Object.keys(store.cboh.list[1].childs).map((key: any, k: number) => {
            const item = store.cboh.list[1].childs[key];
            if (item.debet - item.kredit === 0) return null;
            return (
              <TouchableOpacity
                key={k}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
                onPress={() => {
                  navigation.navigate('Trx', {
                    id: key,
                    name: item.name
                  });
                }}
              >
                <Text>{item.name}</Text>
                <Text>{money(item.debet - item.kredit, false)}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    position: 'absolute',
    alignItems: 'stretch',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start'
  }
});
