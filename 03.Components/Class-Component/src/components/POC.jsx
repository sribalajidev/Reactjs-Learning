// Import React and Component class
import React, { Component } from "react";

// Define the POC Class Component
class POC extends Component {
  // Constructor runs when component is created
  constructor(props) {
    super(props);
    this.state = { seconds: props.start || 10 }; // Initialize state with 'seconds', use props.start if provided or default 10
  }

  // Lifecycle Method: Runs after component is mounted in DOM
  componentDidMount() {
    // Start a timer that updates state every 1 second
    this.timer = setInterval(() => {
      // Update state using prevState to decrement seconds
      this.setState((prevState) => ({ seconds: prevState.seconds - 1 }));
    }, 1000);
  }

  // Lifecycle Method: Runs after every update (state or props change)
  componentDidUpdate(prevProps, prevState) {
    // Check if seconds reached 0 and was not 0 in previous state
    if (this.state.seconds === 0 && prevState.seconds !== 0) {
      clearInterval(this.timer); // Stop the timer
      alert("Time's up!"); // Notify the user
    }
  }

  // Lifecycle Method: Runs before component is removed from DOM
  componentWillUnmount() {
    clearInterval(this.timer); // Cleanup timer to prevent memory leaks
  }

  // Render method returns the UI
  render() {
    return (
      <div>
        <h2>Countdown Timer</h2>
        <p>Seconds left: {this.state.seconds}</p>
      </div>
    );
  }
}

export default POC;
