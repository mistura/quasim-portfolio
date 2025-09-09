import { ReactTyped } from 'react-typed'

export default function Home() {
  return (
    <div className='gradient-bg bg-fixed flex items-center px-[80px] h-[100vh] w-full'>
      <section className='text-left justify-self-end space-y-5'>
        <h2 className='headerText'>
            Hi, I'm Ganiyu Quasim 
           
            
        </h2>
      <p className='font-semibold text-white self-end mr-0 text-md text-shadow-md'>
        {/* CEO /Founder Quatos Tech  */}
         <ReactTyped
        strings={[
          " CEO /Founder Quatos Tech ",
          "IT Consultant",
          "Cisco System Professional ",
          "Ethical Tech Advocate "
        ]}
        typeSpeed={50}
        backSpeed={30}
        loop
      />
        </p>
      <section className='flex space-x-[14px] '>

            <button className='customBtn'>Download CV</button>
             <button className='customBtn-outlined'>View Work</button>

      </section>
      </section>
      
      
    </div>
  )
}
