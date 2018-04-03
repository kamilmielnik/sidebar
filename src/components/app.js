import React from 'react';
import Sidebar from './sidebar-container';
import styles from './styles.scss';

const App = () => (
  <div className={styles.app}>
    <Sidebar>
      Content
    </Sidebar>
  </div>
);

export default App;
