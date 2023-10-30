import React, { Component } from "react";

interface IErrorBoundaryProps {
  children: JSX.Element;
}
interface IErrorBoundaryState {
  error: any;
}
class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  state = {
    error: null,
  };
  static getDerivedStateFromError(error: any) {
    return { error };
  }
  render() {
    const { error } = this.state;
    if (error) {
      return <div>{error}</div>;
    }
    return this?.props?.children;
  }
}

export default ErrorBoundary;
