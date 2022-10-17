import BtnUnderline from '../../components/animated/BtnUnderline';
import './LearnMore.css';
import point from '../../assets/point.svg';

interface LearnMoreProps {
    content: string;
    image: string;
    contentAlign: "left" | "right";
}

const LearnMore: React.FC<LearnMoreProps> = ({content, contentAlign, image}): JSX.Element => {
  return (
    <div className={`learnmore-container flex ${contentAlign === 'left' ? '' : 'flex-row-reverse'}`}>
      <div className="learnmore-content">
        <div className='flex items-start'>
          <img src={point} className='w-12 lg:w-auto' alt="point" /> 
          <div className='ml-2 lg:px-8'>
            <p>{content}</p>
            <div className='inline-block'>
              <button className="learnmore-btn">
                Learn More
              </button>
              <BtnUnderline classes='mt-4 h-1 bg-white' />
            </div>
          </div>
        </div>
      </div>
      <img className='learnmore-img' src={image} alt="code" />
    </div>
  )
}

export default LearnMore