import styled from 'styled-components';
import fundo from '../../assets/fundo.jpg';

export const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${fundo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  width: 400px;
  background: transparent;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    margin: 10px 0 40px;
  }
  p {
    color: #ffffff;
    margin-bottom: 15px;
    border: 1px solid #ffffff;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    height: 46px;
    margin-bottom: 10px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #584a39;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
  span.loading,
  span.error {
    color: #ffffff;
    font-weight: bold;
    margin-top: 15px;
    text-align: center;
  }
`;
