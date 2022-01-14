/**
 * https://www.youtube.com/watch?v=YEH2GLFJhQY
 */
// #region React
import React from 'react';
import { useForm } from 'react-hook-form';
// #endregion

const ContactForm = () => {
  // #region Parameters
  const { register, errors } = useForm({
    mode: 'onBlur',
  });
  // #endregion

  return (
    <form
      className='contact-form-wrapper'
      action='https://getform.io/f/2741c444-d399-485d-9b73-5f34fae664bc'
      method='POST'
      data-aos='fade-up'
      data-aos-duration='1200'
    >
      <div className='row'>
        <div className='col-md-4'>
          <div className='form-group'>
            <input
              className='form-control'
              type='text'
              name='name'
              placeholder='Tên'
              ref={register({ required: 'Tên là bắt buộc' })}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
        </div>
        <div className='col-md-4'>
          <div className='form-group'>
            <input
              className='form-control'
              type='email'
              name='email'
              placeholder='Email'
              ref={register({
                required: 'Email là bắt buộc',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Email không hợp lệ',
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
        </div>
        <div className='col-md-4'>
          <div className='form-group'>
            <input
              className='form-control'
              type='text'
              name='subject'
              placeholder='Chủ đề'
              ref={register({ required: 'Chủ đề là bắt buộc' })}
            />
            {errors.subject && <p>{errors.subject.message}</p>}
          </div>
        </div>
        <div className='col-md-12'>
          <div className='form-group mb-0'>
            <textarea
              name='message'
              rows='5'
              placeholder='Lời nhắn của bạn'
              ref={register({
                required: 'Lời nhắn là bắt buộc',
              })}
            />
            {errors.message && <p>{errors.message.message}</p>}
          </div>
        </div>
        <div className='col-md-12 text-center'>
          <div className='form-group mb-0'>
            <button className='btn btn-theme btn-block' type='submit'>
              Gửi
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
