import React from 'react';

import styles from '../../../styles/Buttons.module.css';

const ArithmeticButton = (props) => {
  return(
    <button className={styles.arithmetic}>
      {props.action}
    </button>
  )
}

export default ArithmeticButton;