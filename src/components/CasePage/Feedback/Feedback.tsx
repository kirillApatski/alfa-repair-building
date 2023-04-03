import React from 'react';
import styles from './Feedback.module.scss'

const Feedback = () => {
  return (
    <section className={styles.feedBackHomeWrapper}>
      <div className='container'>
        <div className={styles.content}>
          <form className={styles.feedbackForm}>
            <h2 className={styles.title}>Хотите с нами сотрудничать?</h2>
            <p className={styles.description}>Заполните форму и мы перезвоним вам в течение 30 минут!</p>
            <input className={styles.formItem} type='text' placeholder='Ваше имя'/>
            <input className={styles.formItem} type='number' placeholder='Номер телефона'/>
            <textarea className={styles.feedBackMessages} placeholder='Ваше сообщение (необязательно)'></textarea>
            <div className={styles.btnBox}>
              <button className={styles.feedBackBtn}>Отправить</button>
            </div>
          </form>
        </div>
      </div>

    </section>
  );
};

export default Feedback;