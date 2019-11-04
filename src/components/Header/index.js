import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { faShoppingBasket, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';

import { signOut, getUserData as user } from '../../services/auth';

import { Container } from './styles';

class Header extends Component {
  handleSingOut = () => {
    const { history } = this.props;
    signOut();
    history.push('/');
  };

  render() {
    // const { count } = this.props;
    return (
      <Container>
        <div>
          <img src={logo} alt="Logo" />
          <em>
            <h1>GameStore</h1>
          </em>
        </div>
        <div className="user">
          <ul>
            <li>{user.name}</li>
            <li>
              <button type="button" onClick={this.handleSingOut}>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </button>
            </li>
          </ul>
          <div className="games">
            <span data-badge="0">
              <FontAwesomeIcon icon={faShoppingBasket} />
            </span>
          </div>
        </div>
      </Container>
    );
  }
}
/*
Header.propTypes = {
  count: PropTypes.number.isRequired,
};
*/
const mapStateToProps = (state) => ({
  count: state.games || [],
});

export default withRouter(connect(mapStateToProps)(Header));
