// #region React
import React from 'react';
import PropTypes from 'prop-types';
// #endregion

// #region Package (third-party)
import MailchimpSubscribe from 'react-mailchimp-subscribe';
// #endregion

const CustomForm = ({ status, message, onValidated }) => {
  // #region Parameters
  let email;
  // #endregion

  // #region Event
  // Change Handaler
  const inputChangedHandler = (e) => {
    // eslint-disable-next-line no-console
    console.log(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-expressions
    email && email.value.indexOf('@') > -1 && onValidated({ EMAIL: email.value });
    // eslint-disable-next-line prefer-const
    let emailInput = document.getElementById('mc-form-email');
    emailInput.value = '';
  };
  // #endregion

  return (
    <>
      <form className="newsletter-form input-btn-group">
        <input
          id="mc-form-email"
          className="form-control"
          type="email"
          name="mail"
          placeholder="Enter your email"
          onChange={(e) => inputChangedHandler(e)}
          // eslint-disable-next-line no-return-assign
          ref={(node) => (email = node)}
        />
        <button
          className="btn btn-theme"
          type="button"
          onClick={submit}
        >
          <i className="icofont-long-arrow-right" />
        </button>
      </form>
      {status === 'sending' && (
        <div style={{ color: '#3498db', fontSize: '12px' }}>
          sending...
        </div>
      )}
      {status === 'error' && (
        <div style={{ color: '#e74c3c', fontSize: '12px' }}>
          {message}
        </div>
      )}
      {status === 'success' && (
        <div style={{ color: '#2ecc71', fontSize: '12px' }}>
          {message}
        </div>
      )}
    </>
  );
};

const Newsletter = ({ mailchimpUrl }) => (
  <MailchimpSubscribe
    url={mailchimpUrl}
    render={({ subscribe, status, message }) => (
      <CustomForm
        status={status}
        message={message}
        onValidated={(formData) => subscribe(formData)}
      />
    )}
  />
);

// #region Khai báo Props
CustomForm.propTypes = {
  status: PropTypes.oneOf(['sending', 'error', 'success']),
  message: PropTypes.string,
  onValidated: PropTypes.func,
};

CustomForm.defaultProps = {
  status: 'sending',
  message: '',
  onValidated: () => {},
};

Newsletter.propTypes = {
  mailchimpUrl: PropTypes.string,
};

Newsletter.defaultProps = {
  mailchimpUrl: '',
};
// #endregion

export default Newsletter;
