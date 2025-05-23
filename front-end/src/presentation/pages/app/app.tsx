import { Hero, Meta, Spotlight } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import S from './app.module.scss'

const App = () => {
  return (
    <div>
      <Meta
        title="Baixe o App - Cartão Amigo Saúde"
        description="Com o app do Cartão Amigo Saúde, você agenda consultas, recarrega seu cartão e acessa descontos com facilidade. Disponível para Android e iOS."
        keywords="app Cartão Amigo Saúde, baixar app saúde, consultas online, recarga de cartão, descontos em farmácias"
      />

      <Hero imageUrl={IMAGE.MULHER_CACHEADA_CELULAR.src} text="Saúde na palma da mão" />
      <Spotlight
        title="Aplicativo cartão Amigo Saúde"
        paragraph="Descubra o universo Amigo Saúde na palma da sua mão com nosso aplicativo exclusivo. Projetado para tornar seu acesso a cuidados de saúde mais conveniente e eficiente, nosso app está disponível para download tanto na App Store quanto na Play Store. Baixe agora e experimente uma nova dimensão em cuidados de saúde!"
        position="left"
        image={IMAGE.MULHER_COM_CELULAR.src}
        alt="Facilidade de uso"
        titleSize="32px"
      />
      <div className={S.advantagesContainer}>
        <div className={S.textSection}>
          <h2 className={S.title}>Vantagens</h2>
          <div className={S.advantageItem}>
            <h3 className={S.subtitle}>Agendamento Facilitado</h3>
            <p className={S.paragraph}>Marque suas consultas com apenas alguns toques, de forma rápida e prática.</p>
          </div>
          <div className={S.advantageItem}>
            <h3 className={S.subtitle}>Recarga Rápida do Cartão</h3>
            <p className={S.paragraph}>
              Adicione créditos ao seu Cartão Amigo Saúde diretamente pelo aplicativo, sem complicações.
            </p>
          </div>
          <div className={S.advantageItem}>
            <h3 className={S.subtitle}>Descontos em Farmácias</h3>
            <p className={S.paragraph}>
              Aproveite descontos exclusivos usando o cartão virtual e localize farmácias credenciadas perto de você.
            </p>
          </div>
        </div>
        <div className={S.imageSection}>
          <img src={IMAGE.CELULAR_APP_CARTAO.src} alt="Aplicativo Cartão Amigo Saúde" />
        </div>
      </div>
      <Spotlight
        title="Aplicativo cartão Amigo Saúde"
        paragraph="Descubra o universo Amigo Saúde na palma da sua mão com nosso aplicativo exclusivo. Projetado para tornar seu acesso a cuidados de saúde mais conveniente e eficiente, nosso app está disponível para download tanto na App Store quanto na Play Store. Baixe agora e experimente uma nova dimensão em cuidados de saúde!"
        position="left"
        image={IMAGE.HOMEM_COM_CELULAR.src}
        alt="Facilidade de uso"
        titleSize="32px"
      />
    </div>
  )
}

export default App
