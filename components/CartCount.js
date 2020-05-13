import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const AnimationStyles = styled.span`
  position: relative;
  .count {
    display: block;
    position: relative;
    backface-visibility: hidden;
    box-shadow: ${props => props.theme.bs};
  }
  .count-enter {
    opacity: .5;
    transform: rotateX(-0.5turn);
  }
  .count-enter-active {
    opacity: 1;
    transform: rotateX(0);
    transition: all 600ms;
  }
  .count-exit {
    top: 0;
    position: absolute;
    opacity: 1;
  }
  .count-exit-active {
    opacity: .5;
    transform: rotateX(0.5turn);
    transition: all 300ms;
  }
`;

const Dot = styled.div`
  background: ${props => props.theme.blue};
  color: white;
  border-radius: 50%;
  padding: 0.5rem;
  line-height: 2rem;
  min-width: 3rem;
  margin-left: 1rem;
  font-weight: 100;
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
`;

const CartCount = ({ count }) => (
  <AnimationStyles>
    <TransitionGroup>
      <CSSTransition
        unmountOnExit
        className="count"
        classNames="count"
        key={count}
        timeout={{ enter: 400, exit: 400 }}
      >
        <Dot>{count}</Dot>
      </CSSTransition>
    </TransitionGroup>
  </AnimationStyles>
);

export default CartCount;
