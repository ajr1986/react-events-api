import React, { Component } from 'react';
import axios from 'axios';
import * as Constants from '../constants/Constants';

const EventContext = React.createContext();
export const EventConsumer = EventContext.Consumer;

class EventProvider extends Component {

    token = Constants.TOKEN;
    baseUrl = Constants.BASE_API_URL;

    state = {
        events: []
    };

    getEvents = async (search) => {

        let url = `${this.baseUrl}/events/search/?q=${search.name}&categories=${search.category}&sort_by=date&token=${this.token}&locale=es_ES`;

        const response = await axios.get(url);

        this.setState({
            events: response.data.events
        });
    }

    render() {
        return (
            <EventContext.Provider
                value={{
                    events: this.state.events,
                    getEvents: this.getEvents
                }}>
                {this.props.children}
            </EventContext.Provider>
        );
    }
}

export default EventProvider;