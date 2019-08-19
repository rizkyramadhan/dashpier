import { observer } from 'mobx-react-lite';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Title from '../components/Title';
import { styles } from '../misc/styles';

export default observer(({ navigation }: any) => {
  return (
    <ScrollView style={styles.body}>
      <Title />
      <View
        style={{
          flexDirection: 'row',
          padding: 15,
          paddingTop: 0
        }}
      />
    </ScrollView>
  );
});
