function AnimationControls({ isAnimating, onToggle }) {
  return (
    <div className="animation-controls">
      <button
        className={`control-button ${isAnimating ? 'stop' : 'start'}`}
        onClick={onToggle}
        aria-label={isAnimating ? '고양이 춤 멈추기' : '고양이 춤 시작하기'}
        aria-pressed={isAnimating}
      >
        {isAnimating ? '⏸️ 멈추기' : '▶️ 춤추기'}
      </button>
      <p className="control-instruction" aria-live="polite">
        {isAnimating
          ? '고양이가 신나게 춤추고 있어요!'
          : '버튼을 클릭해서 고양이와 함께 춤춰보세요!'
        }
      </p>
    </div>
  )
}

export default AnimationControls