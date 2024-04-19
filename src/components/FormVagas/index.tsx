import { FormEvent, useState } from 'react'

import { FormStyles, InputStyles, BtnStyles } from './styles'

export type Props = {
  aoPesquisar: (termo: string) => void
  placeholder: string
  type: string
  e: string
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormStyles>
      <InputStyles
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnStyles type="submit">Pesquisar</BtnStyles>
    </FormStyles>
  )
}
export default FormVagas
