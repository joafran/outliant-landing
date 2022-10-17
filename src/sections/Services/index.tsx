import Card from '../../components/card'
import SectionHeader from '../../components/misc/SectionHeader'
import { services } from '../../constraints/links'
import './Services.css'

const Services = () => {
  return (
    <div className='border-t-[1px]'>
      <SectionHeader title='Our services' />
      <div className='services'>
        {services.map((item) => {
          return (
            <Card title={item.name} img={item.imageSrc!} />
          )
        })}
      </div>
    </div>
  )
}

export default Services