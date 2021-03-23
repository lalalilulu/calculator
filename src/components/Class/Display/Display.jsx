import React from 'react';

import styles from '../../../styles/Display.module.css';

class Display extends React.Component{
  render(){
    return(
      <div className={styles.container}>
        <span className={styles.value}>
          Test
        </span>
      </div>
    )
  }
}

export default Display;