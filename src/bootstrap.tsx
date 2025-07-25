import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Initialize React for the plugin system
declare global {
  interface Window {
    React: typeof React;
    ReactDOM: typeof ReactDOM;
  }
}

window.React = React;
window.ReactDOM = ReactDOM;