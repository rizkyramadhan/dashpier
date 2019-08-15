import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { systemWeights, iOSColors } from 'react-native-typography';

export default ({ navigation, text }: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.pop();
        }}
        style={{ marginLeft: -15, marginRight: -10 }}
      >
        <EvilIcons name='chevron-left' size={64} />
      </TouchableOpacity>
      <Text
        style={{
          ...systemWeights.light,
          fontSize: 35,
          color: iOSColors.black,
          marginVertical: 15
        }}
      >
        {text || 'Dashpier'}
      </Text>
    </View>
  );
};
