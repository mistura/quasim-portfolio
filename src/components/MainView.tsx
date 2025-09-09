import About from './About'
import Contact from './Contact'
import Education from './Education'
import Experience from './Experience'
import Home from './Home'
import Skills from './Skills'

export default function MainView() {

  const items = [
    { id: 'home', component: <Home /> },
    { id: 'about', component: <About /> },
    // { id: 'services', component: <Services /> },
    { id: 'skills', component: <Skills /> },
    { id: 'education', component: <Education /> },
    { id: 'experience', component: <Experience /> },
    { id: 'contact', component: <Contact /> },
  ]

  return (
    <div className='space-y-[70px] pb-[100px]'>
      {items.map(item => (
        <div key={item.id} id={item.id}>
          {item.component}
        </div>
      ))}
      
    </div>
  )
}
