import React from 'react';
import { ImageBackground, View } from 'react-native';
import TapLink from './TapLink';

interface ICardProps {
  children?: any;
  style?: any;
  bg?: any;
  onPress?: any;
  size?: 'single' | 'single-short' | 'double' | 'double-short';
}

export default ({
  children,
  style,
  size = 'single',
  bg, 
  onPress
}: ICardProps) => {
  let flexBasis = '50%';
  let height: any = 280;
  if (size === 'single-short') height = null;
  if (size === 'double') flexBasis = '100%';
  if (size === 'double-short') {
    flexBasis = '100%';
    height = null;
  }

  return (
    <View
      style={{
        flexBasis
      }}
    >
      <TapLink
        onPress={onPress}
        style={[
          {
            borderRadius: 18,
            backgroundColor: '#fff',
            marginHorizontal: 8,
            marginBottom: 8
          },
          style
        ]}
      >
        {bg ? (
          <ImageBackground
            style={{
              padding: 20,
              height,
              borderRadius: 18
            }}
            source={bg}
          >
            {children}
          </ImageBackground>
        ) : (
          <View
            style={{
              padding: 20,
              height,
              borderRadius: 18
            }}
          >
            {children}
          </View>
        )}
      </TapLink>
    </View>
  );
};
