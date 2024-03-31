import './style/index.css'
  
import Menu from './Menu'
import Start from './Start'
import List from './List'


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
      </div>
    </div>
    </>
  )
}

export default App 