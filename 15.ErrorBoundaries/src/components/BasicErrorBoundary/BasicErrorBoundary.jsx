import React, { Component } from "react";

// Basic Error Boundary Component
export default class BasicErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // Lifecycle method to catch errors in child components
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  // Optional: Log error details
  componentDidCatch(error, errorInfo) {
    console.error("Error caught by BasicErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", border: "2px solid red", color: "red" }}>
          <h2>Something went wrong!</h2>
          <p>{this.state.error && this.state.error.toString()}</p>
        </div>
      );
    }

    // Render children normally if no error
    return this.props.children;
  }
}
