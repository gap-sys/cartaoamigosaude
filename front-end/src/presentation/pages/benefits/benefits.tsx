import { BenefitsCard, Doubt, Hero, Meta, Spotlight, SpotlightBenefits, Strip, Navbar, Sac, Footer } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'
import Link from 'next/link'

const Benefits = () => {
  return (
    <div>
      <Strip />
      <Navbar />
      <main>
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

export default Benefits
