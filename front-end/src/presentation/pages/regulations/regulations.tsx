import Link from 'next/link'

import { Accordion, Hero, Meta, PolicysLayout } from 'src/presentation/components'
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

Regulations.getLayout = (page: React.ReactElement) => {
  return <PolicysLayout>{page}</PolicysLayout>
}

export default Regulations
