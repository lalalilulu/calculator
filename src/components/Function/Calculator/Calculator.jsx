import React from 'react';

import styles from '../../../styles/Calculator.module.css';
import { Display, NumericButton, ActionButton, ArithmeticButton } from '../';

// const CalculatorOperations = {
//   "/": (firstValue, secondValue) => firstValue / secondValue,
//   "*": (firstValue, secondValue) => firstValue * secondValue,
//   "+": (firstValue, secondValue) => firstValue + secondValue,
//   "-": (firstValue, secondValue) => firstValue - secondValue,
//   "=": (firstValue, secondValue) => secondValue,
// };

const Calculator = () =>{
  return (
    <div className={styles.container}>
        <h1 className={styles.header}>CALCULATOR</h1>
        <Display />
        <div className={styles.btnContainer}>
          <ActionButton action={"C"} />
          <ActionButton action={"\u2190"} />
          <ActionButton action={"%"} />
          <ArithmeticButton action={"/"} />
          <NumericButton num={1} />
          <NumericButton num={2} />
          <NumericButton num={3} />
          <ArithmeticButton action={"*"} />
          <NumericButton num={4} />
          <NumericButton num={5} />
          <NumericButton num={6} />
          <ArithmeticButton action={"-"} />
          <NumericButton num={7} />
          <NumericButton num={8} />
          <NumericButton num={9} />
          <ArithmeticButton action={"+"} />
          <NumericButton num={0} />
          <NumericButton num={"."} />
          <ActionButton action={"="} />
        </div>
      </div>
  )
}

export default Calculator;