import { Meta, Hero } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'
import { IconInfoCircle, IconCircleCheck, IconTicket, IconDeviceMobile, IconMessageCircle } from '@tabler/icons-react'

import S from './club.module.scss'

const Club = () => {
  return (
    <div className={S.page}>
      <main>
        <Meta
          title="Clube de Benefícios - Cartão Amigo Saúde"
          description="Conheça o Clube de Benefícios do Cartão Amigo Saúde. Descontos exclusivos em diversos estabelecimentos, produtos e serviços para você e sua família."
          keywords="clube de benefícios, descontos exclusivos, Cartão Amigo Saúde, vantagens, promoções, estabelecimentos parceiros"
        />
        <div className={S.heroSpacer}>
          <Hero imageUrl={IMAGE.CLUBE_CERTO.src} text="Clube de Benefícios" fullWidth />
        </div>
        <div className={S.container}>
          {/* Card 1 - Apresentação e Benefícios */}
          <div className={S.card}>
            <p>
              Pensando sempre em ampliar as vantagens para nossos clientes, o Cartão Amigo Saúde firmou uma parceria com a
              Clube Certo, uma das maiores plataformas de benefícios do Brasil.
            </p>
            <p>
              Agora, quem é cliente do Amigo Saúde tem acesso a um clube exclusivo de vantagens, com descontos reais em
              grandes redes do varejo, farmácias, educação, lazer, viagens, alimentação e muito mais. São mais de 30 mil
              estabelecimentos conveniados em todo o país!
            </p>
            <p>
              Com a Clube Certo, você economiza nas suas compras do dia a dia, cuida da sua saúde e ainda garante
              benefícios para toda a família.
            </p>

            <div className={S.titleRow}>
              <IconTicket className={S.titleIcon} />
              <h2>O que você ganha com o Clube Certo?</h2>
            </div>
            <ul className={S.list}>
              <li className={S.listItem}><IconCircleCheck className={S.iconCheck} /><span>Descontos reais em mais de 30 mil parceiros em todo o Brasil</span></li>
              <li className={S.listItem}><IconCircleCheck className={S.iconCheck} /><span>Vantagens nas principais redes de farmácia: Droga Raia, Drogasil, Pague Menos e mais</span></li>
              <li className={S.listItem}><IconCircleCheck className={S.iconCheck} /><span>Economia nas maiores lojas do país: Americanas, Casas Bahia, Netshoes, Centauro e muitas outras</span></li>
              <li className={S.listItem}><IconCircleCheck className={S.iconCheck} /><span>Benefícios em academias, faculdades, clínicas, cursos, viagens, cinemas e restaurantes</span></li>
            </ul>

            <p>
              E o melhor: você acessa tudo isso com apenas alguns cliques, dentro do app do Cartão Amigo Saúde. Tudo isso
              na palma da sua mão, pelo celular, com acesso rápido, simples e direto.
            </p>
          </div>

          {/* Card 2 - Regulamento e Instruções */}
          <div className={S.card}>
            <div className={S.titleRow}>
              <IconInfoCircle className={S.titleIcon} />
              <h2>Como funciona – Regulamento do benefício</h2>
            </div>
            <ul className={S.list}>
              <li className={S.listItem}><IconCircleCheck className={S.iconCheck} /><span>O benefício do Clube Certo é gratuito e exclusivo para clientes ativos do Cartão Amigo Saúde.</span></li>
              <li className={S.listItem}><IconCircleCheck className={S.iconCheck} /><span>O acesso é feito diretamente pelo aplicativo do Cartão Amigo Saúde, de forma prática e segura.</span></li>
              <li className={S.listItem}><IconCircleCheck className={S.iconCheck} /><span>Basta fazer login no app e tocar em “Clube de descontos” para entrar na plataforma da Clube Certo.</span></li>
              <li className={S.listItem}><IconCircleCheck className={S.iconCheck} /><span>O CPF do titular é usado automaticamente para liberar os descontos e validar o acesso.</span></li>
              <li className={S.listItem}><IconCircleCheck className={S.iconCheck} /><span>O benefício estará disponível enquanto o cliente estiver com o plano ativo e sem inadimplência.</span></li>
              <li className={S.listItem}><IconCircleCheck className={S.iconCheck} /><span>Os descontos e parceiros são disponibilizados diretamente pela Clube Certo e podem variar conforme sua localidade.</span></li>
              <li className={S.listItem}><IconCircleCheck className={S.iconCheck} /><span>Em caso de cancelamento ou inadimplência do plano, o acesso à plataforma é suspenso.</span></li>
            </ul>

            <p><strong>Já é cliente do Cartão Amigo Saúde?</strong></p>
            <p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <IconDeviceMobile size={18} />
                <span>Acesse agora o app, toque em “Clube de Benefícios” e comece a economizar!</span>
              </span>
            </p>

            <p><strong>Ainda não é cliente?</strong></p>
            <p>
              Entre em contato agora mesmo e descubra como ter acesso a saúde acessível e milhares de vantagens com o
              Cartão Amigo Saúde + Clube Certo.
            </p>
            <p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <IconMessageCircle size={18} />
                <span>Fale com um consultor e garanta o seu!</span>
              </span>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Club
