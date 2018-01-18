import React from 'react';
import Form from 'react-jsonschema-form';
import { schema, schemaUi } from './schemaData';

class SignUp extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Form
          schema={schema}
          uiSchema={schemaUi}
        />
      </div>
    );
  }
}

SignUp.propTypes = {

};

export default SignUp;
