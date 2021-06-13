import classNames from 'classnames';
import React from 'react';
import ImageLoader from './components/ImageLoader';
import TextArea from './components/TextArea';
import Select from './components/Select';
import Input from './components/Input';
import Dates from './components/Dates';
import { Value } from './types';
import { Formik, Form } from 'formik';
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

                  <Dates 
                    formData={formData}
                    deleteDate={deleteDate}
                    handleChangeDate={handleChangeDate}
                    errors={errors}
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