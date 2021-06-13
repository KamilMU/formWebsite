import classNames from 'classnames';
import { FormikErrors, FormikValues } from 'formik';
import React from 'react';
import { Value } from '../types';
import DatePicker from './DatePicker';
import Timer from './Timer';
const styles = require('../App.module.scss').default;

interface Props {
  deleteDate: (id: number) => void
  handleChangeDate: (target: Object) => void
  formData: Value
  errors: FormikErrors<FormikValues>
}

const Dates: React.FC<Props> = ({
  formData, deleteDate,
  handleChangeDate, errors }) => {
  return (
    <>
      {formData.dates.map((date, index) => (
        <div className={styles.date} key={index}>
          <div className={index !== formData.dates.length - 1 ? classNames(styles.row, styles.row_purple) : styles.row}>
            <div className={styles.formElement}>
              <DatePicker label="Дата начала"
                value={date.startDate} name={'startDate'}
                setDate={handleChangeDate} />
              <div className={styles.error}>
                {errors.dates && errors.dates[index]?.startDate}
              </div>
            </div>
            <div className={styles.formElement}>
              <Timer label="Время начала"
                value={date.startTime} name={'startTime'}
                setDate={handleChangeDate} />
              <div className={styles.error}>
                {errors.dates && errors.dates[index]?.startTime}
              </div>
            </div>
            <div>&mdash;</div>
            <div className={styles.formElement}>
              <DatePicker label="Дата окончания"
                value={date.endDate} name={'endDate'}
                setDate={handleChangeDate} />
              <div className={styles.error}>
                {errors.dates && errors.dates[index]?.endDate}
              </div>
            </div>
            <div className={styles.formElement}>
              <Timer label="Время окончания"
                value={date.endTime} name={'endTime'}
                setDate={handleChangeDate} />
              <div className={styles.error}>
                {errors.dates && errors.dates[index]?.endTime}
              </div>
            </div>
          </div>
          {index !== formData.dates.length - 1 && (
            <div
              className={styles.date__delete}
              onClick={() => deleteDate(date.id)}>x</div>
          )}
        </div>
      ))}
    </>)
}

export default Dates;