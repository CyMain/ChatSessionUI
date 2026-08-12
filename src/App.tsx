import './App.css'
import MainContent from './MainContent/MainContent'
import SideBar from  "./Sidebar/Sidebar"

function App() {

  return (
    <>
    <div className="d-flex flex-row">
        <SideBar/>
        <MainContent/>
    </div>
    </>
  )
}

export default App
