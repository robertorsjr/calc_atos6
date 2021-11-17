import {StyleSheet} from "react-native";
import {Colors} from "../../resources";

export const styles = (resultLength: number, isDarkMode?: boolean ) => StyleSheet.create({
  results:{
    width: '100%',
    minHeight: 280,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  resultText:{
    margin: 10,
    marginRight: 30,
    fontSize: resultLength > 20 ? 20 : resultLength > 10 ? 30 : 50,
    color: isDarkMode ? Colors.white : Colors.black
  }
});