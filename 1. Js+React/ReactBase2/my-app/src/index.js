import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 26
    };
    this.nextYear = this.nextYear.bind(this);
    // this.nextYear = () => {
    //   this.setState(state => ({
    //     years: ++state.years
    //   }));
    // };
  }

  // state = {
  //   years: 26
  // };

  // nextYear = () => {
  //   this.setState(state => ({
  //     years: ++state.years
  //   }));
  // };

  nextYear() {
    console.log(1);
    this.setState(state => ({
      years: ++state.years
    }));
  }

  render() {
    const {name, surname, link} = this.props;
    const {years} = this.state;
    return (
      <>
        <button onClick={this.nextYear}>++</button>
        <h1>My name is {name}, surname - {surname}, years - {years}</h1>
        <a href={link}>My profile</a>
      </>
    );
  }
}

const All = () => {
  return (
    <>
      <WhoAmI name="John" surname="Smith" link="google.com" />
      <WhoAmI name="Mike" surname="Smith" link="facebox.com" />
      <WhoAmI name="John" surname="Nice" link="vsote.com" />
    </>
  );
}

ReactDOM.render(
  <All />,
  document.getElementById('root')
);