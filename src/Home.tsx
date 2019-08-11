import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {
  iOSColors,
  materialColors,
  systemWeights
} from 'react-native-typography';
import store from './store';
import api from './api';

export default observer(({ navigation }: any) => {
  useEffect(() => {
    const fetch = async () => {
      store.list = (await api.get('/get')).body;
      // meta.list = require('./src/get.json');
    };
    fetch();
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
            navigation.navigate('Raw');
          }}
          style={styles.itemContainer}
        >
          <Text style={styles.itemTitle}>Balance Sheet</Text>
          <Text style={styles.subTitle}>Asset, Liability and Equity</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Raw');
          }}
          style={styles.itemContainer}
        >
          <Text style={styles.itemTitle}>Profit and Loss</Text>
          <Text style={styles.subTitle}>Revenue, Cost and Expenses</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Raw');
          }}
          style={styles.itemContainer}
        >
          <Text style={styles.itemTitle}>Raw</Text>
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
    fontSize: 20,
    ...systemWeights.regular,
    color: materialColors.blackSecondary
  }
});
