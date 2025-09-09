
export default function SectionTitle(props: {title: string, subtitle: string}) {
  return (
    <div className='space-y-[12px]'>
        <p className='text-xs'>{props.title}</p>
        <p className='text-xl font-semibold capitalize'>{props.subtitle}</p>
      
    </div>
  )
}
