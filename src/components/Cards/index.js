import Arremesso from '../../Routes/arremesso/index' 

import styles from './Cards.module.css'
import Card from '../Card'
function Cards(){
  return(
    <div className={styles.cards}>
      <Card img='imgs/curry140-200.gif' titulo={'Arremesso'} link='/arremesso'/>
      <Card img='imgs/kirie140-200.gif' titulo={'Drible'} link="#"/>
      <Card img='imgs/shaq140-200.gif' titulo={'Enterrada'} link="#"/>
      <Card img='imgs/estudo.gif' titulo={'Estudo'} link="#"/>
    </div>
 )
}
export default Cards