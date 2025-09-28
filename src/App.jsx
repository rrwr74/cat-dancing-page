import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import useAnimation from './hooks/useAnimation'
import './App.css'
import './styles/global.css'
import './styles/animations.css'

function App() {
  const { isAnimating, toggleAnimation } = useAnimation()

  return (
    <div className="app">
      <header className="app-header">
        <h1>🐱 고양이 댄싱 페이지 🐱</h1>
        <p>고양이와 함께 춤춰보세요!</p>
      </header>

      <main className="app-main">
        <DancingCat isAnimating={isAnimating} />
        <AnimationControls
          isAnimating={isAnimating}
          onToggle={toggleAnimation}
        />
      </main>

      <footer className="app-footer">
        <p>💡 팁: 스페이스바를 눌러서도 애니메이션을 제어할 수 있어요!</p>
      </footer>
    </div>
  )
}

export default App
