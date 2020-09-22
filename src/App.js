import React from 'react';
import './index.css'

import Navbar from './components/Navbar';
import TodoList from './components/TodoList';

import ThemeContextProvider from './contexts/ThemeContext';


function App() {
  return (
    <div className="App">
      <div className="ui raised padded text container segment">
        <ThemeContextProvider>
          <Navbar />
          <TodoList />
        </ThemeContextProvider>
      </div>
    </div>
  );
}

export default App;
