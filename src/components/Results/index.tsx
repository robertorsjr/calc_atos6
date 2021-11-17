import React from 'react';
import {Text, View} from 'react-native';
import {styles} from "./styles";
import {SwitchModeButton} from "../index";
import {useDarkMode} from "../../hooks/useDarkMode";
import {ResultHistory} from "../ResultHistory";

type ResultsProps = {
  result: string
}

export default function Results({result }: ResultsProps) {
  const {isDarkMode} = useDarkMode()
  const style = styles(isDarkMode)
  return (
    <View style={style.results}>
      <SwitchModeButton/>
      <ResultHistory history={'2-2'}/>
      <Text style={style.resultText}>{result}</Text>
    </View>
  );
}

