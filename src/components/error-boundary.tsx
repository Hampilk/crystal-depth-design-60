import React, { Component, ErrorInfo, ReactNode } from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can log the error to an error reporting service here
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      // Custom fallback UI
      return this.props.fallback || (
        <Card className="glass-card my-8 mx-auto max-w-lg">
          <CardBody className="flex flex-col items-center justify-center p-8 text-center">
            <div className="mb-4 rounded-full bg-danger-100/10 p-4">
              <Icon icon="lucide:alert-triangle" className="h-8 w-8 text-danger" />
            </div>
            <h2 className="mb-2 text-xl font-semibold text-white">Something went wrong</h2>
            <p className="mb-6 text-neutral-300">
              {this.state.error?.message || "An unexpected error occurred"}
            </p>
            <Button color="primary" onPress={this.handleReset}>
              Try Again
            </Button>
          </CardBody>
        </Card>
      );
    }

    return this.props.children;
  }
}