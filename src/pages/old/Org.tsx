import { FontAwesome } from '@expo/vector-icons';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Picker, View } from 'react-native';
import store, { actions } from '../../misc/store';

export default observer(({ style }: any) => {
  const sel = store.orglist.find((item: any) => item.id === store.org);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ddd',
        borderRadius: 5,
        paddingLeft: 5,
        flexDirection: 'row',
        alignItems: 'center',
        ...style
      }}
    >
      <FontAwesome name='building-o' size={20} />
      <View style={{ flex: 1, alignItems: 'stretch', height: 30 }}>
        <Picker
          selectedValue={sel ? sel.id : ' '}
          style={{
            flex: 1,
            borderWidth: 0,
            borderRadius: 10,
            backgroundColor: 'transparent'
          }}
          onValueChange={(itemValue, itemIndex) => {
            store.org = itemValue;
            actions.reload();
          }}
        >
          <Picker.Item label='- All -' value='' />
          {store.orglist.map((item: any, idx: number) => (
            <Picker.Item label={item.name} key={idx} value={item.id} />
          ))}
        </Picker>
      </View>
    </View>
  );
});
