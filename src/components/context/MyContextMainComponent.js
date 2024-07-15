import React from 'react'
import Filter from './Filter';
import CardList from './CardList';
import { CardProvider } from './CardContext';
import { Container } from 'react-bootstrap';

export const MyContextMainComponent = () => {
    return (
        <CardProvider>
            <Container>
                <h1>Card Management Using Context</h1>
                <Filter />
                <div className="card-list">
                    <CardList />
                </div>
            </Container>
        </CardProvider>)
}
