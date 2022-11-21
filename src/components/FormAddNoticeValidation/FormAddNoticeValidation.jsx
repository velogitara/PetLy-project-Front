import * as Yup from 'yup';

const FILE_SIZE = 5242880;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
const ValidationSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Must be 2 or more letter')
    .max(48, 'Must be 48 or less letter')
    .matches(/^[A-Za-zА`\s]+$/, 'Only letters')
    .required('Required'),
  name: Yup.string()
    .min(2, 'Must be 2 or more letter')
    .max(16, 'Must be 16 or less letter')
    .matches(/^[A-Za-zА`\s]+$/, 'Only letters'),
  birthday: Yup.date().nullable(),
  breed: Yup.string()
    .min(2, 'Must be 2 or more letter')
    .max(24, 'Must be 24 or less letter')
    .matches(/^[A-Za-zА`\s]+$/, 'Only letters'),
  comments: Yup.string()
    .min(8, 'Must be 8 or more characters')
    .max(120, 'Must be 120 or less characters')
    .matches(/^[A-Za-zА\s]+$/)
    .required('Required'),
  price: Yup.number('Price must be a number')
    .positive('Price must be a positive number')
    .integer('Price must be an integer'),
  image: Yup.mixed()
    .test(
      'FILE_SIZE',
      'Uploaded file is too big',
      value => !value || (value && value.size <= FILE_SIZE)
    )
    .test(
      'FILE_FORMAT',
      'Uploaded file unsupported format',
      value => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
    ),
});
export default ValidationSchema;
