import React from 'react';

import styles from '../../../styles/Buttons.module.css';

class ArithmeticButton extends React.Component{
  render(){
    return(
      <button className={styles.arithmetic}>
        {this.props.action}
      </button>
    )
  }
}

export default ArithmeticButton;