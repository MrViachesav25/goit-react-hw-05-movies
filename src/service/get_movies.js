import axios from 'axios';
import { REFS } from './refs';

function createOptions(addURL, params) {
    return {
        method: 'GET',
        url:`${REFS.API_URL}/${addURL}`,
        params,
        headers: {
            accept: 'application/json',
            Authorization: `${REFS.API_BEARER}`
        },
    };
};

export async function getAxios(options) {
    const response = await axios.request(options);
    return response.data;
};


export async function getTrend(page = 1, language = 'en-US') {
    const options = createOptions(`/trending/all/day`, {language, page});
    return getAxios(options);
};

export async function getSearchMovie({
    query = 'qqq',
    language = 'en-US',
    include_adult = false,
    primary_release_year = '',
    page = 1,
    region = '',
    year = '',
  }) {
    const options = createOptions(`/search/movie`, {
        language, 
        include_adult, 
        query, 
        primary_release_year,
        page, 
        region, 
        year});
    return getAxios(options);
};

export async function getMovieDetails(movieId, language = 'en-US') {
    const options = createOptions(`/movie/${movieId}`, {language});
    return getAxios(options);
};

export async function getMovieCredits(movieId, language = 'en-US') {
    const options = createOptions(`/movie/${movieId}/credits`, {language});
    return getAxios(options);
};
export async function getMovieReviews(movieId, language ='en-US', page = 1) {
    const options = createOptions(`/movie/${movieId}/reviews`, {language, page});
    return getAxios(options);
};



  
 