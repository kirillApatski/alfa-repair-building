import React from 'react';
import styles from './Footer.module.scss'
import LogoSvg from "../../assets/iconsSVG/LogoSvg";
import VkSvg from "../../assets/iconsSVG/VkSvg";
import InstagramSvg from "../../assets/iconsSVG/InstagramSvg";
import FacebookSvg from "../../assets/iconsSVG/FacebookSvg";
import YouTubeSvg from "../../assets/iconsSVG/YouTubeSvg";
import FooterLogoSvg from "../../assets/iconsSVG/FooterLogoSvg";

const Footer = () => {
  return (
    <footer>
      <div className={`${styles.footerWrapper} container`}>
        <div className={styles.logoAndCall}>
          <LogoSvg/>
          <div className={styles.btnBox}>
            <button className={styles.footerBtn}>Заказать звонок</button>
          </div>
        </div>
        <nav className={styles.menuBox}>
          <ul className={styles.footerMenu}>
            <li className={styles.menuItem}><a href="#">Главная</a></li>
            <li className={styles.menuItem}><a href="#">Каталог</a></li>
            <li className={styles.menuItem}><a href="#">Услуги</a></li>
            <li className={styles.menuItem}><a href="#">Расчет стоимости</a></li>
            <li className={styles.menuItem}><a href="#">Консультация архитектора</a></li>
          </ul>
          <ul className={styles.footerMenu}>
            <li className={styles.menuItem}><a href="#">Экскурсия на объект</a></li>
            <li className={styles.menuItem}><a href="#">3D-макет дома</a></li>
            <li className={styles.menuItem}><a href="#">нас</a></li>
            <li className={styles.menuItem}><a href="#">Блог</a></li>
            <li className={styles.menuItem}><a href="#">Контакты</a></li>
          </ul>
        </nav>
        <div className={styles.footerInfo}>
          <p className={styles.text}>Делимся крутыми проектами в соц.сетях. Подписывайтесь!</p>
          <ul className={styles.socialBox}>
            <li className={styles.socialItem}><a href="#"><VkSvg/></a></li>
            <li className={styles.socialItem}><a href="#"><InstagramSvg/></a></li>
            <li className={styles.socialItem}><a href="#"><FacebookSvg/></a></li>
            <li className={styles.socialItem}><a href="#"><YouTubeSvg/></a></li>
          </ul>
          <p className={styles.text}>Разработка и продвижение сайта:</p>
          <div className={styles.footerLogo}>
            <FooterLogoSvg/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;