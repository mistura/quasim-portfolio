import SectionTitle from './SectionTitle'

export default function Services() {
    const items = [
        { name: 'Cyber Security', content: 'nmwndnewm kjdskjwqed wqkjdekjew qwkjdkj', icon: <img src="./services2.svg" /> },
        { name: 'Cloud Security', content: 'nmwndnewm kjdskjwqed wqkjdekjew qwkjdkj', icon: <img src="./services2.svg" /> },
        { name: 'Cyber Security', content: 'nmwndnewm kjdskjwqed wqkjdekjew qwkjdkj', icon: <img src="./services2.svg" /> },
        { name: 'Cloud Security', content: 'nmwndnewm kjdskjwqed wqkjdekjew qwkjdkj', icon: <img src="./services2.svg" /> },
    ]
    return (
        <div className='space-y-[16px] text-left px-[80px] bg-white '>
            <SectionTitle title='What i Do' subtitle='Here are some of my experiences' />
            <section className='grid mt-[40px] grid-cols-2 gap-x-10 gap-y-16'>
                {items.map((item, index) => (
                <div key={index} className='shadow-md py-[16px] px-[32px] items-start space-x-4'>
                   <div className='w-[60px] h-[60px]'> {item.icon}</div>
                    <div className='mt-[15px] space-y-2'>
                        <h3 className='text-lg font-semibold'>{item.name}</h3>
                        <p className='text-sm text-gray-600'>{item.content}</p>
                    </div>
                </div>
            ))}
            </section>
        </div>
    )
}
