import { Hero, Meta } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import S from './club.module.scss'

const Club = () => {
  return (
    <div>
      <Meta
        title="Clube Certo - Benefícios Exclusivos para você, cliente Cartão Amigo Saúde"
        description="Clientes do Cartão Amigo Saúde têm acesso gratuito ao Clube Certo: mais de 30 mil parceiros com descontos reais em farmácias, varejo, educação, lazer e muito mais. Economize com saúde e qualidade de vida."
        keywords="clube de descontos, Clube Certo, Cartão Amigo Saúde, benefícios exclusivos, farmácias com desconto, vantagens em lojas, plano de saúde com benefícios, economizar com saúde"
      />
      <Hero imageUrl={IMAGE.CLUBE_CERTO.src} text="Clube Certo – Mais benefícios para você, cliente Amigo Saúde!" />
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
    </div>
  )
}

export default Club
