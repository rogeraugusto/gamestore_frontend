import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as LoginActions } from '../../store/ducks/login';

import { Form, Container } from './styles';
import Logo from '../../assets/logo.svg';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errorFill: '',
  };

  handleSingIn = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const { loginRequest, history } = this.props;

    if (!email || !password) {
      this.setState({ errorFill: 'Preencha e-mail e senha para continuar!' });
    } else {
      loginRequest(email, password, history);
      this.setState({
        email: '',
        password: '',
        errorFill: '',
      });
    }
  };

  render() {
    const { email, password, errorFill } = this.state;
    const { login } = this.props;

    return (
      <Container>
        <Form onSubmit={this.handleSingIn}>
          <img src={Logo} alt="Pizzaria logo" />
          {errorFill && <p>{errorFill}</p>}
          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha secreta"
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button type="submit">Entrar</button>

          {login.loading && <span className="loading">Carregando...</span>}
          {!!login.error && <span className="error">{login.error}</span>}
        </Form>
      </Container>
    );
  }
}

Login.propTypes = {
  loginRequest: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  login: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  login: state.login,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(LoginActions, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Login),
);
