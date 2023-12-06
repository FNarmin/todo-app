
    import { useFormik } from 'formik';
import Table from '../table';
import * as Yup from "yup";
import { useEffect, useState } from 'react';
// import { useState } from 'react';
const datas = [];
let data = {};

    const Form = () => {
     
      const[sil, setSil] = useState(false);
      const [datas, setDatas] = useState([]);
      useEffect(() =>{
        if(!sil) {
          setSil(true);
        }
      }, [sil]);
      const formik = useFormik({
        validateOnMount: true,
        initialValues: {
          fullName: '',
          age: '',
          position: '',
          phone: "",
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .min(6, "Must be at least 6 characters")
              .required("Required"),
            age: Yup.number()
              .required("Required"),
            position: Yup.string()
              .required("Required"),
              phone: Yup.number()
              .required("Required")
          }),
        onSubmit: values => {
          if (values.fullName && values.age && values.position && values.phone) {
            data = {
            fullName: values.fullName,
            age: values.age,
            position: values.position,
            phone: values.phone,
           }
           datas.push(data);
          //  setDatas(datas.push(data));
           values.fullName = '';
          values.age= '';
          values.position= '';
          values.phone= "";
            console.log(datas);
            // window.localStorage.setItem(datas, datas)
          }
        },
      });
      
      return (
        <div className='text-center container' >
            <h1 className='mb-4'>Todo App</h1>
        <form onSubmit={formik.handleSubmit} className='mb-5'>
          <input className="border border-secondary-subtle rounded-2 p-1 text-tertiary me-3"
            id="fullName"
            name="fullName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.fullName}
            placeholder='Full name'
          />
          <input className="border border-secondary-subtle rounded-2 p-1 text-tertiary me-3"
            id="age"
            name="age"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.age}
            placeholder='Age'
          />
          <input className="border border-secondary-subtle rounded-2 p-1 text-tertiary me-3"
            id="position"
            name="position"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.position}
            placeholder='Position'
          />
            <input className="border border-secondary-subtle rounded-2 p-1 text-tertiary me-3"
            id="phone"
            name="phone"
            type="tel"
            onChange={formik.handleChange}
            value={formik.values.phone}
            placeholder='Phone'
          />
          <button type='submit' className='btn btn-secondary' disabled = {!formik.isValid} >Add</button>
        </form>
        <div >
        <Table setSil={setSil} sil= {sil} datas= {datas}></Table>
        </div>
        </div>
      );
    };
    export default Form;

