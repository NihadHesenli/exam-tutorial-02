/* eslint-disable no-unused-vars */
import './index.css'
import axios from 'axios'
import { DB_URL } from '../../../services/base'
import {Formik,Field,Form} from 'formik'
import * as Yup from 'yup';



 const WatchSchema = Yup.object().shape({
    image : Yup.string().url('enter valid url').required('fill the input'),
    title : Yup.string().min(5,'min 5 character').max(13,'max 13 character').required('fill the input'),
    description : Yup.string().min(20,'min 20 character').max(50,'max 50 character').required('fill the input'),
    price : Yup.number().min(0,'more than 1').max(500,'max 500 dollar').required('fill the input'),
})
const AddWatch = () => {
  return (
    <Formik
    initialValues={{
      image: '',
      title: '',
      description: '',
      price: '',
    }}
    validationSchema={WatchSchema}
    onSubmit={async(values, {resetForm})=>{
      const data = ({...values})
      const res = await axios.post(`${DB_URL}/watches` , data)
      resetForm(resetForm())
    }}
  >
    {({ errors, touched }) => (
      <Form>
        <label htmlFor="image">image</label>
        <Field name="image" />
        {errors.image && touched.image ? (
          <div>{errors.image}</div>
        ) : null}
        <label htmlFor="title">title</label>
        <Field name="title" />
        {errors.title && touched.title ? (
          <div>{errors.title}</div>
        ) : null}
        <label htmlFor="description">description</label>
        <Field name="description" />
        {errors.description && touched.description ? <div>{errors.description}</div> : null}
        <label htmlFor="price">price</label>
        <Field name="price" type='number' />
        {errors.price && touched.price ? <div>{errors.price}</div> : null}
        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
  )
}

export default AddWatch