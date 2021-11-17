export const buttons = [
  'C', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1 ,2, 3, '+', 0, ',', '='
]

export function formatValue(value: string): string {
  return value.
       replace(/([0-9]{3})/, '$1' )
      .replace(/([0-9]{3})([0-9]{3})/, '$1.$2')
      .replace(/([0-9]{3})([0-9]{3})([0-9]{3})/, '$1.$2.$3')
}

export function calculator(current: string, setCurrent: (result: string) => void){
  const splitNumbers = current.split(' ')
  const firstNumber = parseFloat(splitNumbers[0])
  const lastNumber = parseFloat(splitNumbers[2])
  const operator = splitNumbers[1]
  if(lastNumber){
    switch (operator){
      case '+':
        setCurrent((firstNumber + lastNumber).toString())
        break
      case '-':
        setCurrent((firstNumber - lastNumber).toString())
        break
      case 'x':
        setCurrent((firstNumber * lastNumber).toString())
        break
      case '÷':
        setCurrent((firstNumber / lastNumber).toString())
        break
    }
  }
}

export function handleButtonPress(
  value: string | number,
  current: string,
  setCurrent: (result: string) => void | string ,
  setHistory: (result: string) => void ) {
  switch (value){
    case '%':
      setCurrent((Number(current) / 100).toString())
      break
    case '+' :
    case '-':
    case 'x' :
    case '÷' :
      setCurrent(current + " " + value + " ")
      break
    case 'C':
      setCurrent("")
      setHistory("")
      break
    case '=':
      setHistory(current + " = ")
      setCurrent("")
      calculator(current, setCurrent)
      break
    case '+/-':
      const result = Number(current) > 0 ? (-current).toString() : (Math.abs(Number(current))).toString()
      setCurrent(result)
      break
    case ',':
      setCurrent(current + '.')
      break
    default:
      setCurrent(current + value)
      break
  }
}


