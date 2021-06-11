import React from 'react';
import { ErrorMessage } from 'formik';
const styles = require('./Input.module.scss').default;

interface Props {
  value?: string
  placeholder?: string
  name?: string
  label?: string
  setValue?: (target: Object) => void
}

const TextArea: React.FC<Props> = ({ setValue, value, placeholder, label, name }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <textarea
        type="text"
        value={value}
        onChange={setValue}
        name='descript'
      />
      <ErrorMessage name='descript' component={'div'} className={styles.error}/>
    </div>
  )
}

export default TextArea;