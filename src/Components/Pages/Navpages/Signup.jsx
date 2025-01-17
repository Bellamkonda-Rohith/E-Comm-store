import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setSignup } from '../../../Redux/SignupSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const signupCredentials = useSelector(state => state.Signup);
  const [loginCredentials, setLoginCredentials] = useState({
    name: '',
    email: '',
    password: '',
    avatar: 'https://picsum.photos/800',
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setSignup(loginCredentials));
    await postSignupData(signupCredentials);
  };

  const postSignupData = async (data) => {
    try {
      const response = await axios.post("https://api.escuelajs.co/api/v1/users/", data);
        console.log('Signup successful:', response.data);
        alert("Signup is Successful please login")
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-black-100">
      <div className="bg-white p-8 rounded-lg shadow-md ">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div >
            <label htmlFor="name" className="block text-gray-700 font-medium ">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={loginCredentials.name}
              onChange={handleLoginChange}
            />
          </div>
          <div >
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={loginCredentials.email}
              onChange={handleLoginChange}
            />
          </div>
          <div >
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={loginCredentials.password}
              onChange={handleLoginChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mt-3"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
