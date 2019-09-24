import React from 'react';
import Header from './components/Header';
import CategoriesProvider from './context/CategoriesContext';
import Form from './components/Form';
import EventProvider from './context/EventContext';
import EventsList from './components/EventsList';

function App() {
  return (

    <EventProvider>
      <CategoriesProvider>
        <Header />
        <div className="uk-container">
          <Form />
          <EventsList />
        </div>
    </CategoriesProvider>
    </EventProvider>

  );
}

export default App;
