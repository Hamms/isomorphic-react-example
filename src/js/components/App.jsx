import React from 'react';
import ReactDOM from 'react-dom';

// This is just a simple example of a component that can be rendered on both
// the server and browser
export default class App extends React.Component {

  constructor(props) {
    super(props);
    // We initialise its state by using the `props` that were passed in when it
    // was first rendered. We also want the button to be disabled until the
    // component has fully mounted on the DOM
    this.state = {
      items: this.props.items,
      disabled: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // Once the component has been mounted, we can enable the button
  componentDidMount() {
    this.setState({
      disabled: false
    });
  }

  // Then we just update the state whenever its clicked by adding a new item to
  // the list - but you could imagine this being updated with the results of
  // AJAX calls, etc
  handleClick() {
    this.setState({
      items: this.state.items.concat('Item ' + this.state.items.length)
    });
  }

  // For ease of illustration, we just use the React JS methods directly
  // (no JSX compilation needed)
  // Note that we allow the button to be disabled initially, and then enable it
  // when everything has loaded
  render() {
    return (<div>
      <button onClick={this.handleClick} disabled={this.state.disabled}>Add Item</button>
      <ul>{this.state.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
    </div>);
  }
}
