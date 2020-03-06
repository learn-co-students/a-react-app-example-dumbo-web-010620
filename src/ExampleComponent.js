import React, { Component } from 'react';

// no need to modify anything in here. The second test is looking for the returned JSX from this component
class ExampleComponent extends Component {
  render() {
    return (
     <div className="example">
        <img src="https://media.giphy.com/media/51S87GVazTD7W/giphy.gif"/><br/>
        <img src="https://s3.amazonaws.com/ironboard-learn/sunglasses.gif" alt="a deeply impressed man, perhaps thinking 'whoa'"/>
        <p>Whoa!</p>
      </div>
    
    );
  }
}

export default ExampleComponent;
