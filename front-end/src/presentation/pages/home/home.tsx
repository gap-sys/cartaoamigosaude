import {
  Compromise,
  Header,
  Spotlight,
  Plans,
  Benefits,
  Discount,
  Clinics,
  Feedbacks,
  Doubt,
  Meta,
  Health,
  Strip,
  Navbar,
  Sac,
  Footer,
} from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <Strip />
      <Navbar />
      <main>
        <Meta
          title="Cartão Amigo Saúde - Seu parceiro na jornada de bem-estar"
          description="Tenha acesso a consultas, exames, telemedicina, medicamentos e muito mais com o Cartão Amigo Saúde. Planos acessíveis para você e sua família, sem carência e sem burocracia."
          keywords="cartão de saúde, telemedicina, desconto em consultas, desconto em exames, farmácias, plano de saúde acessível, saúde sem carência, assistência funeral, seguro de vida"
        />
        <Header />
        <Health />
        <Compromise />
        <Discount />
        <Spotlight
          title="Facilidade de Uso e Acessibilidade"
          paragraph="Com o Cartão Amigo Saúde, o acesso a serviços de saúde de qualidade torna-se fácil e acessível. Por apenas R$ 39,90 mensais para toda a família, oferece uma variedade de métodos de pagamento e é fácil de solicitar e utilizar."
          position="left"
          image={IMAGE.IDOSA_COM_CELULAR.src}
          alt="Facilidade de uso"
        />
        <Spotlight
          title="Abrangência e Variedade de Serviços"
          paragraph="O cartão proporciona parcerias com uma ampla e crescente rede de clínicas, laboratórios, hospitais, farmácias, academias e profissionais de saúde em toda a região. Além disso, oferece benefícios como consultas e exames ilimitados, módulo odontológico, telemedicina e descontos em medicamentos, tornando-se uma solução completa e versátil para a saúde e o bem-estar de seus usuários."
          position="right"
          image={IMAGE.DOIS_MEDICOS.src}
          alt="Variedade de serviços"
        />
        <Benefits />
        <Clinics />
        <Plans />
        <Feedbacks />
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

export default Home
