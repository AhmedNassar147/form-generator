export const schema = {
  title: 'SignUpFrom',
  type: 'object',
  required: [
    'firstName',
    'lastName',
    'email',
    'image',
    'password',
    'confirmPassword',
    'telephone',
  ],
  properties: {
    firstName: {
      type: 'string',
      title: 'First name',
    },
    lastName: {
      type: 'string',
      title: 'Last name',
    },
    email: {
      type: 'string',
      title: 'Email',
    },
    image: {
      type: 'string',
      title: 'Image',
    },
    password: {
      type: 'string',
      title: 'Password',
      minLength: 3,
    },
    confirmPassword: {
      type: 'string',
      title: 'ConfirmPassword',
      minLength: 3,
    },
    telephone: {
      type: 'string',
      title: 'Telephone',
      minLength: 10,
    },
  },
};


export const schemaUi = {
  firstName: {
    'ui:autofocus': true,
    'ui:emptyValue': '',
  },
  lastName: {
    'ui:autofocus': true,
    'ui:emptyValue': '',
  },
  email: {
    'ui:widget': 'email',
  },
  image: {
    'ui:widget': 'file',
  },
  confirmPassword: {
    'ui:widget': 'password',
    'ui:help': 'Hint: Make it strong!',
  },
  password: {
    'ui:widget': 'password',
    'ui:help': 'Hint: Make it strong!',
  },
  telephone: {
    'ui:options': {
      inputType: 'tel',
    },
  },
};
