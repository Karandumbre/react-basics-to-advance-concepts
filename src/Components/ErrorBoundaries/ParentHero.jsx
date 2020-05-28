import React, { Component } from 'react'
import Hero from './Hero'
import ErrorBoundary from './ErrorBoundary';
export class ParentHero extends Component {
    render() {
        return (
            <div>
                <ErrorBoundary>
                    <Hero heroName='Batman' />
                    <Hero heroName='Superman' />
                    <Hero heroName='Joker' />
                </ErrorBoundary>


                <ErrorBoundary>
                    <Hero heroName='Batman' />
                </ErrorBoundary>

                <ErrorBoundary>
                    <Hero heroName='Superman' />
                </ErrorBoundary>

                <ErrorBoundary>
                    <Hero heroName='Joker' />
                </ErrorBoundary>
            </div>
        )
    }
}

export default ParentHero
