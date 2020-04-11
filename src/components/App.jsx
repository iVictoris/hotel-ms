import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Overview, Room } from './';

/**
 * * MVP
 * * see available rooms at a glance,
 * ! see detailed view of room
 *      ! should be able:
 *          ! to book room here
 *          ! schedule cleaning
 *          ! block room for any issue
 * ! book rooms
 *      ! should:
 *          ! look up customer by email/phone
 *          ! proceed without customer sign up
 * ! add rooms,
 * ! checkout guests of room
 * ! hotel auth - login/register
 *      ! Write tests
 * ! customer auth - login/register
 *      ! Write tests
 *
 * * Optional Features:
 * ? payment system
 *
 */

function App() {
    return (
        <div className="app">
            <nav></nav>
            <main className="view">
                <Switch>
                    <Route path="/" exact render={() => <div>home</div>} />
                    <Route path="/overview" component={Overview} />
                    <Route path="/room/:id" component={Room} />
                    <Redirect to="/" />
                </Switch>
            </main>
        </div>
    );
}

export default App;
