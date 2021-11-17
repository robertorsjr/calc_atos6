import React from 'react';
import {Text, View} from 'react-native';
import {styles} from "./styles";
import {SwitchModeButton} from "../index";
import {useDarkMode} from "../../hooks/useDarkMode";
import {ResultHistory} from "../ResultHistory";
import {formatValue} from "../../utils";

type ResultsProps = {
  result?: string
  history?: string
}

export default function Results({result, history }: ResultsProps) {
  const {isDarkMode} = useDarkMode()
  const style = styles(result?.length || 0, isDarkMode )
  return (
    <View style={style.results}>
      <SwitchModeButton/>
      <ResultHistory history={history}/>
      <Text style={style.resultText}>{formatValue(result || '0')}</Text>
    </View>
  );
}

