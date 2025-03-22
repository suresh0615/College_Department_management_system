import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import bg from "../assets/logo1.jpg";

// Styled Components for CSS
const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &:hover, &:active {
    .top, .bottom {
      &:before, &:after {
        margin-left: 200px;
        transform-origin: -200px 50%;
        transition-delay: 0s;
      }
    }
    .center {
      opacity: 1;
      transition-delay: 0.2s;
    }
  }
`;

const Layer = styled.div`
  &:before, &:after {
    content: '';
    display: block;
    position: absolute;
    width: 200vmax;
    height: 200vmax;
    top: 50%;
    left: 50%;
    margin-top: -100vmax;
    transform-origin: 0 50%;
    transition: all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
    z-index: 10;
    opacity: 0.65;
    transition-delay: 0.2s;
  }
`;

const Top = styled(Layer)`
  &:before { transform: rotate(45deg); background: #e46569; }
  &:after { transform: rotate(135deg); background: #ecaf81; }
`;

const Bottom = styled(Layer)`
  &:before { transform: rotate(-45deg); background: #60b8d4; }
  &:after { transform: rotate(-135deg); background: #3745b5; }
`;

const Center = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
  transition-delay: 0s;
  color: #333;
`;

const InputField = styled.input`
  width: 100%;
  padding: 15px;
  margin: 5px;
  border-radius: 1px;
  border: 1px solid #ccc;
  font-family: 'Raleway', sans-serif;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  margin: 5px;
  border-radius: 1px;
  border: none;
  background: #e46569;
  color: white;
  font-family: 'Raleway', sans-serif;
  cursor: pointer;
  &:hover {
    background: #ecaf81;
  }
`;

const ChooseUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('admin'); // Default to 'admin'
  const navigate = useNavigate();

  // Use a single sign-in endpoint for all user types
  const endpoint = 'https://college-department-server.onrender.com/api/v1/users/signin';

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(endpoint, { email, password, userType });

      if (response && response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('authToken', token);
        alert(`${userType.charAt(0).toUpperCase() + userType.slice(1)} login successful!`);

        if (userType === 'admin') {
          navigate('/admin/dashboard');
        } else if (userType === 'teacher') {
          navigate('/teacher/dashboard');
        } else {
          navigate('/student/dashboard');
        }
      } else {
        alert('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      if (error.response) {
        alert(`Error: ${error.response.data.message}`);
      } else {
        alert('An error occurred. Please check your input or try again later.');
      }
    }
  };

  return (
    <Container>
      <Top className="top" />
      <Bottom className="bottom" />
      <Center className="center">
        <h2>Please Sign In</h2>
        {/* Email Input */}
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password Input */}
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* User Type Selector */}
        <InputField
          as="select"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="teacher">Staff</option>
          <option value="student">Student</option>
        </InputField>

        {/* Submit Button */}
        <Button type="submit" onClick={handleSignIn}>
          Sign In
        </Button>
      </Center>
    </Container>
  );
};

export default ChooseUser;
