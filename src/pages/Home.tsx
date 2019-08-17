import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {
  iOSColors,
  materialColors,
  systemWeights
} from 'react-native-typography';
import store from '../misc/store';
import { money } from '../misc/util';
import { toJS } from 'mobx';
import { actions } from '../misc/store';

export default observer(({ navigation }: any) => {
  useEffect(() => {
    if (Object.keys(toJS(store.list) || {}).length === 0) {
      actions.reload();
    }
  }, []);

  if (Object.keys(store.list || {}).length === 0) {
    return (
      <View style={styles.containerCenter}>
        <Text style={styles.title}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
        <Text style={styles.title}>Dashpier</Text>
      </View>
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Cboh');
          }}
          style={styles.itemContainer}
        >
          <Text style={styles.itemTitle}>Cash &amp; Bank on Hand </Text>
          <Text style={styles.subTitle}>{money(store.cboh.total)}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Recv');
          }}
          style={styles.itemContainer}
        >
          <Text style={styles.itemTitle}>Receivables</Text>
          <Text style={styles.subTitle}>{money(store.recv.total)}</Text>
          <Text style={styles.subTitle}>Open Invoice</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Payb');
          }}
          style={styles.itemContainer}
        >
          <Text style={styles.itemTitle}>Payables</Text>
          <Text style={styles.subTitle}>{money(store.payb)}</Text>
          <Text style={styles.subTitle}>Open Bill</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('IncStm');
          }}
          style={styles.itemContainer}
        >
          <Text style={styles.itemTitle}>Income Statement</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <View>
              <Text style={styles.subTitle}>
                {money(store.income.rev.year)}
              </Text>
              <Text style={styles.subTitle}>Revenue</Text>
            </View>
            <View>
              <Text style={styles.subTitle}>
                {money(store.income.exp.year)}
              </Text>
              <Text style={styles.subTitle}>Expenses</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Rev');
          }}
          style={styles.itemContainer}
        >
          <Text style={styles.itemTitle}>Revenue</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <View>
              <Text style={styles.subTitle}>
                {money(store.income.rev.year)}
              </Text>
              <Text style={styles.subTitle}>To date</Text>
            </View>
            <View>
              <Text style={styles.subTitle}>
                {money(store.income.rev.avgmth)}
              </Text>
              <Text style={styles.subTitle}>Avg per month</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Exp');
          }}
          style={styles.itemContainer}
        >
          <Text style={styles.itemTitle}>Expenses</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <View>
              <Text style={styles.subTitle}>
                {money(store.income.exp.year)}
              </Text>
              <Text style={styles.subTitle}>To date</Text>
            </View>
            <View>
              <Text style={styles.subTitle}>
                {money(store.income.exp.avgmth)}
              </Text>
              <Text style={styles.subTitle}>Avg per month</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Raw');
          }}
          style={styles.itemContainer}
        >
          <Text style={styles.itemTitle}>Trial Balance</Text>
          <Text style={styles.subTitle}>All Charts of Accounts</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  drillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5
  },
  containerCenter: {
    backgroundColor: '#fafafa',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    backgroundColor: '#fafafa',
    position: 'absolute',
    alignItems: 'stretch',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start'
  },
  itemContainer: {
    flexDirection: 'column',
    padding: 10
  },
  title: {
    ...systemWeights.light,
    fontSize: 35,
    color: iOSColors.black,
    marginVertical: 15
  },
  itemTitle: {
    ...systemWeights.thin,
    fontSize: 35,
    textTransform: 'capitalize'
  },
  subTitle: {
    fontSize: 14,
    ...systemWeights.semibold,
    color: materialColors.blackSecondary
  }
});
