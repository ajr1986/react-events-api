import React from 'react';
import { EventConsumer } from '../context/EventContext';
import Event from './Event';

const EventsList = props => {
    return (
        <div className="uk-child-width-1-3@m" uk-grid="true">

            <EventConsumer>
                {(value) => {
                    return value.events.map(event => (
                        <Event key={event.id} event={event}/>
                    ))
                }}
            </EventConsumer>

        </div>
    );
};

export default EventsList;