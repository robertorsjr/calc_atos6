import {StyleSheet} from "react-native";
import {Colors} from "../../resources";

export const styles = (isDarkMode?: boolean) => StyleSheet.create({
  switchMode: {
    alignSelf: 'flex-start',
    bottom: 80,
    margin: 15,
    backgroundColor: isDarkMode ? Colors.lightTheme : Colors.blackTheme,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25
  },
});