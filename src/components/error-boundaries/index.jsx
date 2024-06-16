import React, { Component } from "react";
import Hero from "./hero";
import ErrorBoundary from "./error-boundary";

export class ErrorBoundaryComponent extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Hero heroName="Batman" />
          <Hero heroName="Superman" />
          <Hero heroName="Joker" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary>
      </div>
    );
  }
}

export default ParentHero;
