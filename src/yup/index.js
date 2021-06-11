import * as Yup from "yup";

export const datesSchema = Yup.array().of(
  Yup.object().shape({
    startDate: Yup.string()
      .required('Required'),
    endDate: Yup.string()
      .required('Required'),
    startTime: Yup.string()
      .required('Required'),
    endTime: Yup.string()
      .required('Required'),
  })
)

export const formSchema = Yup.object().shape({
  organizationName: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  city: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  adress: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  descript: Yup.string()
    .min(10, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  rating: Yup.string()
    .required('Required'),
  dates: datesSchema
});