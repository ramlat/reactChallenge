/**
 * WelcomeForm.js
 *
 * This component contains the Redux Form used to collect user input.
 * Its props are passed down from the Welcome container.
 *
 * @see https://redux-form.com/7.4.2/docs/api/field.md/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form/immutable';
import Button from '@material-ui/core/Button';

import { RFTextField } from 'components/ReduxFormFields/RFTextField';

class WelcomeForm extends React.PureComponent {
  render() {
    const { handleSubmit } = this.props;


    return (
      <form
        className="flex flex-column"
        onSubmit={handleSubmit}
      >
        {/* TODO: Add elements to form to collect user input
        Latha added 3 Field elements for each user input */ }
        <div className="item right floated content" >
          <Field
            name="username"
            type={String}
            component={RFTextField}
            label="User name"
          />
        </div>
        <div className="item right floated content" > <Field
          name="firstNm"
          type={String}
          component={RFTextField}
          label="First name"
        />
        </div>
        <div className="item right floated content" ><Field
          name="lastNm"
          type={String}
          component={RFTextField}
          label="Last name"
        />
        </div>
        <div className="center mt3">
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

WelcomeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

// TODO: Add validation
// Latha added validation rules for each field that needed to have a value/string
// @see https://redux-form.com/7.4.2/docs/api/reduxform.md/
const validate = (formValues) => {
  const errors = [];
  if (!formValues.username) {
    errors.username = 'You have to enter a vaslue for user name.';
  }
  if (!formValues.firstNm) {
    errors.firstNm = 'You have to enter a vaslue for first name.';
  }
  if (!formValues.lastNm) {
    errors.lastNm = 'You have to enter a vaslue for last name.';
  }

  return errors;
};

export default reduxForm({
  form: 'welcome',
  validate
})(WelcomeForm);
