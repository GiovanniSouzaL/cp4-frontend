import styles from './Conteudo.module.css'
import Cards from '../Cards/Cards'
import type { ConteudoProps } from '../types'

function Conteudo({ alunos }: ConteudoProps) {
  return (
    <main className={styles.conteudo}>
      <h2>Nossa turma</h2>
      <Cards alunos={alunos} />
    </main>
  )
}

export default Conteudo
