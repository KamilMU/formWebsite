import React from 'react';
import { ErrorMessage, Field } from 'formik';
const styles = require('./Input.module.scss').default;

interface Props {
  value?: string
  placeholder?: string
  name?: string
  label?: string
  setValue?: (target: Object) => void
  setDate: (target: Object) => void
}

const Timer: React.FC<Props> = ({ setDate, setValue, value, placeholder, label, name }) => {
  return (
    <>
      <label className={styles.label}>{label}</label>
      <Field
        type="time"
        value={value}
        name={name}
        placeholder={placeholder}
        className={styles.input}
        onChange={setDate}
      />
      <ErrorMessage name={name} component={'div'} className={styles.error} />
    </>
  )
}

export default Timer;