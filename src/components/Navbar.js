import React from 'react'

import { ThemeContext } from '../contexts/ThemeContext'

class Navbar extends React.Component {
  render() {
    // console.log(this.context)
    return (
      <ThemeContext.Consumer>{(context) => {
        console.log(context)
        const {isDarkTheme, darkTheme, lightTheme} = context;
        const theme =  isDarkTheme ? darkTheme : lightTheme;
        
        return (
          <nav className="ui centered header" style={{background: theme.background, color: theme.text, height: '120px'}}>
            <h2 style={{textAlign: 'center'}}>Levi</h2>
              <div className="ui three buttons">
                <button className="ui button">Overview</button>
                <button className="ui button">Contact</button>
                <button className="ui button">Support</button>
              </div>
          </nav>
        )
      }}
      </ThemeContext.Consumer>
    );
  }
};

export default Navbar;  