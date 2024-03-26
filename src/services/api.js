import axios from 'axios'
import { API_URL } from '../constants/constant';

export const getRecipes = async (searchQuery) => {
    try{
     let response = await  axios.get(`${API_URL}/search?q=${searchQuery}`)
    return response.data;
    }catch(error){
   console.log('Error while calling api',error.message);
return error.response    
}}

export const getRecipe = async (searchQuery) => {
    try{
     let response = await  axios.get(`${API_URL}/get?rId=${searchQuery}`)
    return response.data;
    }catch(error){
   console.log('Error while calling api',error.message);
return error.response    
}}