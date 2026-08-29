export type Aluno = {
  id: number
  nome: string
  rm: string
  avatar: string
}

export type CabecalhoProps = {
  titulo: string
  logo: string
}

export type ConteudoProps = {
  alunos: Aluno[]
}

export type CardsProps = {
  alunos: Aluno[]
}

export type RodapeProps = {
  texto: string
}
