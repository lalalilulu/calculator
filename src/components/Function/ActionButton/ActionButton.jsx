import React from 'react';

import styles from '../../../styles/Buttons.module.css';

const ActionButton = (props) => {
  return (
    <button className={styles.action}>
      {props.action}
    </button>
  )
}

export default ActionButton;