import Link from 'next/link'

import { BenefitsPartners, Button, CompanyForm, Hero, Meta } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import S from './company.module.scss'

const Company = () => {
  return (
    <div>
      <Meta
        title="Para Empresas - Cartão Amigo Saúde"
        description="Leve mais saúde e bem-estar para sua equipe com o Cartão Amigo Saúde. Benefícios como Telemedicina, descontos em farmácias, seguro de vida e mais para seus colaboradores."
        keywords="benefícios para empresas, saúde corporativa, cartão saúde empresas, telemedicina, desconto em farmácias, saúde dos colaboradores"
      />

      <Hero imageUrl={IMAGE.FUNCIONARIOS_REUNIDOS.src} text="Para Empresas" />
      <div className={S.container}>
        <h1 className={S.title}>Saiba mais sobre a Amigo Saúde</h1>
        <p className={S.paragraph}>
          A Amigo Saúde é sua parceira estratégica na promoção do bem-estar e saúde dos seus colaboradores. Com uma
          trajetória sólida e reconhecida, posicionamo-nos como líderes na oferta de soluções de saúde acessíveis e de
          alta qualidade. Nascida no coração do interior de São Paulo e adotada por milhões em todo o Brasil, nossa
          abordagem combina inovação, abrangência e cuidado humano. Ao optar pela Amigo Saúde, sua empresa não está
          apenas adquirindo um serviço, mas estabelecendo uma parceria que valoriza e cuida do seu ativo mais valioso:
          as pessoas.
        </p>
        <p className={S.paragraph}>
          Os benefícios para uma empresa comprar o Cartão Amigo Saúde, que inclui Telemedicina, Seguro de Vida,
          Medicamentos de 20% a 80% de Desconto em farmácias parceiras e Assistência Funeral, são os seguintes:
        </p>
        <div className={S.benefitsSection}>
          <div className={S.imageContainer}>
            <img className={S.img} src={IMAGE.MULHER_SERIA.src} alt="Mulher sorrindo" />
          </div>
          <div className={S.textContainer}>
            <div className={S.textBlock}>
              <h3>Redução dos custos com planos de saúde</h3>
              <p>
                Os funcionários têm acesso a descontos em serviços médicos, o que pode levar a economias significativas
                para a empresa em despesas de saúde, também oferece acesso a Telemedicina, o que pode reduzir os custos
                de consultas médicas presenciais, tornando a assistência médica mais acessível para os funcionários e,
                ao mesmo tempo, melhorando a eficiência do atendimento.
              </p>
            </div>
            <div className={S.textBlock}>
              <h3>Cuidado e Bem-Estar dos Funcionários</h3>
              <p>
                A inclusão do Seguro de Vida e Assistência Funeral demonstra o cuidado da empresa com o bem-estar e
                proteção dos colaboradores e suas famílias, proporcionando tranquilidade em momentos delicados.
              </p>
            </div>
            <div className={S.textBlock}>
              <h3>Facilidade no Acesso a Medicamentos</h3>
              <p>
                Os descontos exclusivos de 30% a 80% em farmácias parceiras garantem que os funcionários tenham acesso a
                medicamentos essenciais com preços mais acessíveis, aliviando o impacto financeiro em suas despesas de
                saúde.
              </p>
            </div>
            <div className={S.textBlock}>
              <h3>Atração e Retenção de Talentos</h3>
              <p>
                A oferta de um pacote de benefícios abrangente, que inclui Telemedicina, Seguro de Vida, Descontos em
                Medicamentos e Assistência Funeral, pode ser um diferencial competitivo para atrair novos talentos e
                fortalecer a retenção de funcionários valiosos.
              </p>
            </div>
            <div className={S.textBlock}>
              <h3>Ambiente de Trabalho Saudável</h3>
              <p>
                Ao investir na saúde e bem-estar dos funcionários por meio do Cartão Amigo Saúde, a empresa contribui
                para a criação de um ambiente de trabalho mais saudável e produtivo, reduzindo absenteísmo e melhorando
                a motivação da equipe.
              </p>
            </div>
          </div>
        </div>
        <div className={S.benefitsSection}>
          <div className={S.textContainer}>
            <div className={S.textBlock}>
              <h3>Simplicidade na Implementação</h3>
              <p>
                A empresa pode oferecer o Cartão Amigo Saúde como um benefício adicional aos planos de saúde existentes
                ou como uma opção para funcionários que não possuem plano de saúde, tornando a implementação rápida e
                eficiente.
              </p>
            </div>
            <div className={S.textBlock}>
              <h3>Relação de Confiança</h3>
              <p>
                Ao demonstrar cuidado e valorização dos colaboradores com um pacote de benefícios abrangente, a empresa
                fortalece a relação de confiança e fidelidade dos funcionários.
              </p>
            </div>
            <div className={S.textBlock}>
              <h3>Imagem Empresarial Positiva</h3>
              <p>
                Investir no bem-estar dos funcionários e oferecer um pacote de benefícios completo reflete positivamente
                na imagem da empresa, tanto para os colaboradores quanto para clientes e parceiros.
              </p>
            </div>
            <div className={S.textBlock}>
              <h3>Flexibilidade para Diferentes Necessidades</h3>
              <p>
                O Cartão Amigo Saúde abrange serviços de Telemedicina, descontos em medicamentos e assistência funeral,
                atendendo às diversas necessidades de saúde e bem-estar dos funcionários e suas famílias. Em resumo, a
                compra do Cartão Amigo Saúde, com seus diversos benefícios, demonstra o compromisso da empresa em cuidar
                de seus colaboradores de maneira abrangente, com foco na saúde, bem-estar e proteção financeira. Isso
                cria uma relação de confiança e valorização entre empresa e funcionários, resultando em uma equipe mais
                engajada, produtiva e satisfeita.
              </p>
            </div>
            <div className={`${S.textBlock} ${S.lastBlock}`}>
              <h3 className={S.lastP}>Amigo Saúde é muito mais qualidade de vida para os seus funcionários.</h3>
              <Link className={S.link} href="https://api.whatsapp.com/send?phone=5519989512404&text=Ol%C3%A1,%20tudo%20bem?%20Estava%20no%20site%20de%20voc%C3%AAs%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida.">
                <Button typeStyle="btn1" label="FALE COM NOSSA EQUIPE" width="240px" />
              </Link>
            </div>
          </div>
          <div className={S.imageContainer}>
            <img className={S.imgLast} src={IMAGE.HOMEM_SERIO.src} alt="Mulher sorrindo" />
          </div>
        </div>
        <BenefitsPartners />
        <CompanyForm />
      </div>
    </div>
  )
}

export default Company
