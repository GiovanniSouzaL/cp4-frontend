import styles from './Cards.module.css'
import type { CardsProps } from '../../types'

function Cards({ alunos }: CardsProps) {
  return (
    <div className={styles.grid}>
      {alunos.map((aluno) => (
        <div key={aluno.id} className={styles.card}>
          <img
            src={aluno.avatar}
            alt={`Foto de ${aluno.nome}`}
            className={styles.avatar}
          />
          <p className={styles.nome}>{aluno.nome}</p>
          <p className={styles.rm}>RM: {aluno.rm}</p>
        </div>
      ))}
    </div>
  )
}

export default Cards
