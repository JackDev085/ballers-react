import Cards from './Cards'
function Container() {
  return (
    <section className='container'>
      <h1>O que é o Ballers?</h1>
      <p>Ballers nada mais é que um site 
        criado por um basqueteiro para basqueteiros.
        O site ainda está em construção, entranto o
        primeiro treino de arremesso, está liberado.
        <br />
        <br />
        Logo, você poderá ver treinos de arremesso,
        condicionamento físico, controle de bola e,
        além disso, terá acesso a conteúdos para estudar. 
      </p>
      <h2>
        Treinos
      </h2>
      <Cards />
    </section>

  )
}
export default Container