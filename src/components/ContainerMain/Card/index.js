import styles from './Card.module.css'
import { Link } from 'react-router-dom'

function Card({titulo, img, link}){
  return(

    <div className={styles.card}>
        <Link to={link}>Arremesso
        <img src={img} alt={titulo} />
        </Link>
 
        <p>{titulo}</p>
    </div>
  )
}
export default Card
