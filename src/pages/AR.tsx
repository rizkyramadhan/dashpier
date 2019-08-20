import { AntDesign } from '@expo/vector-icons';
import _ from 'lodash';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Text, View } from 'react-native';
import Body from '../components/Body';
import Card from '../components/Card';
import Title from '../components/Title';
import store from '../misc/store';
import { color } from '../misc/styles';
import { money } from '../misc/util';
import { VictoryPie } from 'victory';

export default observer(({ navigation }: any) => {
  return (
    <Body>
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
              Receivable
            </Text>
            <AntDesign name='clouddownloado' size={18} color={color.black} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginVertical: 10, marginLeft: 10 }}>
              <Text
                style={{ color: color.green, fontSize: 13, fontFamily: 'bold' }}
              >
                IDR
              </Text>
              <Text
                style={{
                  color: color.green,
                  fontFamily: 'light',
                  fontSize: 24
                }}
              >
                {money(store.recv.total, false)}
              </Text>
              <Text
                style={{ color: color.grey, fontSize: 13, fontFamily: 'bold' }}
              >
                Open Invoice
              </Text>
            </View>

            <VictoryPie
              data={_.values(store.recv.list).map((item: any, key: number) => ({
                x: item.name,
                y: item.sum * 1
              }))}
              colorScale='green'
              innerRadius={100}
            />
          </View>
        </Card>
      </View>
      <Text
        style={{
          fontFamily: 'light',
          fontSize: 24,
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
        {_.values(store.recv.list)
          .sort((a, b) => b.sum - a.sum)
          .map((item: any, key: number) => {
            return (
              <Card size='double-short' key={key}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap'
                  }}
                >
                  <Text>{item.name}</Text>
                  <Text>{money(item.sum)}</Text>
                </View>
              </Card>
            );
          })}
      </View>
    </Body>
  );
});
