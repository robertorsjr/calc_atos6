import React from 'react'
import {Text} from "react-native";
import {styles} from "./styles";
import {useDarkMode} from "../../hooks/useDarkMode";

type ResultHistoryProps = {
  history?: string
}

export function ResultHistory({history}: ResultHistoryProps){
  const {isDarkMode} = useDarkMode()
  const style = styles(history?.length || 0,isDarkMode)

  return(
    <Text style={style.resultHistory}>{history}</Text>
  )
}