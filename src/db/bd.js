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
              id_video:'12312asd',
              nome: 'flexão',
              repeticoes: '50rep',
            },
            {
              id_video:'12312asd',
              nome: 'agachamento',
              repeticoes: '50rep'
            },
            {
              id_video:'12312asd',
              nome: 'abdominal',
              repeticoes: '50rep'
            },
            {
              id_video:'12312asd',
              nome: 'prancha',
              repeticoes: '2x1min'
            },
          ]
        }
      }
    ]
  }
]

const treino = PROGRAMAS[0].treinos[0].treino

console.log(treino.exercicios)
