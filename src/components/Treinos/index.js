import React, { useState } from 'react';
import Modal from 'react-modal';

const PROGRAMAS = [
  {
    id: 1,
    nomeTreino: 'arremessos',
    treinos: [
      {
        id: 1,
        nome: 'rotina',
        treino: {
          id: '1NB1Jk2Lo',
          descricao: 'treino para melhorar o cardio',
          exercicios: [
            {
              id_video:'ZjwH87rvuvE',
              nome: 'flexão',
              repeticoes: '50rep',
            },
            {
              id_video:'fsbq7n4DmX8',
              nome: 'agachamento',
              repeticoes: '50rep'
            },
            {
              id_video:'fsbq7n4DmX8',
              nome: 'abdominal',
              repeticoes: '50rep'
            },
            {
              id_video:'-QHOHxJVeBI',
              nome: 'prancha',
              repeticoes: '2x1min'
            },
          ]
        }
      }
    ]
  }
]



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
    <div>
      <h1>{treino.descricao}</h1>
      {treino.exercicios.map((exercicio, index) => (
        <div key={index}>
          <h2>{exercicio.nome}</h2>
          <p>{exercicio.repeticoes}</p>
          <button onClick={() => handleClick(exercicio.id_video)}>Ver vídeo</button>
        </div>
      ))}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Vídeo Modal"
      >
        <button onClick={closeModal}>Fechar</button>
        {videoId && <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
      </Modal>
    </div>
  );
}

export default App;