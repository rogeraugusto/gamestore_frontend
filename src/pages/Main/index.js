import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as GamesActions } from '../../store/ducks/games';

import Header from '../../components/Header';

import { Container, Content } from './styles';

class Games extends Component {
  componentDidMount() {
    const { loadGamesRequest } = this.props;
    loadGamesRequest();
  }

  renderGames = () => {
    const { games } = this.props;
    if (games.data.docs && games.data.docs.length > 0) {
      return games.data.docs.map((game) => (
        <a href="#" className="card react" key={game._id}>
          <div className="content">
            <figure>
              <img src={game.artwork} alt="" />
            </figure>
            <div className="txt">
              <h2>{game.title}</h2>
              <p>
                {game.description.length < 100
                  ? game.description
                  : `${game.description.substring(0, 100)}...`}
              </p>
            </div>
          </div>
        </a>
      ));
    }
  };

  render() {
    const { games } = this.props;
    return (
      <Container>
        <Header />
        <Content>{games.loading ? <p>Carregando...</p> : this.renderGames()}</Content>
      </Container>
    );
  }
}

Games.propTypes = {
  loadGamesRequest: PropTypes.func.isRequired,
  games: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  games: state.games || [],
});

const mapDispatchToProps = (dispatch) => bindActionCreators(GamesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Games);
