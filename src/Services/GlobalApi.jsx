import axios from "axios"
const key = 'ff8d0c4636e74686a0380c9b19b5e0d3'
const axiosCreate = axios.create({
  baseURL: 'https://api.rawg.io/api',

});

const genreLIst = axiosCreate.get(`/genres?key=${key}`);
const gameLIst = axiosCreate.get(`/games?key=${key}`);
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)



 export default{
genreLIst,
gameLIst,
getGameListByGenreId
}