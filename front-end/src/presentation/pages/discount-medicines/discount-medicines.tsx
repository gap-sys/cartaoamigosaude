import { Hero, Meta } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import S from './discount-medicines.module.scss'

const DiscountMedicines = () => {
  return (
    <div>
      <Meta
        title="Desconto em Medicamentos - Cartão Amigo Saúde"
        description="Tenha acesso a descontos exclusivos em medicamentos em farmácias parceiras por todo o Brasil com o Cartão Amigo Saúde. Economia garantida para você e sua família."
        keywords="desconto em medicamentos, farmácia com desconto, epharma, Cartão Amigo Saúde, medicamentos mais baratos, farmácias conveniadas, economia em remédios"
      />
      <Hero imageUrl={IMAGE.MEDICAMENTOS.src} text="Desconto em Medicamentos" />
      <div className={S.container}>
        <a href="https://pesquisamedicamento.epharma.com.br/?benefitId=244926">
          <img src={IMAGE.LAMINA.src} />
        </a>
      </div>
    </div>
  )
}

export default DiscountMedicines
