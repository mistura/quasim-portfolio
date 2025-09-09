import './App.css'
import MainView from './components/MainView'
import SideMenu from './components/SideMenu'

export default function App() {

  return (

      <section className='overflow-hidden w-[100vw] h-[100vh] flex'>
      <div className='w-[30%] h-[100vh] overflow-y-auto  bg-[#F2F3F7] shadow-lg '>
       <SideMenu />
      </div>
      <div className='w-[70%] h-full bg-white shadow-lg overflow-x-auto'>
       <MainView/>
      </div>
    </section>
    
  )
}

