import React, { useState } from 'react';
import Modal from 'react-modal';
import PROGRAMAS from '../../db/bd';
import styles from './Exercicios.module.css'

const customStyles = {
  content: {
    width: '80%',
    height: '80%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const treino = PROGRAMAS[0].treinos[0].treino;

  const handleClick = (id) => {
    setVideoId(id);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section>
      <h1>{treino.descricao}</h1>
    <div className={styles.exercicios}>
      {treino.exercicios.map((exercicio, index) => (
        <div key={index} className={styles.cardExercicios}>
          <h2>{exercicio.nome}</h2>
          <p>{exercicio.repeticoes}</p>
          <button onClick={() => handleClick(exercicio.id_video)}>Ver vídeo</button>
        </div>
      ))}
      <Modal className={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Vídeo Modal"
      >
        <button onClick={closeModal}>Fechar</button>
        {videoId && <div style={{position: 'relative', height: 0, paddingBottom: '56.25%'}}>
          <iframe style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>}
      </Modal>
      </div>
    </section>
  );
}

export default App;