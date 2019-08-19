import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import Card from '../../components/Card';
import { color } from '../../misc/styles';
import store from '../../misc/store';
import { observer } from 'mobx-react-lite';
import { money } from '../../misc/util';

export default observer(({ navigation }: any) => {
  return (
    <Card
      size="double-short"
      onPress={() => {
        navigation.push('Cash');
      }}
    >
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
          Income Statement
        </Text>
        <AntDesign name='tagso' size={18} color={color.black} />
      </View>
    </Card>
  );
});
