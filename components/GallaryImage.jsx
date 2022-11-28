import { useState } from 'react'

// Gallary image component.
export default function GallaryImage({ image }) {
  const [bigImage, setBigImage] = useState(false)

  return (
    <>
      <img src={image} onClick={() => setBigImage(true)} />
      { bigImage &&
        <div className="big-image" onClick={() => setBigImage(false)}>
          <img src={image} />
        </div>
      }
    </>
  )
}