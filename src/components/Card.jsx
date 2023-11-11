import { useContext } from 'react'
import { PhotoContext } from '../context/PhotoContext'

import IconHeart from './IconHeart'

export const Card = ({ photo }) => {
  const { toggleLike } = useContext(PhotoContext)

  return (
    <div className='card' style={{ width: '12rem', height: '12rem' }}>
      <img
        style={{ width: '12rem', height: '12rem' }}
        src={photo.src.small}
        alt={photo.alt}
      />
      <div className='photographer-name'>By {photo.photographer}</div>
      <div className='heart-icon' onClick={() => toggleLike(photo.id)}>
        <IconHeart filled={photo.liked} />
      </div>
    </div>
  )
}
