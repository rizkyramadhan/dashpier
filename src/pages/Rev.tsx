import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from '../components/Title';

export default ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Title navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    position: 'absolute',
    alignItems: 'stretch',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start'
  }
});
