import { observer } from 'mobx-react-lite';
import React from 'react';
import { View } from 'react-native';
import Body from '../components/Body';
import Title from '../components/Title';

export default observer(({ navigation }: any) => {
  return (
    <Body>
      <Title />
      <View
        style={{
          flexDirection: 'row',
          padding: 15,
          paddingTop: 0
        }}
      />
    </Body>
  );
});
