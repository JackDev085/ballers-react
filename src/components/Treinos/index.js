import { Link } from 'react-router-dom'
import styles from './Treinos.module.css'


function Treinos({rota}) {
  return (
    <section className={styles.treinos}>
      <h1>Treinos de arremesso</h1>
      <div className={styles.cardTreinos}>
        <img src="imgs/rotina.gif" alt="gif-rotinaTreino" />
        <div className={styles.info}>
          <h2>Treino matinal</h2>
          <div className={styles.tempoBtn}>
            <span>duração: 15min</span>
            <Link to={rota}>▶</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Treinos