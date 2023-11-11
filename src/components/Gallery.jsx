import { useContext } from 'react'
import { PhotoContext } from '../context/PhotoContext'
import { Card } from './card'

const Gallery = () => {
  const { photos } = useContext(PhotoContext)
  return (
    <div className='gallery'>
      {photos.map(photo => {
        return <Card key={photo.id} photo={photo} />
      })}
    </div>
  )
}
export default Gallery
