import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  StyledLink,
  RightContainer,
  LeftContainer,
  MainTitle,
  Page,
  Copy,
} from '../styles/common';
import fetchCategories from '../actions/categories';

export class Categories extends Component {
  componentWillMount() {
    const { fetchCategories: getCategories } = this.props;
    getCategories();
  }

  render() {
    const { categories } = this.props;
    const categoryItems = categories.map((category, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <StyledLink to={`/joke/${category}`} key={index}>
        {category}
      </StyledLink>
    ));
    const { loading } = this.props;

    return (
      <Page>
        <LeftContainer>
          <MainTitle>Joke categories</MainTitle>
          <Copy>
            Select a category to fetch a random Chuck Norris joke, relating to
            your chosen category.
          </Copy>
        </LeftContainer>
        <RightContainer loading={loading}>
          {categoryItems}
        </RightContainer>
      </Page>
    );
  }
}

Categories.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories.categories,
  loading: state.categories.loading,
});

export default connect(mapStateToProps, { fetchCategories })(Categories);
