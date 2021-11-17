import React, {useState} from 'react';
import {StatusBar, View} from 'react-native';
import {Button, Results} from "../../components";
import {styles} from "./styles";
import {buttons, formatValue, handleButtonPress} from "../../utils";
import {useDarkMode} from "../../hooks/useDarkMode";

export default function Home() {
  const [currentNumber, setCurrentNumber] = useState<string>("")
  const [numberHistory, setNumberHistory] = useState<string>("")
  const { isDarkMode } = useDarkMode()
  const style = styles(isDarkMode)

  return (
    <View style={style.container}>
      <StatusBar barStyle={isDarkMode ?  'light-content' : 'dark-content'}/>
      <Results result={formatValue(currentNumber)} history={numberHistory}/>
      <View style={style.buttons}>
        {buttons.map(button=>(
          <Button
            key={button}
            value={button}
            onPress={()=> handleButtonPress(button, currentNumber, setCurrentNumber, setNumberHistory)}/>
        ))}
      </View>
    </View>
  );
}