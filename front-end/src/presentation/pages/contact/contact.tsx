import { ContactForm, Cta, Hero, Meta, Strip, Navbar, Sac, Footer } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'
import Link from 'next/link'

import S from './contact.module.scss'

const Contact = () => {
  return (
    <div>
      <Strip />
      <Navbar />
      <main>
      <Meta
        title="Contato - Cartão Amigo Saúde"
        description="Entre em contato com a equipe do Cartão Amigo Saúde. Tire dúvidas, envie sugestões ou solicite suporte. Estamos prontos para te atender!"
        keywords="contato Cartão Amigo Saúde, fale conosco, suporte saúde, atendimento ao cliente, dúvidas, sugestões"
      />

      <Hero imageUrl={IMAGE.FAMILIA_REUNIDA.src} text="Fale conosco" />
      <ContactForm />
      <div className={S.container}>
        <Cta />
      </div>
      </main>
      <Sac />
      <Footer />
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

export default Contact
