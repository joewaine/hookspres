import React, {useState, useEffect} from 'react';

function UseEffect() {
    const [count, setCount] = useState(0);
  
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${count} times`;
    });
  
    return (
      <div className="app">
        <h1>with useEffect()</h1>
        <br />
        <br />
        <img src="https://i.imgur.com/c0AKlo1.jpg" style={{width: '800px'}} />
        <br />
        <br />
        <h1>You clicked {count} times</h1>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }



  export default UseEffect;