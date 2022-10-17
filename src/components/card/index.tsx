import './Card.css'

interface CardProps {
  title: string;
  img: string;
}

const Card: React.FC<CardProps> = ({title, img}) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <img src={img} alt="icon" />
    </div>
  )
}

export default Card;