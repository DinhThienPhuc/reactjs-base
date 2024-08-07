import React, { Component } from "react";

import { Styled } from "./_style";
import { IErrorBoundaryProps, IErrorBoundaryState } from "./_types";

export class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  override componentDidCatch(error: any, errorInfo: any) {
    this.setState({ error, errorInfo });
  }

  override render() {
    if (this.state.error) {
      if (this.props.FallbackComponent) {
        const FallbackComponent = this.props.FallbackComponent;
        return <FallbackComponent />;
      }

      return (
        <Styled.Container>
          <Styled.Content>
            <Styled.Title>Whoops!</Styled.Title>
            <Styled.Description>
              Stuck in a blind spot. Reload to see the magic!
            </Styled.Description>
            <button onClick={this.props.onReset}>Reload</button>
          </Styled.Content>
        </Styled.Container>
      );
    }

    return this.props.children;
  }
}
