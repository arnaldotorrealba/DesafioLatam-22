import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const PhotoContext = createContext()

const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const apiUrl = '/photos.json'
    axios
      .get(apiUrl)
      .then(response => {
        setPhotos(response.data.photos)
      })
      .catch(err => {
        console.log('Error al obtener datos de la API:', err)
      })
  }, [])

  const toggleLike = id => {
    const photosArray = [...photos]
    const photo = photosArray.find(photo => photo.id === id)
    photo.liked = !photo.liked
    setPhotos(photosArray)
  }

  return (
    <PhotoContext.Provider value={{ photos, toggleLike }}>
      {children}
    </PhotoContext.Provider>
  )
}
export default PhotoProvider
