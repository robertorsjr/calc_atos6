import {StyleSheet} from "react-native";
import {Colors} from "../../resources";

export const styles = (isOperator?: boolean, isDefault?: boolean, value?: number | string, isDark?: boolean) => StyleSheet.create({
  button: {
    height: 70,
    width: value === 0  ? 166 :70,
    borderRadius: 40,
    backgroundColor: isOperator ? Colors.btnOperators(isDark) : isDefault ? Colors.btnDefault : Colors.btnNumber(isDark),
    borderWidth: 1,
    borderColor: isOperator ? Colors.btnOperators(true) : 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  },
  text: {
    fontSize: 26,
    color: isDark ? Colors.white : Colors.black
  }
});