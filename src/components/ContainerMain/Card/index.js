import { Link } from 'react-router-dom'
function Card({ titulo, img, link }) {
  return (
    <div class="card" style={{width:'12rem'}}>
      <img src={img} class="card-img-top" alt={titulo}/>
      <div class="card-body">
        <h5 class="card-title">{titulo}</h5>
        <p class="card-text"></p>
        <Link to={link} className="btn btn-primary">   
        Ver Treinos
        </Link>
      </div>
   </div>
  )
}
export default Card
