import React from 'react';
import styles from './Banner.module.scss'
import playButton from '../../../assets/images/play-button.svg'
import CircleSvg from "../../../assets/iconsSVG/CircleSvg";
import CalculatorSvg from "../../../assets/iconsSVG/CalculatorSvg";
import BinocularsSvg from "../../../assets/iconsSVG/BinocularsSvg";
import MinEngineer from "../../../assets/iconsSVG/MinEngineer";

const Banner = () => {
  return (
    <section className={styles.sectionBanner}>
      <div className={`${styles.contentWrapper} container`}>
        <div className={styles.content}>
          <h1 className={styles.title}>Кейс: дом из оцилиндрованного бруса
            в Балашихе под ключ</h1>
          <p className={styles.description}>Двухэтажный дом, площадью 128 м² в европейском стиле</p>
          <div className={styles.formBox}>
            <div className={styles.formBoxContent}>
              <h2 className={styles.formBoxTitle}>Хотите сотрудничать с профессионалами?</h2>
              <p className={styles.formBoxDescription}>Оставьте заявку и получите бесплатную консультацию</p>
              <form className={styles.form}>
                <input className={styles.formItem} type="text" placeholder="Ваше имя"/>
                <select className={styles.formItem}>
                  <option hidden={true}>Выберите услугу</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3"></option>
                </select>
                <input className={styles.formItem} type="number" placeholder="Номер телефона"/>
                <button className={styles.formBtn}>Отправить</button>
              </form>
              <div className={styles.personalData}>
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.8125 3.75H6.5V2.5C6.5 1.12125 5.37875 0 4 0C2.62125 0 1.5 1.12125 1.5 2.5V3.75H1.1875C0.670833 3.75 0.25 4.17042 0.25 4.6875V9.0625C0.25 9.57958 0.670833 10 1.1875 10H6.8125C7.32917 10 7.75 9.57958 7.75 9.0625V4.6875C7.75 4.17042 7.32917 3.75 6.8125 3.75ZM2.33333 2.5C2.33333 1.58083 3.08083 0.833333 4 0.833333C4.91917 0.833333 5.66667 1.58083 5.66667 2.5V3.75H2.33333V2.5ZM4.41667 6.9675V7.91667C4.41667 8.14667 4.23042 8.33333 4 8.33333C3.76958 8.33333 3.58333 8.14667 3.58333 7.91667V6.9675C3.33542 6.82292 3.16667 6.55708 3.16667 6.25C3.16667 5.79042 3.54042 5.41667 4 5.41667C4.45958 5.41667 4.83333 5.79042 4.83333 6.25C4.83333 6.55708 4.66458 6.82292 4.41667 6.9675Z"
                    fill="black"/>
                </svg>

                <p className={styles.personalDataText}>Ваши данные не будут переданы третьим лицам</p>

              </div>
            </div>
          </div>
        </div>
        <div className={styles.linkHouseCalculationBox}>
          <img className={styles.minHouseBg} src={playButton} alt="minHouseBg"/>
          <a className={styles.linkHouseCalculation} href='#'>ВИДЕООТЗЫВ</a>
        </div>
      </div>
      <ul className={styles.menuBox}>
        <li className={styles.menuItem}><a href="#"><CalculatorSvg/></a></li>
        <li className={styles.menuItem}><a href="#"><BinocularsSvg/></a></li>
        <li className={styles.menuItem}><a href="#"><CircleSvg/></a></li>
        <li className={styles.menuItem}><a href="#"><MinEngineer/></a></li>
      </ul>
    </section>
  );
};

export default Banner;