import styles from "./Treinos.module.css"
// import PROGRAMAS from "../../db/bd"
import { Link } from 'react-router-dom';
function Treinos() {

  return (

    <section className={styles.treinos}>
      <h1>Treinos de condicionamento</h1>
      <div className={styles.cardTreinamento}>
        <div className={styles.titulo}>
          rotina de condicionamento

          <div className={styles.tempoPlay}>
            <p>30min</p>
            <Link to="/exercicios">
        <button>▶</button>
      </Link>
          </div>
        </div>
      </div><div className={styles.cardTreinamento}>
        <div className={styles.titulo}>
          rotina de condicionamento

          <div className={styles.tempoPlay}>
            <p>30min</p>
            <button>▶</button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Treinos