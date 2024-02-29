import styles from './Cards.module.css'
import Card from '../Card'
function Cards(){
  return(
    <div className={styles.cards}>
      <Card img='imgs/curry.jpg' titulo={'arremesso'} link='/treino'/>
      <Card img='imgs/kirie.jpeg' titulo={'condicionamento'} link="#"/>
      <Card img='imgs/kirie.jpeg' titulo={'drible'} link="#"/>
      <Card img='imgs/curry.jpg' titulo={'estudo'} link="#"/>
    </div>
 )
}
export default Cards