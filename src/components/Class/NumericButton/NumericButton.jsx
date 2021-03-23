import React from 'react';

import styles from '../../../styles/Buttons.module.css';

class NumericButton extends React.Component{
  render(){
    return (
      <button className={styles.numeric}>
        {this.props.num}
      </button>
    )
  }
}

export default NumericButton;