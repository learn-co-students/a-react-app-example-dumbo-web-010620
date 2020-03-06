import React, { Component } from 'react';

// no need to modify anything in here. The second test is looking for the returned JSX from this component
class ExampleComponent extends Component {
  render() {
    return (
      <div>
        <div className="example">
          <img src="https://s3.amazonaws.com/ironboard-learn/sunglasses.gif" alt="a deeply impressed man, perhaps thinking 'whoa'"/>
          <p>Whoa!</p>
        </div>
        <div className="example" id="shaqr">
        <img src="https://media.giphy.com/media/UO5elnTqo4vSg/giphy.gif" alt="a deeply impressed man, perhaps thinking 'whoa'"/>
        <p>Whoa!</p>
      </div>
     </div>
    );
  }
}

export default ExampleComponent;
