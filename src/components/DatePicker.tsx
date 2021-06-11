import React from 'react';
import { ErrorMessage, Field } from 'formik';
const styles = require('./Input.module.scss').default;

interface Props {
  value?: string
  placeholder?: string
  name?: string
  label?: string
  setValue?: (target: Object) => void
  setDate?: (target: Object) => void
}

const DatePicker: React.FC<Props> = ({ setDate, value, placeholder, label, name }) => {
  return (
    <>
      <label className={styles.label}>{label}</label>
      <Field
        type="date"
        value={value}
        name={name}
        placeholder={placeholder}
        className={styles.input}
        onChange={setDate}
      />
    </>
  )
}

export default DatePicker;