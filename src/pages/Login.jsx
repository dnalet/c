import React, { Component } from "react";
import LoginForm from "../components/authForms/loginForm";
import SimpleHeader from "../components/simpleheader/simpleHeader";
import styled from "styled-components";

const Login = () => (
  <LoginContainer>
    <SimpleHeader />
    <LoginForm />
  </LoginContainer>
);

export default Login;

const LoginContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
`;
