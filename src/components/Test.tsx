import React from 'react';
import Styles from '../../styles/sass/test.module.scss';
import { auth } from '../../firebase';

const Test: React.FC = () => {
  type f = {
    a: String;
  };

  const b: f = {
    a: 'd',
  };

  return (
    <div className={Styles.test}>
      <p>success!!!!!</p>
    </div>
  );
};
export default Test;
