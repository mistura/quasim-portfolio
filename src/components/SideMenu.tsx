import ProfileAvatar from './ProfileAvatar'

export default function SideMenu() {
  const menu = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Services', link: '#services' },
    { name: 'Skills', link: '#skills' },
    { name: 'Education', link: '#education' },
    { name: 'Experience', link: '#experience' },
    { name: 'Blog', link: '#blog' },
    { name: 'Contact', link: '#contact' },
  ]
  return (
    <div className='py-[7%] px-[20px] space-y-[12px] h-full '>
      <section className='h-[190px] space-y-[12px] '>
        <ProfileAvatar />
        <section className=''>
          <h2 className='text-xl font-semibold'>Quasim Ganiyu</h2>
          <p className='text-xs'>IT Consultant</p>
        </section>
      </section>


      <nav className='h-[calc(100vh-280px)]'>
        <ul>
          {menu.map((list) => (
            <li key={list.name}>
              <a href={list.link} className='block text-sm py-2 menu hover:text-decoration-line'>{list.name}</a>
            </li>
          ))}
        </ul>
      </nav>


      <section className='h-[30px] text-[10px] text-center w-full '>
        <p>© Copyright {new Date().getFullYear()} All rights reserved | Quasim Ganiyu</p>
      </section>

    </div>
  )
}
