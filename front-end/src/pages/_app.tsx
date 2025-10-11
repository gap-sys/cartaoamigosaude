import type { AppProps } from 'next/app'

import { Meta } from 'src/presentation/components'

import 'src/presentation/styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta
        title="Cartão Amigo Saúde - Seu parceiro na jornada de bem-estar"
        description="Tenha acesso a consultas, exames, telemedicina, medicamentos e muito mais com o Cartão Amigo Saúde. Planos acessíveis para você e sua família, sem carência e sem burocracia."
        keywords="cartão de saúde, telemedicina, desconto em consultas, desconto em exames, farmácias, plano de saúde acessível, saúde sem carência, assistência funeral, seguro de vida"
      />

      <Component {...pageProps} />
    </>
  )
}
