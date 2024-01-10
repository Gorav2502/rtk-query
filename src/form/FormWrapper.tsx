import React from 'react';
import { Formik, FormikProps } from 'formik';
import FormLayout from './layout/FormLayout';
// import * as Yup from 'yup';



const FormWrapper: React.FC = () => {
  interface FormValues {
    UserName: string;
    Email: string;
    Password : string;
    MobileNo: string;
  }
  const initialValues: FormValues = {
    UserName: '',
    Email: '',
    Password : '',
    MobileNo: ''
  };

  // const validationSchema = Yup.object().shape({
  //   UserName: Yup.string().required('Field 1 is required'),
  // Email: Yup.string().required('Field 2 is required'),
  // });
 
  const handleSubmit = (values: FormValues) => {
    console.log(values);
     console.log(values.UserName)

     const passLength = (values.Password).length
     console.log(passLength)
     if(passLength < 8){
      alert("Your password should be at least 8 characters long")
     }
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps: FormikProps<FormValues>) => (
        <FormLayout {...formikProps} initialValues={initialValues} />
      )}
    </Formik>
  );
};

export default FormWrapper;
