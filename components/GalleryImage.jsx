import { useState } from 'react'

// Gallary image component.
export default function GalleryImage({ image }) {
  const [bigImage, setBigImage] = useState(false)

  return (
    <>
      <img src={image} onClick={() => setBigImage(true)} />
      { bigImage &&
        <div className="big-image" onClick={(e) => setBigImage(false)}>
          <img src={image} onClick={(e) => e.stopPropagation()} />
        </div>
      }
    </>
  )
}