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
} from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

const Home = () => {
  return (
    <div>
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
    </div>
  )
}

export default Home
