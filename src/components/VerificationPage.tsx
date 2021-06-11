import classNames from 'classnames';
import React from 'react'
import { Value } from '../types'
import { getDayName } from '../utils/date';
const styles = require('../App.module.scss').default;

interface Props {
  formData: Value
}

const VerificationPage: React.FC<Props> = ({ formData }) => {
  console.log(formData.dates, 'ver')
  return (
    <div className={styles.verification}>
      <div className={classNames(styles.wrapper, styles.wrapper_secondPage)}>
        <div className={styles.verification__atantion}>
          <img src={require("../images/Icon_Atamtion.png")} alt="" />
          <div className={styles.verification__atantionText}>
            Проверьте ваше мероприятие на наличие ошибок,
            если все в порядке - отправляйте на модерацию.
          </div>
        </div>

        <div className={classNames(styles.verification__row)}>
          <div className={styles.verification__cenc}>{formData.rating}</div>
          <div className={styles.verification__mainContent}>
            <div className={styles.verification__tittle}>
              Чайный заголовок —
              писать не длиннее
              трёх строк
            </div>
            <div className={styles.verification__adress}>
              <div className={styles.mainElement}>
                <img src={require("../images/icons/adress_icon.png")} alt="" />
                <div>{formData.adress}</div>
              </div>

            </div>

            {formData?.dates?.map((date) => (
              <>
                <div className={styles.verification__date} key={date.id}>
                  <div className={styles.mainElement}>
                    <img src={require("../images/icons/calendar.png")} alt="" />
                    <div>
                      {`${date.startDate} (${getDayName(date.startDate)}), 
                      ${date.endDate} (${getDayName(date.endDate)})`}
                    </div>

                  </div>
                </div>

                <div className={styles.verification__time}>
                  <div className={styles.mainElement}>
                    <img src={require("../images/icons/timer.png")} alt="" />
                    <div>{`${date.startTime}, ${date.endTime}`}</div>
                  </div>
                </div>
              </>
            ))}

            <div className={styles.verification__contactsTittle}>Контакты</div>
            <div className={styles.verification__phone}>
              <div className={styles.mainElement}>
                <img src={require("../images/icons/phone.png")} alt="" />
                <div>{formData.phone}</div>
              </div>

            </div>
            <div className={styles.verification__email}>
              <div className={styles.mainElement}>
                <img src={require("../images/icons/email.png")} alt="" />
                <div>{formData.email}</div>
              </div>

            </div>
            <div className={styles.verification__organizationName}>
              <div>{formData.organizationName}</div>
              <span>Организатор мероприятия</span>
            </div>
          </div>
          <img src={formData.imgSrc ? formData.imgSrc : require('../images/main.jpg')} alt="" style={{ width: '50%' }} />
        </div>

        <div className={styles.verification__text}>
          {formData.descript}
        </div>

        <div className={styles.row}>
          <button
            className={classNames(styles.button, styles.button_long)}>
            Назад
          </button>
          <button
            className={classNames(styles.button, styles.button_long, styles.button_purple)}>
            Отправить на модерацию
          </button>
        </div>

      </div>
    </div>
  )
}

export default VerificationPage;
