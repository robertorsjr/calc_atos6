import {StyleSheet} from "react-native";

export const styles = (isDark?: boolean) => StyleSheet.create({
  resultHistory: {
    color: isDark ? '#b5b7bb' :'#7c7c7c',
    fontSize: 25,
    marginRight: 10,
    alignSelf: 'flex-end'
  }
})