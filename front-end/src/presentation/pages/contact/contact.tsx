import { ContactForm, Cta, Hero, Meta } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import S from './contact.module.scss'

const Contact = () => {
  return (
    <div>
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
    </div>
  )
}

export default Contact
