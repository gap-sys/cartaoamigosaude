import { Accordion, Hero, Meta, PolicysLayout } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import S from './regulations.module.scss'

const Regulations = () => {
  return (
    <div className={S.page}>
      <Meta
        title="Regulamentos - Cartão Amigo Saúde"
        description="Consulte os regulamentos oficiais do Cartão Amigo Saúde. Conheça as condições, regras de uso e direitos dos beneficiários conforme cada serviço oferecido."
        keywords="regulamentos Cartão Amigo Saúde, regras de uso, condições do cartão, direitos do cliente, termos e condições, contratos, benefícios"
      />
      <div className={S.heroSpacer}>
        <Hero imageUrl={IMAGE.REGULAMENTOS.src} text="Regulamentos" />
      </div>
      <div className={S.container}>
        <Accordion />
      </div>
    </div>
  )
}

Regulations.getLayout = (page: React.ReactElement) => {
  return <PolicysLayout>{page}</PolicysLayout>
}

export default Regulations
