import {StyleSheet} from "react-native";
import {Colors} from "../../resources";

export const styles = (isDarkMode?: boolean) => StyleSheet.create({
  results:{
    width: '100%',
    minHeight: 280,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  resultText:{
    margin: 10,
    fontSize: 40,
    color: isDarkMode ? Colors.white : Colors.black
  }
});