import React from 'react';
import {View} from 'react-native';
import {Button, Results} from "../../components";
import {styles} from "./styles";
import {buttons} from "../../utils";
import {useDarkMode} from "../../hooks/useDarkMode";

export default function Home() {
  const { isDarkMode } = useDarkMode()
  const style = styles(isDarkMode)

  return (
    <View style={style.container}>
      <Results result={'2 + 2 = 4'}/>
      <View style={style.buttons}>
        {buttons.map(button=>(
          <Button key={button} value={button}/>
        ))}
      </View>
    </View>
  );
}