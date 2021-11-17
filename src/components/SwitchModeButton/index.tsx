import {Entypo} from "@expo/vector-icons";
import {TouchableOpacity} from "react-native";
import React from "react";
import {styles} from "./styles";
import {useDarkMode} from "../../hooks/useDarkMode";

function SwitchModeButton(){
  const {isDarkMode, switchMode} = useDarkMode()
  const style = styles(isDarkMode)
  return (
    <TouchableOpacity
      style={style.switchMode}
      onPress={switchMode}>
      <Entypo
        name={isDarkMode ? 'light-up' : "moon"}
        size={24}
        color={isDarkMode ? 'white' : 'black' }
      />
    </TouchableOpacity>
  )
}

export default SwitchModeButton