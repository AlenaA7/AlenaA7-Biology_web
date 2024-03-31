import './style/index.css'
  
import Menu from './Menu'
import Start from './Start'
import List from './List'
import Modeled from './Modeled'


function App() {
    return (
    <>
    <div className='App'>
      <Menu /> 
      <div className='content'>
        <Start />
        <div className='empty' ></div>
        <List />
        <div className='empty' ></div>

        <Modeled />
      </div>
    </div>
    </>
  )
}

export default App 