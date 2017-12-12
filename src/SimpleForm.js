import React from 'react';
import { Field, reduxForm } from 'redux-form';

import RenderField from './renderField'


const colors = [{ color: 'Red', value: 'ff0000' },
{ color: 'Green', value: '00ff00' },
{ color: 'Blue', value: '0000ff' }]

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting, values } = props;
  return (
    <form onSubmit={handleSubmit}>
      <RenderField 
        label="Last Name" 
        name="lastName" 
        placeholder="Last Name ... " 
        handleSubmit={handleSubmit} 
        fieldType={"input"}
        />
      <RenderField
        label="First Name"
        name="firstName"
        placeholder="First Name ... "
        handleSubmit={handleSubmit}
        fieldType={"input"}
        />

      <RenderField
        label="Color"
        name="color"
        handleSubmit={handleSubmit}
        fieldType={"dropdown"}
        data={colors}
        textField={"color"}
      />
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'simple',
  initialValues: {
    lastName: "Dexter",
    firstName: "Lab",
    color: "Green"
    } // a unique identifier for this form
})(SimpleForm);
