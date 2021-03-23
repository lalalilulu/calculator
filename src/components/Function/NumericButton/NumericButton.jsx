import React from 'react';

import styles from '../../../styles/Buttons.module.css';

const NumericButton = (props) => {
  return (
    <button className={styles.numeric}>
      {props.num}
    </button>
  )
}

export default NumericButton;