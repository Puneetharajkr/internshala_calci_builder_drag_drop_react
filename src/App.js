// import {Component} from 'react'
// import Clock from './components/Clock'

// import './App.css'

// class App extends Component {
//   render() {
//     return (
//       <div className="app-container">
//         <button type="button" className="toggle-button">
//           Hide Clock
//         </button>
//         <Clock />
//       </div>
//     )
//   }
// }

// export default App

import Calculator from './components/Calculator'
import './styles.css'

function App() {
  return (
    <div className="app">
      <h1>Calculator Builder</h1>
      <Calculator />
    </div>
  )
}

export default App
