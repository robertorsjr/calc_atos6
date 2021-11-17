import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {styles} from "./styles";
import {useDarkMode} from "../../hooks/useDarkMode";

type ButtonProps = TouchableOpacityProps & {
  value: number | string,
}

export default function Button({ value, ...rest }: ButtonProps) {
  const {isDarkMode} = useDarkMode()
  const isDefault = value === 'C' || value === '+/-' || value === '%'
  const isOperator = value !== ',' && typeof value === "string" && !isDefault
  const style = styles(isOperator, isDefault, value, isDarkMode)

  return (
    <TouchableOpacity style={style.button} {...rest}>
      <Text style={style.text}>{value}</Text>
    </TouchableOpacity>
  );
}

