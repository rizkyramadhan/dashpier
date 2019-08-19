import * as Font from 'expo-font';
import _ from 'lodash';
import { toJS } from 'mobx';
import { observer, useObservable } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../components/Card';
import store, { actions } from '../misc/store';
import { styles } from '../misc/styles';
import HomeBank from './Home/HomeBank';
import HomeCash from './Home/HomeCash';
import Title from '../components/Title';
import HomeStatement from './Home/HomeStatement';
import HomeAP from './Home/HomeAP';
import HomeAR from './Home/HomeAR';

export default observer(({ navigation }: any) => {
  useEffect(() => {
    if (Object.keys(toJS(store.list) || {}).length === 0) {
      actions.reload();
    }

    Font.loadAsync({
      light: require('../../assets/fonts/nunito/Nunito-Light.ttf'),
      regular: require('../../assets/fonts/nunito/Nunito-Regular.ttf'),
      bold: require('../../assets/fonts/nunito/Nunito-Bold.ttf'),
      black: require('../../assets/fonts/nunito/Nunito-Black.ttf')
    });
  }, []);

  if (Object.keys(store.list || {}).length === 0) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  return (
    <ScrollView style={styles.body}>
      <Title />
      <View
        style={{
          flexDirection: 'row',
          padding: 8,
          paddingTop: 0
        }}
      >
        <HomeCash navigation={navigation} />
        <HomeBank navigation={navigation} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 8,
          paddingTop: 0
        }}
      >
        <HomeAP navigation={navigation} />
        <HomeAR navigation={navigation} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 8,
          paddingTop: 0
        }}
      >
        <HomeStatement navigation={navigation} />
      </View>
    </ScrollView>
  );
});
