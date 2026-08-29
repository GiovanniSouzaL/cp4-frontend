import styles from './App.module.css'
import Cabecalho from './components/Cabecalho/Cabecalho'
import Conteudo from './components/Conteudo/Conteudo'
import Rodape from './components/Rodape/Rodape'
import type { Aluno } from './types'

import avatar1 from './assets/img/avatar1.png'
import avatar2 from './assets/img/avatar2.png'
import avatar3 from './assets/img/avatar3.png'
import avatar4 from './assets/img/avatar4.png'
import avatar5 from './assets/img/avatar5.png'
import avatar6 from './assets/img/avatar6.png'
import avatar7 from './assets/img/avatar7.png'
import avatar8 from './assets/img/avatar8.png'
import avatar9 from './assets/img/avatar9.png'
import avatar10 from './assets/img/avatar10.png'

function App() {
  const titulo: string = 'Checkpoint 4 - Turma 1TDSPI'
  const logo: string = '/logo.jpg'

  const alunos: Aluno[] = [
    { id: 1, nome: 'João Silva', rm: '511234', avatar: avatar1 },
    { id: 2, nome: 'Maria Souza', rm: '252345', avatar: avatar2 },
    { id: 3, nome: 'Pedro Alves', rm: '753456', avatar: avatar3 },
    { id: 4, nome: 'Ana Lima', rm: '954567', avatar: avatar4 },
    { id: 5, nome: 'Lucas Rocha', rm: '255678', avatar: avatar5 },
    { id: 6, nome: 'Julia Costa', rm: '556789', avatar: avatar6 },
    { id: 7, nome: 'Rafael Dias', rm: '857890', avatar: avatar7 },
    { id: 8, nome: 'Beatriz Melo', rm: '358901', avatar: avatar8 },
    { id: 9, nome: 'Gabriel Nunes', rm: '359012', avatar: avatar9 },
    { id: 10, nome: 'Camila Reis', rm: '250123', avatar: avatar10 },
  ]

  const textoRodape = 'FIAP - Checkpoint 4 - 2026 - Todos os direitos reservados'

  return (
    <div className={styles.container}>
      <Cabecalho titulo={titulo} logo={logo} />
      <Conteudo alunos={alunos} />
      <Rodape texto={textoRodape} />
    </div>
  )
}

export default App
