import styled from 'styled-components';
import header from '../../assets/header-background.jpg';

export const Container = styled.div`
  background: url(${header});
  display: flex;
  justify-content: space-around;
  height: 70px;
  width: 100%;
  line-height: 70px;
  border-bottom: 1px solid white;
  div {
    text-decoration: none;
    color: #ffffff;
    img {
      display: inline-block;
      margin: 0px 10px -5px 0px;
    }
    h1 {
      display: inline-block;
      font-size: 18px;
      font-style: initial;
    }
  }
  .user {
    display: flex;
    ul {
      list-style-type: none;
      color: #fff;
      margin: 15px 10px 0;
      text-align: right;
      li {
        line-height: 20px;
        font-weight: bold;
        button {
          color: #6b6b6b;
          font-size: 20px;
          background: none;
          border: none;
          cursor: pointer;
        }
      }
    }
    .games {
      margin: 20px 0px 0px 15px;
      border-left: 1px solid #6b6b6b;
      height: 30px;
      line-height: 1.5;
      span {
        margin: 0 20px;
        display: inline-block;
        min-width: 35px;
        height: 35px;
        border: solid 1px #232d46;
        vertical-align: top;
        text-align: center;
        padding: 5px;
        background-color: #232d44;
        border-radius: 25px;
      }
      [data-badge] {
        position: relative;
        &:after {
          position: absolute;
          right: -10px;
          top: -10px;
          min-width: 10px;
          min-height: 10px;
          line-height: 10px;
          padding: 5px;
          color: black;
          background-color: #9b261a;
          font-size: 10px;
          border-radius: 20px;
          content: attr(data-badge);
          border: solid 1px #eb5d3b;
        }
      }
    }
  }
`;
