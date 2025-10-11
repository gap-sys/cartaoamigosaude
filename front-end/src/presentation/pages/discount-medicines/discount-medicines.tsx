import Link from 'next/link'

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
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
        <Link
          href="https://api.whatsapp.com/send?phone=5519989512404&text=Ol%C3%A1,%20tudo%20bem?%20Estava%20no%20site%20de%20voc%C3%AAs%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida."
          target="_blank"
        >
          <img src={IMAGE.ICONE_WHATSAPP.src} alt="WhatsApp" style={{ width: '80px', height: '80px', borderRadius: '50%', boxShadow: '2px 2px 10px rgba(0,0,0,0.3)' }} />
        </Link>
      </div>
    </div>
  )
}

export default DiscountMedicines
