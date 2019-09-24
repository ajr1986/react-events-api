import React from 'react';
import PropTypes from 'prop-types';

const Event = ({event}) => {

    let {text} = event.description;
    if(text && text.length > 250){
        text = `${text.substr(0, 250)}...`;
    }

    return (
        <div>
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    {event.logo ? 
                        <img src={event.logo.url} alt={event.name.text} />
                    : null}
                </div>

                <div className="uk-card-body">
                    <h3 className="uk-card-title">{event.name.text}</h3>
                    {text}
                </div>

                <div className="uk-card-footer">
                    <a target="_blank" rel="noopener noreferrer" href={event.url} className="uk-button uk-button-secondary">
                        Ver...
                    </a>
                </div>
            </div>
        </div>
    );
};

Event.propTypes = {
    event: PropTypes.object.isRequired
};

export default Event;