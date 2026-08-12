import MainContent from './MainContent/MainContent'
import SideBar from  "./Sidebar/Sidebar"

function App() {

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <SideBar />
        <main className="col-9 offset-3 col-lg-10 offset-lg-2 min-vh-100">
          <MainContent />
        </main>
      </div>
    </div>
  )
}

export default App
