import React from 'react';

import styles from '../../../styles/Buttons.module.css';

class ActionButton extends React.Component{
  render(){
    return (
      <button className={styles.action}>
        {this.props.action}
      </button>
    )
  }
}

export default ActionButton;