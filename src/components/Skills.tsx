import { Progress } from 'antd'
import SectionTitle from './SectionTitle'

export default function Skills() {
    const items = [
        { name: 'Software Development', rate: 80, color: '#1e90ff' },
         { name: 'Digital Forensics & Incident Response ', rate: 95, color: '#f4b400' },
          { name: 'IT Consulting Strategies', rate: 80, color: '#9b59b6' },
           { name: ' System Architecture & Digital Transformation ', rate: 70, color: '#20b2aa' },
            { name: 'Network Security', rate: 85, color: '#4169e1' },
             { name: 'Ethical Tech Advocacy', rate: 90, color: '#ff8553' }
    ]
    return (
        <div className='space-y-[32px] text-left px-[80px]'>
            <SectionTitle title={'My Specialty'} subtitle={'My SKILLS'} />
            <p className='text-sm font-normal'>My career is built on three pillars: technical excellence,
                innovative problem-solving, and community development. I believe technology must not only
                organisations but also transform lives by creating opportunities for the next generation.</p>

            <div className='grid grid-cols-2 gap-x-[16px] mt-[50px]'>
                {items.map((d) => (
                    <div>
                        <section className='flex justify-between leading-[-3]'>
                            <h3 className='text-xs font-semibold'>{d.name}</h3>
                            <span className={`font-semibold text-xs text-[${d.color}] `}>{d.rate}</span>
                        </section>
                         <Progress size={'small'} strokeColor={d.color} showInfo={false} percent={d.rate} />
                    </div>
                ))}
            </div>

        </div>
    )
}
