import './App.css'
import Logo from "./components/Logo.tsx";
import Notes from "./components/Notes.tsx";

function App() {
  return (
    <>
      <header className="app-header">
        <div className="container">
          <Logo/>
        </div>
      </header>
      <main className="container app-main">
        <Notes/>
      </main>
    </>
  )
}

export default App
