import React, { Component } from 'react';
import { CategoriesConsumer } from '../context/CategoriesContext';
import { EventConsumer } from '../context/EventContext';

class Form extends Component {

    state = {
        name: '',
        category: ''
    }

    getFormData = e => {

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <EventConsumer>
                {(value) => {
                    return (
                        <form onSubmit={
                            (e) => {
                                e.preventDefault();
                                value.getEvents(this.state);
                            }}>
                            <fieldset className="uk-fieldset uk-margin">
                                <legend className="uk-legend uk-text-center">
                                    Busca tu evento por nombre o categoría
                                </legend>
                            </fieldset>

                            <div className="uk-column-1-3@m uk-margin">
                                <div className="uk-margin" uk-margin="true">
                                    <input 
                                        name="name"
                                        className="uk-input"
                                        placeholder="Nombre de evento o ciudad"
                                        onChange={this.getFormData}/>
                                </div>

                                <div className="uk-margin" uk-margin="true">
                                    <select
                                        name="category"
                                        className="uk-select"
                                        onChange={this.getFormData}>
                                        <option value="">-- Seleccione una categoría --</option>
                                        <CategoriesConsumer>
                                            {(value) => {
                                                return (
                                                    value.categories.map(category => (
                                                        <option key={category.id} value={category.id} data-uk-form-select>
                                                            {category.name_localized}
                                                        </option>
                                                    ))
                                                );
                                            }}
                                        </CategoriesConsumer>
                                    </select>
                                </div>

                                <div>
                                    <input type="submit" className="uk-button uk-button-danger" value="Buscar" />
                                </div>
                            </div>

                        </form>
                    )
                }}
            </EventConsumer>
        );
    }
}

export default Form;