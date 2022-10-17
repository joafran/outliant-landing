import './SectionHeader.css'

interface Props {
    title: string;
}

const SectionHeader: React.FC<Props> = ({title}) => {
  return (
    <>
        <div className='section-header'>
            <div className='middle-line'></div>
            <h2 className='text-center'>{title}</h2>
            <div className='middle-line'></div>
        </div>
    </>
  )
}

export default SectionHeader