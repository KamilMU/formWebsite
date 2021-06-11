import axios from 'axios';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import App from './App';
import VerificationPage from './components/VerificationPage';

export default function AppConteiner() {
  const [isFormValid, setIsFormValid] = React.useState(false);
  const [formData, setFormData] = React.useState({
    organizationName: "",
    name: "",
    email: "",
    city: "",
    phone: "",
    adress: "",
    descript: "",
    imgSrc: "",
    rating: "",
    dates: [{
      id: 1,
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: ''
    }],
    ratings: [
      { id: 1, title: "1+" },
      { id: 2, title: "6+" },
      { id: 3, title: "12+" },
      { id: 4, title: "16+" },
      { id: 5, title: "18+" },
      { id: 6, title: "21+" },
      { id: 7, title: "23+" }
    ]
  });


  React.useEffect(() => {
    async function getRatings() {
      await fetch('http://testwork.rdbx24.ru/api', {
        headers: {
          "Access-Control-Allow-Origin": "*",
        }
      })
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

    getRatings();
  }, [])

  function handleChangeDate({ target }) {
    setFormData({
      ...formData,
      dates: [...formData.dates.map(date => {
        return {
          ...date,
          id: Date.now(),
          [target.name]: target.value
        }
      })
      ]
    })
  }

  function setRating(e: React.ChangeEvent<HTMLSelectElement>) {
    setFormData({
      ...formData,
      rating: e.target.value
    })
  }

  function addDate() {
    setFormData({
      ...formData,
      dates: [{
        id: Date.now(),
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: ''
      }, ...formData.dates]
    })
  }

  function deleteDate(id: number) {
    setFormData({
      ...formData,
      dates: formData.dates.filter(date => date.id !== id)
    })
  }

  function handleChange({ target }) {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  }

  function handleChangeImage(src: string) {
    setFormData({
      ...formData,
      imgSrc: src
    });
  }

  return (
    <>
      <Switch>
        <Route exact path={"/"} render={() => (
          <App
            handleChange={handleChange}
            handleChangeImage={handleChangeImage}
            deleteDate={deleteDate}
            addDate={addDate}
            handleChangeDate={handleChangeDate}
            formData={formData}
            setRating={setRating}
            setIsFormValid={setIsFormValid}
          />)}
        />
        <Route
          exact
          path={"/verification-page"}
          render={() => (
            isFormValid ?
              <VerificationPage
                formData={formData}
              /> : <Redirect to="/" />
          )}
        />
      </Switch>
    </>
  )
}
