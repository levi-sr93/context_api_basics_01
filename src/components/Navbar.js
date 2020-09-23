import React from 'react'

import { ThemeContext } from '../contexts/ThemeContext'
import {AuthContext} from '../contexts/AuthContext'

class Navbar extends React.Component {
  render() {
    // console.log(this.context)
    return (
      <AuthContext.Consumer>{(authContext) => {
        return (
          <ThemeContext.Consumer>{(themeContext) => {
            console.log(authContext)
            const {isDarkTheme, darkTheme, lightTheme} = themeContext;
            const {isLoggedIn, changeAuthStatus} = authContext;
            const theme =  isDarkTheme ? darkTheme : lightTheme;
            
            return (
              <nav className="ui centered header" style={{background: theme.background, color: theme.text, height: '120px'}}>
                <h2 style={{textAlign: 'center'}}>Levi</h2>
                <p onClick={changeAuthStatus}>{isLoggedIn ? 'logged in' : 'logged out'}</p>
                  <div className="ui three buttons">
                    <button className="ui button">Overview</button>
                    <button className="ui button">Contact</button>
                    <button className="ui button">Support</button>
                  </div>
              </nav>
            )
          }}
          </ThemeContext.Consumer>
        )
      }}
      </AuthContext.Consumer>
    );
  }
};

export default Navbar;  