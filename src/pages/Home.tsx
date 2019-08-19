import * as Font from 'expo-font';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { ActivityIndicator, View, Platform } from 'react-native';
import Body from '../components/Body';
import Title from '../components/Title';
import store, { actions } from '../misc/store';
import HomeAP from './Home/HomeAP';
import HomeAR from './Home/HomeAR';
import HomeBank from './Home/HomeBank';
import HomeCash from './Home/HomeCash';
import HomeStatement from './Home/HomeStatement';

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

  if (store.client.name && Platform.OS === 'web') {
    (document as any).title = store.client.name;
  }

  if (Object.keys(store.list || {}).length === 0) {
    return (
      <Body>
        <View
          style={{
            flex: 1,
            margin: 50,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ActivityIndicator size='large' />
        </View>
      </Body>
    );
  }

  return (
    <Body>
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
    </Body>
  );
});
