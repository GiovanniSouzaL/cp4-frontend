import { useEffect } from 'react'
import styles from './Cabecalho.module.css'
import type { CabecalhoProps } from '../../types'

function Cabecalho({ titulo, logo }: CabecalhoProps) {
  useEffect(() => {
    document.title = titulo
  }, [titulo])

  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo da FIAP" className={styles.logo} />
      <h1>{titulo}</h1>
    </header>
  )
}

export default Cabecalho
