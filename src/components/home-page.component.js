import React, { Component } from 'react'

export default class HomePage extends Component {
  render() {
    return (
      <div style={{minHeight: "90vh"}}>  
        <h1>Welcome to countdown!</h1>
        <p>
          This is a website built with React and Bootstrap. 
          I got the idea reading <a href="https://medium.com/@peterjd42/building-timers-in-react-stopwatch-and-countdown-bc06486560a2">this</a> article on medium.
          In this website I also added the dark mode, to activate it just press the moon icon in the navigation bar (it stills has some bugs, but don't mind).
          <br />
          There is a repo on Github for this project. You can find the link <a href="https://github.com/Pole11/countdown-react">here</a>.
          If you want to contact me, check my social media links in the <a href="#footer">footer</a>. 
        </p>
      </div>
    );
  }
}
