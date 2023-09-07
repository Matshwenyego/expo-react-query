import React from 'react';
import { Button as AppButton } from 'react-native';

const Button = ({ onPress, text, style }) => {
  return (
    <AppButton title={text} style={style} onPress={onPress}/>
  )
}

export default Button;