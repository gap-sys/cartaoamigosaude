import { Hero, Meta, Spotlight } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import S from './about.module.scss'

const About = () => {
  const PARAGRAPHS = [
    'Sua Parceira Confiável na Jornada de Bem-Estar e Saúde Fundado em 2011, somos uma empresa comprometida em proporcionar a melhor experiência em cuidados de saúde com o melhor custo-benefício. Localizada no coração do interior de São Paulo, na cidade de São Pedro, nossa jornada começou com a missão de oferecer soluções inovadoras para as necessidades médicas da população.',
    'Nos destacamos pela excelência no atendimento personalizado e pela moderna infraestrutura que garantem o máximo conforto e bem-estar para nossos pacientes. Ao longo dos anos, desenvolvemos um modelo de negócio único, combinando um cartão de saúde com um centro médico, formando uma abrangente rede de profissionais em diversas especialidades médicas, odontológicas e não-médicas.',
    'Em 2023, alçamos novos voos e nos tornamos uma Franqueadora, liderada pelos sócios-fundadores Allan Bertho e Letícia Antonelli. Essa expansão é fruto de nossa paixão em proporcionar cuidados médicos de qualidade e aprimorar o acesso à saúde em todo o país.',
    'Nossa história é diretamente ligada à Clínica Mão Amiga, aonde nasceu o “Cartão Amigo Saúde”, reforçamos nossa missão de sermos mais do que Cartão de Benefícios, fomos em buscar de novos Benefícios exclusivos para nossos clientes.',
    'Somos um amigo e parceiro confiável em sua jornada de bem-estar e saúde.',
    'Acreditamos na importância de tornar a saúde acessível a todos e, por meio de nossa franquia, convidamos empreendedores a fazerem parte de nossa rede, compartilhando a visão de oferecer serviços médicos de alta qualidade e cuidado humano a um número cada vez maior de pessoas.',
    'Junte-se a nós e experimente uma nova era em cuidados com a saúde. Seja você também um Amigo da Saúde!',
  ]

  return (
    <div>
      <Meta
        title="Quem somos - Cartão Amigo Saúde"
        description="Conheça a história, missão, visão e valores do Cartão Amigo Saúde. Desde 2011, somos referência em cuidados acessíveis, com atendimento humanizado e inovação na área da saúde."
        keywords="sobre o Cartão Amigo Saúde, história, missão, visão, valores, saúde acessível, bem-estar, franquia de saúde, atendimento humanizado"
      />
      <Hero imageUrl={IMAGE.MAE_SEGURANDO_BEBE.src} text="Sobre Nós" />
      <div className={S.header}>
        <h1 className={S.title}>Sua Parceira Confiável na Jornada de Bem-Estar e Saúde</h1>
        <div className={S['section-title']}>
          <div className={S.sectionParagraph}>
            {PARAGRAPHS.map((paragraph, index) => (
              <p key={index} className={S.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className={S.sectionImg}>
            <img src={IMAGE.ALLAN.src} alt="Donos da empresa" />
          </div>
        </div>
      </div>
      <div className={S.container}>
        <div className={S.column}>
          <div className={S.sectionTitle}>
            <img src={IMAGE.ICONE_VISAO.src} alt="Icone Visão" />
            <h2 className={S.title}>Visão</h2>
          </div>
          <p className={S.paragraph}>
            Tornar-se a principal referência em acesso a serviços de saúde de qualidade, oferecendo soluções inovadoras
            e acessíveis para toda a população.
          </p>
          <div className={S.sectionTitle}>
            <img src={IMAGE.ICONE_MISAO.src} alt="Icone Missão" />
            <h2 className={S.title}>Missão</h2>
          </div>
          <p className={S.paragraph}>
            Promover o acesso universal a serviços de saúde de qualidade, por meio do fornecimento de um cartão de
            descontos abrangente, facilitando o cuidado com a saúde e o bem-estar de todos os brasileiros.
          </p>
        </div>
        <div className={S.column}>
          <div className={S.sectionTitle}>
            <img src={IMAGE.ICONE_DIAMANTE.src} alt="Icone Diamante" />
            <h2 className={S.title}>Valores</h2>
          </div>
          <ul className={S.list}>
            <li>
              <strong>Acessibilidade:</strong> Buscar constantemente a inclusão e a acessibilidade aos serviços de
              saúde, proporcionando opções acessíveis para todos os clientes.
            </li>
            <li>
              <strong>Qualidade:</strong> Comprometimento em fornecer serviços de saúde com padrões de qualidade,
              assegurando a confiança e a satisfação dos clientes.
            </li>
            <li>
              <strong>Ética:</strong> Agir com integridade, transparência e responsabilidade em todas as interações com
              os clientes, parceiros e colaboradores.
            </li>
            <li>
              <strong>Inovação:</strong> Estimular a inovação contínua para oferecer soluções eficientes e práticas que
              atendam às necessidades em constante evolução da sociedade.
            </li>
            <li>
              <strong>Colaboração:</strong> Valorizar o trabalho em equipe, promovendo a colaboração e a parceria com
              clínicas, laboratórios e profissionais de saúde para fornecer uma ampla rede de serviços aos beneficiários
              do Cartão Amigo Saúde.
            </li>
          </ul>
        </div>
      </div>
      <Spotlight
        title="Comece hoje a cuidar da sua saúde e da sua família."
        paragraph="Após conhecer nossa trajetória e compromisso em transformar o cuidado com a saúde, é hora de explorar nossos planos especialmente desenhados para atender suas necessidades. Descubra as vantagens e benefícios que só a Amigo Saúde pode oferecer, e encontre o plano perfeito para você e sua família."
        position="right"
        image={IMAGE.PAI_COM_FILHO.src}
        alt="Familia Reunida"
        lineHeight="30px"
        titleSize="32px"
        buttonLabel="Conheça nossos planos"
      />
    </div>
  )
}

export default About
