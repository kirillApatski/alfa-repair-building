import React from 'react';
import styles from './Header.module.scss'
import LogoSVG from "../../assets/iconsSVG/LogoSvg";
import OrderLayoutSvg from "../../assets/iconsSVG/OrderLayoutSvg";
import CallSvg from "../../assets/iconsSVG/CallSvg";
import Whatsapp from "../../assets/iconsSVG/Whatsapp";
import TelegramSvg from "../../assets/iconsSVG/TelegramSvg";
import ViberSvg from "../../assets/iconsSVG/ViberSvg";
import BtnMenuSvg from "../../assets/iconsSVG/BtnMenuSvg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.headerTop}>
          <LogoSVG/>
          <p className={styles.timeWork}>
            Пн-Сб: c 10:00 до 20:00
            Выходной: воскресенье
          </p>
          <div className={styles.buttonBox}>
            <OrderLayoutSvg/>
            <button className={styles.orderLayout}>Заказать 3D-макет дома</button>
          </div>
          <div className={styles.callBox}>
            <div className={styles.call}>
              <CallSvg className={styles.callSvg}/>
              <div className={styles.linkBox}>
                <a className={styles.number} href="tel:+79151685550">+7 (915) 168-55-50</a>
                <ul className={styles.socialBox}>
                  <li className={styles.socialItem}><Whatsapp/></li>
                  <li className={styles.socialItem}><TelegramSvg/></li>
                  <li className={styles.socialItem}><ViberSvg/></li>
                </ul>
              </div>
            </div>
            <button className={styles.bookCall}>Заказать звонок</button>
          </div>
          <div className={styles.menuBurger}>
            <BtnMenuSvg/>
          </div>
        </div>
        <nav className={styles.headerLink}>
          <ul className={styles.navLinkBox}>
            <li className={styles.navLinkItem}>
              Каталог домов
              <ul className={styles.dropDown}>
                <li className={styles.dropDownItem}><a href="src/layout/Header/Header#">Кейсы</a></li>
                <li className={styles.dropDownItem}><a href="src/layout/Header/Header#">Видеоблог</a></li>
                <li className={styles.dropDownItem}><a href="src/layout/Header/Header#">Полезные статьи</a></li>
              </ul>
            </li>
            <li className={styles.navLinkItem}>
              Услуги
              <ul className={styles.dropDown}>
                <li className={styles.dropDownItem}><a href="src/layout/Header/Header#">Кейсы</a></li>
                <li className={styles.dropDownItem}><a href="src/layout/Header/Header#">Видеоблог</a></li>
                <li className={styles.dropDownItem}><a href="src/layout/Header/Header#">Полезные статьи</a></li>
              </ul>
            </li>
            <li className={styles.navLinkItem}>
              О нас
              <ul className={styles.dropDown}>
                <li className={styles.dropDownItem}><a href="src/layout/Header/Header#">Кейсы</a></li>
                <li className={styles.dropDownItem}><a href="src/layout/Header/Header#">Видеоблог</a></li>
                <li className={styles.dropDownItem}><a href="src/layout/Header/Header#">Полезные статьи</a></li>
              </ul>
            </li>
            <li className={styles.navLinkItem}>
              Контакты
              <ul className={styles.dropDown}>
                <li className={styles.dropDownItem}><a href="src/layout/Header/Header#">Кейсы</a></li>
                <li className={styles.dropDownItem}><a href="src/layout/Header/Header#">Видеоблог</a></li>
                <li className={styles.dropDownItem}><a href="src/layout/Header/Header#">Полезные статьи</a></li>
              </ul>
            </li>
            <li className={styles.navLinkItem}>
              Блог
              <ul className={styles.dropDown}>
                <li className={styles.dropDownItem}><a href="src/layout/Header/Header#">Кейсы</a></li>
                <li className={styles.dropDownItem}><a href="src/layout/Header/Header#">Видеоблог</a></li>
                <li className={styles.dropDownItem}><a href="src/layout/Header/Header#">Полезные статьи</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;