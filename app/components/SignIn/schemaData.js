export const schema = {
  title: 'SignInPage',
  type: 'object',
  required: ['email', 'password'],
  properties: {
    email: {
      type: 'string',
      title: 'Email',
    },
    password: {
      type: 'string',
      title: 'Password',
      minLength: 3,
    },
  },
};

export const schemaUi = {
  email: {
    'ui:widget': 'email',
  },
  password: {
    'ui:widget': 'password',
  },
};
