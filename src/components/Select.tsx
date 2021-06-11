import React from 'react';
import { Value } from '../types';
const styles = require('./Input.module.scss').default;

interface Props {
  value?: string
  placeholder?: string
  formData: Value
  name?: string
  label?: string
  setValue?: (target: Object) => void
  setRating: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select: React.FC<Props> = ({
  setRating, formData, setValue,
  value, placeholder, label, name }) => {
    console.log(formData, 'formmm')
  return (
    <>
      <label className={styles.label}>{label}</label>
      <select
        value={value}
        name={name}
        placeholder={placeholder}
        className={styles.input}
        onChange={setRating}>
        {formData?.ratings.map((r, index) => (
          <option key={index} value={r.title}>{r.title}</option>
        ))}
      </select>
    </>
  )
}

export default Select;