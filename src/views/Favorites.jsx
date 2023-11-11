import { useContext } from 'react'
import { PhotoContext } from '../context/PhotoContext'
import { Card } from '../components/card'

const Favorites = () => {
  const { photos } = useContext(PhotoContext)
  return (
    <div className='App'>
      <h1>Fotos favoritas</h1>
      <div className='gallery'>
        {photos.map(photo => {
          return photo.liked ? <Card key={photo.id} photo={photo} /> : null
        })}
      </div>
    </div>
  )
}
export default Favorites
