import React, { Component } from 'react';
import axios from 'axios';
import * as Constants from '../constants/Constants';

const CategoriesContext = React.createContext();
export const CategoriesConsumer = CategoriesContext.Consumer;

class CategoriesProvider extends Component {

    token = Constants.TOKEN;
    baseUrl = Constants.BASE_API_URL;

    state = {
        categories: []
    };

    componentDidMount() {

        this.getCategories();
    }

    getCategories = async () => {

        let url = `${this.baseUrl}/categories/?token=${this.token}&locale=es_ES`;

        let response = await axios.get(url);

        this.setState({
            categories: response.data.categories
        });
    }

    render() {
        return (
            <CategoriesContext.Provider
                value={{
                    categories: this.state.categories
                }}
            >
                {this.props.children}
            </CategoriesContext.Provider>
        );
    }
}

export default CategoriesProvider;