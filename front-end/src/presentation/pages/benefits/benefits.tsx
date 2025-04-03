import { BenefitsCard, Doubt, Hero, Meta, Spotlight, SpotlightBenefits } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

const Benefits = () => {
  return (
    <div>
      <Meta
        title="Benefícios - Cartão Amigo Saúde"
        description="Descubra todas as vantagens de ser um cliente Amigo Saúde. Tenha acesso a descontos em consultas, exames, medicamentos, assistência funerária, seguro de vida e muito mais!"
        keywords="benefícios Cartão Amigo Saúde, descontos em consultas, plano de saúde acessível, assistência funerária, seguro de vida, vantagens do cartão, saúde com economia"
      />

      <Hero imageUrl={IMAGE.BENEFICIOS_MORENA.src} text="Benefícios" />
      <SpotlightBenefits
        title="Todos os benefícios do seu Cartão Amigo Saúde"
        paragraph="Com o Cartão Amigo Saúde, você tem acesso a uma rede completa de serviços que vão desde agendamento facilitado de consultas e exames, até pronto-atendimento online 24h, descontos exclusivos em farmácias, e muito mais. É saúde de verdade, com economia e praticidade para o seu dia a dia."
        position="left"
        image={IMAGE.BENEFICIOS_CARTAO.src}
        alt="Benefícios do Cartão Amigo Saúde"
      />
      <BenefitsCard />
      <Spotlight
        title="Muito mais que um cartão: é cuidado completo com você"
        paragraph="Além dos atendimentos médicos, o Cartão Amigo Saúde oferece suporte em momentos importantes com benefícios como auxílio funeral, seguro de acidentes, clube de vantagens com mais de 600 mil ofertas e até empréstimo de equipamentos hospitalares. Tudo isso sem burocracia, com atendimento humanizado e acessível."
        position="right"
        image={IMAGE.ACORDO.src}
        alt="Vantagens exclusivas do cartão"
      />
      <Doubt />
    </div>
  )
}

export default Benefits
