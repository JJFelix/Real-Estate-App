import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            // 'X-RapidAPI-Key': '277b85651dmsh5b3f4e9d91e90f7p1af6c4jsnc4d8c95af5d7',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });
    return data;
}