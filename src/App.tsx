import classNames from 'classnames';
import React from 'react';
import DatePicker from './components/DatePicker';
import ImageLoader from './components/ImageLoader';
import TextArea from './components/TextArea';
import Select from './components/Select';
import Input from './components/Input';
import Timer from './components/Timer';
import { Value } from './types';
import { Formik, Form, FieldArray, getIn } from 'formik';
import axios from 'axios';
import { formSchema } from './yup';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
const styles = require('./App.module.scss').default;

interface Props {
  handleChange: (target: Object) => void
  deleteDate: (id: number) => void
  addDate: () => void
  handleChangeDate: (target: Object) => void
  handleChangeImage: (src: string) => void
  setIsFormValid: (t: boolean) => void
  setRating: (e: React.ChangeEvent<HTMLSelectElement>) => void
  formData: Value
  history: RouteComponentProps["history"]
  location: RouteComponentProps['location'];
  match: RouteComponentProps['match'];
}

const App: React.FC<Props> = ({
  handleChange, deleteDate, addDate, setIsFormValid,
  handleChangeImage, handleChangeDate, formData,
  setRating, history
}) => {
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={formData}
        validationSchema={formSchema}
        onSubmit={(action: any) => {
          setIsFormValid(true);
          history.push('/verification-page');
          action.setSubmitting(false);
        }}
      >
        {({ errors }) => (
          <Form>
            {console.log(errors, 'dates')}
            <div className={styles.container}>
              <div className={classNames(styles.wrapper, styles.wrapper_firstPage)}>

                <section className={styles.section}>
                  <div className={styles.tittle}>
                    Информация об организаторе
                  </div>
                  <div className={styles.formElement}>
                    <Input
                      value={formData.organizationName}
                      label='Организатор'
                      type={'text'}
                      name='organizationName'
                      setValue={handleChange}
                      placeholder='Coca-cola'
                    />
                  </div>

                </section>

                <section className={styles.section}>
                  <div className={styles.row}>
                    <div className={styles.formElement}>
                      <Input
                        value={formData.phone}
                        label={'Телефон'}
                        name={'phone'}
                        type={'text'}
                        setValue={handleChange}
                        placeholder={'+7 (999) 555-33-22'}
                      />
                    </div>
                    <div className={styles.formElement}>
                      <Input
                        value={formData.email}
                        label={'E-mail'}
                        name={'email'}
                        type={'email'}
                        setValue={handleChange}
                        placeholder={'ivanov@mail.ru'}
                      />
                    </div>
                    <div className={styles.formElement}>
                      <Input
                        value={formData.city}
                        label={'Город организатора'}
                        type={'text'}
                        name={'city'}
                        setValue={handleChange}
                        placeholder={'Казань'}
                      />
                    </div>
                  </div>
                </section>

                <section className={styles.section}>
                  <div className={styles.formElement}>
                    <Input
                      value={formData.name}
                      label={'Название'}
                      type={'text'}
                      name={'name'}
                      setValue={handleChange}
                      placeholder={''}
                    />
                  </div>

                  <div className={styles.formElement}>
                    <ImageLoader
                      src={formData.imgSrc}
                      label={'Фотография'}
                      handleChangeImage={handleChangeImage}
                    />
                  </div>
                  <div className={styles.formElement}>
                    <TextArea
                      label={'Подробное описание'}
                      name={"descript"}
                      value={formData.descript}
                      setValue={handleChange}
                    />
                  </div>

                  <FieldArray
                    name="dates"
                    render={arrayHelpers => (
                      <>
                        {formData.dates.map((date, index: number) => (
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
                              <div>-</div>
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
                      </>)}
                  />

                  <button
                    type="button"
                    className={styles.button}
                    onClick={addDate}>
                    + Добавить дату
                  </button>

                  <div className={styles.row}>

                    <div className={styles.formElement}>
                      <Select
                        label={'Рейтинг мероприятия'}
                        formData={formData}
                        setRating={setRating}
                      />
                      <div className={styles.error}>
                        {errors.rating && errors.rating}
                      </div>
                    </div>

                    <div className={styles.formElement}>
                      <Input
                        value={formData.adress}
                        label={'Адрес мероприятия'}
                        type={'text'}
                        name={'adress'}
                        setValue={handleChange}
                        placeholder={''}
                      />
                    </div>
                  </div>

                  <div className={styles.row}>
                    <button
                      className={classNames(styles.button, styles.button_long)}>
                      Отменить
                    </button>
                    <button
                      type="submit"
                      className={classNames(styles.button, styles.button_long, styles.button_purple)}>
                      Далее
                    </button>
                  </div>
                </section>

              </div>
            </div>

          </Form>
        )}
      </Formik>
    </>
  )
}

export default withRouter(App);