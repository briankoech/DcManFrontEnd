import React from 'react';
import NavAppBar from './AppBar.jsx'

export default class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
          <NavAppBar loggedIn={false}/>
        <div className="spacer"></div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}