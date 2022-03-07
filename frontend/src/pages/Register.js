import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../features/auth/authSlice';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const dispatch = useDispatch();

  // useSelector를 사용하여 어떠한 global state(e.g. user)도 component로 갖고 올 수 있음.
  const { user, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // send toast textbox if the passwords don't match and clear the fields
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error('Passwords do not match');
    } else {
      const userData = {
        name,
        email,
        password,
      };
      // authSlice에 있는 register에 userData를 argument 로 넣어 dispatch함.
      dispatch(register(userData));
    }
    setFormData({ name: '', email: '', password: '', password2: '' });
  };
  return (
    <>
      <section className='heading'>
        <h1>
          <FaUserAlt />
          Register {user}
        </h1>
        <p>Please create an account</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              // id='name'
              name='name'
              value={name}
              onChange={onChange}
              placeholder='Enter your name'
              required
            />
            <input
              type='email'
              className='form-control'
              // id='name'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Enter your email'
              required
            />
            <input
              type='password'
              className='form-control'
              // id='name'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Enter your password'
              required
            />
            <input
              type='password'
              className='form-control'
              // id='name'
              name='password2'
              value={password2}
              onChange={onChange}
              placeholder='Enter your password2'
              required
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
