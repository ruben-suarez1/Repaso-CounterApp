import FirstApp from "./components/FirstApp/FirstApp";
import CounterApp from "./components/CounterApp/CounterApp"
import './App.css'

function App() {
  return (
    <>
      <h1 className="title">Repaso React.js</h1>
       < FirstApp titles = "Hola mundo" subTitle = { 3 } />
       < CounterApp value = { 0 }/>
    </>
  )
}

export default App;