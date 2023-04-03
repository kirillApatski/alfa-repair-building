import React from 'react';
import styles from './CasePage.module.scss'
import Banner from "./Baner/Banner";
import Case from "./Case/Case";

const CasePage = () => {
  return (
    <section className={styles.wrapperCasePage}>
      <Banner/>
      <Case/>
    </section>
  );
};

export default CasePage;