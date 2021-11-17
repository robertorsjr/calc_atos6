import {StyleSheet} from "react-native";
import {Colors} from "../../resources";

export const styles = (isDarkMode?: boolean) => StyleSheet.create({
  container: {
    backgroundColor: isDarkMode ? Colors.background : Colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1
  },
  buttons: {
    maxWidth: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: "space-around",
    flex: 1
  }
});