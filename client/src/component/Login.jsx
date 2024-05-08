import React, { useState } from 'react';
import axios from 'axios';
import './component.css'

export default function Login() {
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  console.log('pass',password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('check',gmail,password);
    try {
      const response = await axios.post('http://localhost:8080/api/v1/Login', {
        gmail,
        password,
      });

      console.log(response.data);
      alert('ban da dang nhap thanh cong')
    } catch (error) {
      console.error('Lỗi:', error);
      alert('thong tin dang nhap sai')
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          placeholder='Email'
          type="email"
          onChange={(e) => setGmail(e.target.value)}
        />
       
        <input
        placeholder='Password'
          type="text"
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="">Porgot password</a>
        <button type="submit">Đăng nhập</button>
        <p>Don't have an account?<a href="">Singup</a></p>
        <p>Or</p>
        <button className='withLogin'>Login with Facebook</button>
        <button className='withLogin' id='withgoogle'>Login with Google</button>
      </form>
    </>
  );
}
