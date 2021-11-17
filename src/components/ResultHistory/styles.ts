import {StyleSheet} from "react-native";

export const styles = (historyLength: number, isDark?: boolean) => StyleSheet.create({
  resultHistory: {
    color: isDark ? '#b5b7bb' :'#7c7c7c',
    fontSize: historyLength > 20 ? 20 : historyLength > 10 ? 30 : 25,
    marginRight: 10,
    alignSelf: 'flex-end'
  }
})