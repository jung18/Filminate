import axios from 'axios'
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useAccountStore } from '@/stores/account.js'

export const useMovieStore = defineStore('movie', () => {
  const accountStore=useAccountStore()
  const movies=ref([])
  const movieDetail=ref([])
  const API_URL='http://127.0.0.1:8000'

  const getMovies=function(){
    axios({
      headers: {
        Authorization: `Token ${accountStore.token}`,
      },
      method: 'get',
      url: `${API_URL}/api/movies/`,
    })
    .then((response)=>{
      movies.value=response.data
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  
  const searchMovies=function(payload){
    const searchStr=payload.searchStr
    axios({
      headers: {
        Authorization: `Token ${accountStore.token}`,
      },
      method: 'get',
      url: `${API_URL}/api/movies/search/`,
      params: {
        searchStr: searchStr
      }
    })
    .then((response)=>{
      movies.value=response.data
    })
    .catch((error)=>{
      console.log(error)
    })
  }


  const getMovieDetail=function(movieId){
    // const movieId=movieId
    axios({
      headers: {
        Authorization: `Token ${accountStore.token}`,
      },
      method: 'get',
      url: `${API_URL}/api/movies/${movieId}`,
      // params: {
      //   movieId: movieId
      // }
    })
    .then((response)=>{
      movieDetail.value=response.data
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return { movies, API_URL, getMovies, searchMovies, movieDetail, getMovieDetail }
})
