import React from 'react';
import styles from './Banner.module.scss'

const Banner = () => {
  return (
    <section className={styles.sectionBanner}>
      <div className="container">
        <h1 className={styles.title}>Какой дом хотите построить?</h1>
        <p className={styles.description}>Более 117 построенных домов и довольных клиентов
          в Москве и Московской области</p>
        <div className={styles.formBox}>
          <h2 className={styles.formBoxTitle}>Оставьте заявку </h2>
          <p className={styles.formBoxDescription}>и получите бесплатную разводку электричества в подарок!</p>
          <form className={styles.form}>
            <input className={styles.formItem} type="text" placeholder="Ваше имя"/>
            <select className={styles.formItem}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">2</option>
            </select>
            <input className={styles.formItem} type="number" placeholder="Номер телефона"/>
            <button className={styles.formBtn}>Отправить</button>
          </form>
          <p className={styles.personalData}>Ваши данные не будут переданы третьим лицам</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;