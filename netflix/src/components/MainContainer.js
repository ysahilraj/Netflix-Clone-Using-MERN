import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackgroud from './VideoBackgroud'
import { useSelector } from 'react-redux'
import store from '../redux/store'
import VideoBackground from './VideoBackgroud'

const MainContainer = () => {
  const movie = useSelector(store=>store.movie?.nowPlayingMovies)
  if(!movie)return;

  const {overview, id, title} = movie[4];
  
  return (
    <div>
        <VideoTitle title={title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
