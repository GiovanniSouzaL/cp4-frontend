import styles from './Rodape.module.css'
import type { RodapeProps } from '../types'

function Rodape({ texto }: RodapeProps) {
  return (
    <footer className={styles.rodape}>
      <p>{texto}</p>
    </footer>
  )
}

export default Rodape
