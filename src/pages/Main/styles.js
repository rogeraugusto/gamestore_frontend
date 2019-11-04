import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  background: #232323;
  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1400px;
  justify-content: space-between;

  a {
    color: #d3d3d3;
    display: block;
    text-decoration: none;

    &:hover {
      border: 2px solid #ff603c;
    }
  }

  .card {
    margin-top: 40px;
    max-width: 300px;
    border-radius: 10px;
    background-color: #272727;
    border: 2px solid transparent;
  }

  figure {
    padding: 20px;

    img {
      max-width: 100%;
    }
  }

  .txt {
    padding: 20px 30px 40px 30px;

    h2 {
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      padding-bottom: 15px;
    }

    p {
      font-size: 13.5px;
      font-weight: 500;
      line-height: 1.1rem;
      font-family: roboto;
    }
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: tomato;
  }
`;

// https://codepen.io/hubbit/pen/PoobJzG
