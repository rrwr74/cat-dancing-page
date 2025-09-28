import { useState, useEffect, useCallback } from 'react'

function useAnimation() {
  const [isAnimating, setIsAnimating] = useState(false)

  const toggleAnimation = useCallback(() => {
    setIsAnimating(prev => !prev)
  }, [])

  // 키보드 접근성: 스페이스바로 애니메이션 토글
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space' && event.target.tagName !== 'BUTTON') {
        event.preventDefault()
        toggleAnimation()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [toggleAnimation])

  return {
    isAnimating,
    toggleAnimation
  }
}

export default useAnimation