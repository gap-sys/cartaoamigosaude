import Link from 'next/link'

import { Meta, Hero} from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import S from './club.module.scss'

const Club = () => {
  return (
    <div>
      <main>
       <Meta
        title="Clube de Benefícios - Cartão Amigo Saúde"
        description="Conheça o Clube de Benefícios do Cartão Amigo Saúde. Descontos exclusivos em diversos estabelecimentos, produtos e serviços para você e sua família."
        keywords="clube de benefícios, descontos exclusivos, Cartão Amigo Saúde, vantagens, promoções, estabelecimentos parceiros"
      />
      <Hero imageUrl={IMAGE.CLUBE_CERTO.src} text="Clube de Benefícios" />
      <div className={S.container}>
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
          <p>
            <strong>O que você ganha com o Clube Certo?</strong>
          </p>
          <ul>
            <li>✅ Descontos reais em mais de 30 mil parceiros em todo o Brasil</li>
            <li>✅ Vantagens nas principais redes de farmácia: Droga Raia, Drogasil, Pague Menos e mais</li>
            <li>✅ Economia nas maiores lojas do país: Americanas, Casas Bahia, Netshoes, Centauro e muitas outras</li>
            <li>✅ Benefícios em academias, faculdades, clínicas, cursos, viagens, cinemas e restaurantes</li>
          </ul>
          <p>
            E o melhor: você acessa tudo isso com apenas alguns cliques, dentro do app do Cartão Amigo Saúde. Tudo isso
            na palma da sua mão, pelo celular, com acesso rápido, simples e direto.
          </p>
        </div>

        {/* Card 2 - Regulamento e Instruções */}
        <div className={S.card}>
          <h4>COMO FUNCIONA – REGULAMENTO DO BENEFÍCIO</h4>
          <ul>
            <li>• O benefício do Clube Certo é gratuito e exclusivo para clientes ativos do Cartão Amigo Saúde.</li>
            <li>• O acesso é feito diretamente pelo aplicativo do Cartão Amigo Saúde, de forma prática e segura.</li>
            <li>
              • Basta fazer login no app e tocar na opção “Clube de descontos” para entrar na plataforma da Clube Certo.
            </li>
            <li>• O CPF do titular é usado automaticamente para liberar os descontos e validar o acesso.</li>
            <li>• O benefício estará disponível enquanto o cliente estiver com o plano ativo e sem inadimplência.</li>
            <li>
              • Os descontos e parceiros são disponibilizados diretamente pela Clube Certo, e podem variar conforme sua
              localidade.
            </li>
            <li>• Em caso de cancelamento ou inadimplência do plano, o acesso à plataforma é suspenso.</li>
          </ul>

          <p>
            <strong>Já é cliente do Cartão Amigo Saúde?</strong>
          </p>
          <p>📲 Acesse agora o app, toque em “Clube de Benefícios” e comece a economizar!</p>

          <p>
            <strong>Ainda não é cliente?</strong>
          </p>
          <p>
            Entre em contato agora mesmo e descubra como ter acesso a saúde acessível e milhares de vantagens com o
            Cartão Amigo Saúde + Clube Certo.
          </p>
          <p>💬 Fale com um consultor e garanta o seu!</p>
        </div>
      </div>
      </main>
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

export default Club
