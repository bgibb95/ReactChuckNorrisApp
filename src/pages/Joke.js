import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchJokeFromCategory from '../actions/joke';
import {
  RightContainer,
  LeftContainer,
  BasicLink,
  MainTitle,
  NewCategoryLink,
  Page,
} from '../styles/common';
import {
  Row,
  PrimaryButton,
  JokeIcon,
  JokeHeader,
} from '../styles/joke';

export class Joke extends Component {
  constructor(props) {
    super(props);
    this.getJoke = this.getJoke.bind(this);
  }

  componentWillMount() {
    this.getJoke();
  }

  getJoke() {
    const { fetchJokeFromCategory: getJokeFromCategory, match } = this.props;
    const { category } = match.params;
    getJokeFromCategory(category);
  }

  render() {
    const { joke, loading } = this.props;
    return (
      <Page>
        <LeftContainer>
          <MainTitle>
            {joke.category}
            {' '}
            Joke
          </MainTitle>
          <Row>
            <PrimaryButton type="button" onClick={this.getJoke}> New Joke</PrimaryButton>
            <NewCategoryLink to="/">New Category</NewCategoryLink>
          </Row>
        </LeftContainer>
        <RightContainer loading={loading}>
          { joke.icon_url ? <JokeIcon src={`${joke.icon_url}`} alt="jokeImage" /> : null}
          <JokeHeader>{joke.value}</JokeHeader>
          <BasicLink href={`${joke.url}`} rel="noopener noreferrer" target="_blank">See joke</BasicLink>
        </RightContainer>
      </Page>
    );
  }
}

Joke.propTypes = {
  match: PropTypes.shape({}).isRequired,
  fetchJokeFromCategory: PropTypes.func.isRequired,
  joke: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  joke: state.joke.joke,
  loading: state.joke.loading,
});

export default connect(mapStateToProps, { fetchJokeFromCategory })(Joke);
