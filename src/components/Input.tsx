import React from 'react';
import { ErrorMessage, Field } from 'formik';
const styles = require('./Input.module.scss').default;

interface Props {
  value?: string
  placeholder?: string
  name?: string
  label?: string
  type?: string
  setValue?: (target: Object) => void
}

const Input: React.FC<Props> = ({ setValue, value, placeholder, label, name, type }) => {
  return (
    <>
      <label className={styles.label}>{label}</label>
      <Field
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        className={styles.input}
        onChange={setValue}
      />
      <ErrorMessage name={name} component={'div'} className={styles.error} />
    </>
  )
}

export default Input;