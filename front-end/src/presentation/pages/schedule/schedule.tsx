import { Button, Doubt, Hero, Meta, Spotlight } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'
import Image from 'next/image'

import S from './schedule.module.scss'

const Schedule = () => {
  return (
    <div>
      <Meta
        title="Agendar Consulta - Cartão Amigo Saúde"
        description="Agende sua consulta de forma rápida e prática com o Cartão Amigo Saúde. Atendimento via WhatsApp e suporte humanizado para você e sua família."
        keywords="agendar consulta, Cartão Amigo Saúde, atendimento médico, marcar exame, consultas por WhatsApp, agendamento online, saúde acessível"
      />

      <Hero imageUrl={IMAGE.MULHER_TRABALAHANDO_COM_CELULAR.src} text="Agende sua Consulta" />
      <div className={S.container}>
        <div className={S['text-section']}>
          <h1 className={S.title}>Como agendar a sua consulta?</h1>
          <p className={S.paragraph}>Agendar sua con sulta é muito fácil!</p>
          <p className={S.paragraph}>Tenha uma experiência rápida e prátifca</p>
          <p className={S.paragraph}>Realize através:</p>
          <div className={S.sectionBtn}>
            <a href="https://app.cartaoamigosaude.com.br">
              <Button typeStyle="btn2" width="150px" label="App" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5519989512404&text=Ol%C3%A1,%20tudo%20bem?%20Estava%20no%20site%20de%20voc%C3%AA%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida.">
              <Button typeStyle="btn2" width="150px" label="WhatsApp" />
            </a>
          </div>
        </div>
        <div className={S['image-section']}>
          <Image src={IMAGE.EMPRESARIO_COM_CELULAR.src} alt="Empresario com celular" className={S.img} fill sizes="(max-width: 980px) 100vw, 50vw" />
        </div>
      </div>
      <Spotlight
        title="Ainda não tem o App?"
        paragraph="Descubra o universo Amigo Saúde na palma da sua mão com nosso aplicativo exclusivo. Projetado para tornar seu acesso a cuidados de saúde mais conveniente e eficiente, nosso app está disponível para download tanto na App Store quanto na Play Store. Baixe agora e experimente uma nova dimensão em cuidados de saúde!"
        position="left"
        image={IMAGE.MULHER_FELIZ_COM_CELULAR.src}
        alt="Facilidade de uso"
      />
      <Doubt />
    </div>
  )
}

export default Schedule
