import PropTypes from 'prop-types';
import { useState } from 'react';
import {ReactComponent as Icon} from '../../icons/search.svg';
import { Bar, SearchForm, SearchFormButton, SearchFormInput } from './SearchBar.styled';

const SearchBar = ({onSubmit}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = event => {
        setSearchQuery(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        const searchQuery = event.target.elements.searchName.value.trim().toLowerCase();
        if(searchQuery) {
            onSubmit(searchQuery);
            event.target.reset();
        }
        setSearchQuery('');
    }

    return (
        <Bar> 
            <SearchForm onSubmit={handleSubmit}>
                <SearchFormButton type="submit">
                    <Icon/>
                </SearchFormButton>
                <SearchFormInput
                    type="text"
                    autoComplete="on"
                    autoFocus
                    placeholder="Search movies"
                    name="searchName"
                    value={searchQuery}
                    onChange={handleChange}
                />
            </SearchForm>
        </Bar>
    )
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;