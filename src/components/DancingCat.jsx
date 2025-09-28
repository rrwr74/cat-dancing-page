import { useState } from 'react'
import catSvg from '../assets/images/cat.svg'

function DancingCat({ isAnimating }) {
  return (
    <div className="dancing-cat-container">
      <div className={`dancing-cat ${isAnimating ? 'dancing' : ''}`}>
        <img
          src={catSvg}
          alt="Dancing Cat"
          className="cat-image"
        />
      </div>
    </div>
  )
}

export default DancingCat