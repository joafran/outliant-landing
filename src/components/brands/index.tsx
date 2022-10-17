import brands from '../../assets/brands.svg'
import SectionHeader from '../misc/SectionHeader';
import './Brands.css'

const Brands = (): JSX.Element => {
  return (
    <section className='brands'>
      <SectionHeader title='They trust us' />
      <div className='brands-slider'>
        <div className='slider'>
          <img src={brands} />
        </div>
      </div>
    </section>
  )
}

export default Brands;