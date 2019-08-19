import _ from 'lodash';
import { observer, useObservable } from 'mobx-react-lite';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Divider, Menu } from 'react-native-paper';
import store, { actions } from '../misc/store';
import { color } from '../misc/styles';
import { Entypo } from '@expo/vector-icons';

export default observer(({ navigation }: any) => {
  const meta = useObservable({
    loading: true,
    menuVisible: false
  });

  let org = '';
  if (store.org) {
    org = _.find(store.orglist, (item: any) => item.id === store.org).name;
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
      {navigation && (
        <TouchableOpacity
          style={{ marginBottom: 10, marginLeft: 5, marginRight: -10,padding:10 }}
          onPress={() => {
            navigation.pop();
          }}
        >
          <Entypo name={'chevron-thin-left'} size={28} color={color.grey} />
        </TouchableOpacity>
      )}
      <View
        style={{
          flexDirection: 'column',
          paddingHorizontal: 25,
          paddingTop: 45,
          alignItems: 'flex-start',
          paddingBottom: 60
        }}
      >
        <Text style={{ fontFamily: 'light', fontSize: 25 }}>
          {store.client.name}
        </Text>

        <Menu
          style={{ padding: 0 }}
          visible={meta.menuVisible}
          onDismiss={() => {
            meta.menuVisible = false;
          }}
          anchor={
            <TouchableOpacity
              onPress={() => (meta.menuVisible = true)}
              style={{
                borderWidth: 1,
                borderColor: color.lightgrey,
                paddingHorizontal: 10,
                paddingVertical: 2,
                borderRadius: 4,
                marginLeft: -5
              }}
            >
              <Text
                style={{ fontFamily: 'bold', fontSize: 14, color: color.grey }}
              >
                {org || 'All Organization'}
              </Text>
            </TouchableOpacity>
          }
        >
          <Menu.Item
            onPress={() => {
              meta.menuVisible = false;
              store.org = '';
              actions.reload();
            }}
            title='All Organization'
          />
          <Divider />
          {store.orglist.map((item: any, key: number) => {
            return (
              <Menu.Item
                onPress={() => {
                  meta.menuVisible = false;
                  store.org = item.id;
                  actions.reload();
                }}
                key={key}
                title={item.name}
              />
            );
          })}
        </Menu>
      </View>
    </View>
  );
});
