import { Accordion, Hero, Meta } from 'src/presentation/components'

import { IMAGE } from 'src/presentation/assets'

import S from './regulations.module.scss'

const Regulations = () => {
  return (
    <div>
      <Meta
        title="Regulamentos - Cartão Amigo Saúde"
        description="Consulte os regulamentos oficiais do Cartão Amigo Saúde. Conheça as condições, regras de uso e direitos dos beneficiários conforme cada serviço oferecido."
        keywords="regulamentos Cartão Amigo Saúde, regras de uso, condições do cartão, direitos do cliente, termos e condições, contratos, benefícios"
      />
      <Hero imageUrl={IMAGE.REGULAMENTOS.src} text="Regulamentos" />
      <div className={S.container}>
        <Accordion />
      </div>
    </div>
  )
}

export default Regulations
