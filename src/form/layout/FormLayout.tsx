import React from 'react';
import { Field, Form } from 'formik';
import { Button } from '@mui/material';


interface InputFieldsProps {
  initialValues: {
    UserName: string;
    Email: string;
    Password : string;
    MobileNo: string;
  };
}

const FormLayout: React.FC<InputFieldsProps> = ({ initialValues: any }) => {


  return (
    <Form>
      <div className='grid grid-cols-3 sm:grid-cols-2'>
        <div>
          <label >UserName</label>
          <Field name="UserName" />
        </div>

        <div>
          <label >Email</label>
          <Field   name="Email" />
        </div>

        <div>
          <label>Mobile No.</label>
          <Field type="number" name='MobileNo' />
        </div>

        <div>
          <label>Password.</label>
          <Field type="password" name='Password' />
        </div>
        <Button type='submit'>Save</Button>
      </div>
    </Form>
  );
};

export default FormLayout;
