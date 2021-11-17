import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from "./styles";
import {useDarkMode} from "../../hooks/useDarkMode";

type ButtonProps = {
  value: number | string,
}

export default function Button({ value}: ButtonProps) {
  const {isDarkMode} = useDarkMode()
  const isDefault = value === 'C' || value === '+/-' || value === '%'
  const isOperator = value !== ',' && typeof value === "string" && !isDefault
  const style = styles(isOperator, isDefault, value, isDarkMode)

  return (
    <TouchableOpacity style={style.button} onPress={() => console.warn(value)}>
      <Text style={style.text}>{value}</Text>
    </TouchableOpacity>
  );
}

