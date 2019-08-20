import { observer } from 'mobx-react-lite';
import React from 'react';
import { View } from 'react-native';
import {
  VictoryArea,
  VictoryAxis,
  VictoryChart,
  VictoryGroup,
  VictoryLabel
} from 'victory';
import Body from '../components/Body';
import Title from '../components/Title';
import store from '../misc/store';
import { color } from '../misc/styles';
import { money, moneyFontSize } from '../misc/util';
import { Text } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import Card from '../components/Card';

import _ from 'lodash';

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

const year = new Date().getFullYear();

export default observer(({ navigation }: any) => {
  const all = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const arrrev = _.values(store.is.rev.list);
  const avgrev = Math.abs(_.sumBy(arrrev, 'total') / arrrev.length);

  const arrexp = _.values(store.is.exp.list);
  const avgexp = Math.abs(_.sumBy(arrexp, 'total') / arrexp.length);

  return (
    <Body>
      <Title navigation={navigation} />

      <View
        style={{
          marginTop: -15,
          flexDirection: 'row',
          paddingTop: 0,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <View style={{ alignItems: 'flex-end' }}>
          <Text
            style={{
              fontFamily: 'light',
              fontSize: 30,
              color: color.black
            }}
          >
            Income Statement
          </Text>
          <Text
            style={{
              marginTop: -10,
              fontFamily: 'bold',
              fontSize: 15,
              color: color.black
            }}
          >
            {year}
          </Text>
        </View>
      </View>

      <VictoryChart>
        <VictoryAxis
          dependentAxis
          width={500}
          tickFormat={t => {
            if (t > 999999999) {
              return 1000000000 + ' M';
            }
            return money(t / 1000000) + ' jt';
          }}
          style={{
            axis: {
              stroke: 'transparent'
            },
            ticks: {
              stroke: 'transparent'
            },
            tickLabels: {
              color: color.grey,
              fontSize: 11,
              fill: color.grey
            }
          }}
          standalone={false}
        />

        <VictoryAxis
          standalone={false}
          style={{
            axis: {
              stroke: 'transparent'
            },
            tickLabels: {
              color: color.grey,
              fontSize: 11,
              fill: color.grey
            }
          }}
        />
        <VictoryGroup
          style={{
            data: { strokeWidth: 1, fillOpacity: 0.4 }
          }}
        >
          <VictoryArea
            labelComponent={<VictoryLabel style={{ fontSize: 5 }} dy={20} />}
            interpolation='catmullRom'
            style={{
              data: { fill: color.purple, strokeWidth: 1 }
            }}
            data={Object.keys(store.is.exp.list).map(key => {
              const item = store.is.exp.list[key];
              return {
                x: monthNames[parseInt(key)],
                y: Math.abs(item.total)
              };
            })}
          />
          <VictoryArea
            labelComponent={<VictoryLabel style={{ fontSize: 5 }} dy={20} />}
            interpolation='catmullRom'
            style={{
              data: { fill: color.blue, strokeWidth: 1 }
            }}
            data={Object.keys(store.is.rev.list).map((key: string) => {
              const item = store.is.rev.list[key];
              return {
                x: monthNames[parseInt(key)],
                y: Math.abs(item.total)
              };
            })}
          />
        </VictoryGroup>
      </VictoryChart>

      <Card
        size='double-short'
        style={{
          marginBottom: 30
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <View style={{ marginLeft: 15 }}>
            <Text
              style={{ color: color.blue, fontSize: 13, fontFamily: 'bold' }}
            >
              REVENUE
            </Text>
            <Text
              style={{
                color: color.blue,
                marginTop: 20,
                fontSize: 13,
                fontFamily: 'bold'
              }}
            >
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

            <Text
              style={{ color: color.blue, fontSize: 13, fontFamily: 'bold' }}
            >
              THIS YEAR
            </Text>
            <Text
              style={{
                color: color.blue,
                fontSize: 13,
                fontFamily: 'bold',
                marginTop: 20
              }}
            >
              IDR
            </Text>
            <Text
              style={{
                color: color.blue,
                fontFamily: 'light',
                fontSize: moneyFontSize(store.is.rev.total)
              }}
            >
              {money(avgrev, false)}
            </Text>

            <Text
              style={{ color: color.blue, fontSize: 13, fontFamily: 'bold' }}
            >
              AVG / MONTH
            </Text>
          </View>

          <View style={{ alignItems: 'flex-end', marginRight: 15 }}>
            <Text
              style={{ color: color.purple, fontSize: 13, fontFamily: 'bold' }}
            >
              EXPENSES
            </Text>
            <Text
              style={{
                color: color.purple,
                marginTop: 20,
                fontSize: 13,
                fontFamily: 'bold'
              }}
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
              THIS YEAR
            </Text>

            <Text
              style={{
                color: color.purple,
                marginTop: 20,
                fontSize: 13,
                fontFamily: 'bold'
              }}
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
              {money(avgexp, false)}
            </Text>
            <Text
              style={{ color: color.purple, fontSize: 13, fontFamily: 'bold' }}
            >
              AVG / MONTH
            </Text>
          </View>
        </View>
      </Card>

      <View style={{ marginBottom: 40 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              fontFamily: 'regular',
              padding: 10,
              paddingLeft: 30,
              fontSize: 16,
              flexBasis: '30%'
            }}
          >
            Month
          </Text>
          <Text
            style={{
              fontFamily: 'regular',
              fontSize: 16,
              padding: 10,
              textAlign: 'left',
              color: color.blue,
              flexBasis: '35%'
            }}
          >
            Revenue
          </Text>
          <Text
            style={{
              fontFamily: 'regular',
              fontSize: 16,
              padding: 10,
              textAlign: 'left',
              color: color.purple,
              flexBasis: '35%'
            }}
          >
            Expenses
          </Text>
        </View>
        {all.map((key, idx) => {
          return (
            <Card size='single-short' key={idx}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                  style={{
                    fontFamily: 'regular',
                    fontSize: 16,
                    textAlign: 'left',
                    flexBasis: '30%'
                  }}
                >
                  {monthNames[key]}
                </Text>
                <Text
                  style={{
                    fontFamily: 'regular',
                    fontSize: 16,
                    color: color.blue,
                    flexBasis: '35%'
                  }}
                >
                  {money(Math.abs((store.is.rev.list[idx] || {}).total))}
                </Text>
                <Text
                  style={{
                    fontFamily: 'regular',
                    fontSize: 16,
                    color: color.purple,
                    flexBasis: '35%'
                  }}
                >
                  {money(Math.abs((store.is.exp.list[idx] || {}).total))}
                </Text>
              </View>
            </Card>
          );
        })}
      </View>
    </Body>
  );
});
