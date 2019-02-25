import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { SpinnerContainer, Parent, BaseElement } from '../styles/spinner';

function Spinner(props) {
  const { categoryLoading, jokeLoading } = props;
  const unmountOnExit = true;
  return (
    <CSSTransition timeout={2000} classNames="fade" in={categoryLoading || jokeLoading} unmountOnExit={unmountOnExit}>
      <SpinnerContainer>
        <Parent>
          <BaseElement className="moved" />
          <BaseElement className="tl" />
          <BaseElement className="tr" />
          <BaseElement className="bl" />
          <BaseElement className="br" />
        </Parent>
      </SpinnerContainer>
    </CSSTransition>
  );
}

Spinner.propTypes = {
  categoryLoading: PropTypes.bool.isRequired,
  jokeLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  categoryLoading: state.categories.loading,
  jokeLoading: state.joke.loading,
});

export default connect(mapStateToProps)(Spinner);
