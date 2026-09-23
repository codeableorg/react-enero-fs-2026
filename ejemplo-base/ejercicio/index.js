import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

const counterDisplay = React.createElement(
  'p',
  { className: 'counter__display' },
  '0'
);

const counterActions = React.createElement(
  'div',
  {
    className: 'counter__actions'
  },
  React.createElement('button', { className: 'counter__button' }, 'Decrement'),
  React.createElement('button', { className: 'counter__button' }, 'Increment'),
  React.createElement('button', { className: 'counter__button' }, 'Reset')
);

const props = {
  className: 'css_section'
};

const section = React.createElement('section', props, 'Esto es una section');

const counter = React.createElement(
  'div',
  { className: 'counter' },
  counterDisplay,
  counterActions
);

root.render(counter);
