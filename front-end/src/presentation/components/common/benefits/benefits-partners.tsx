import Image from 'next/image'
import S from './benefits-partners.module.scss'

import { IMAGE } from 'src/presentation/assets'

const BENEFITS = [
  {
    image: IMAGE.ICONE_PRONTO_ATENDIMENTO,
    title: 'Acesso à Telemedicina',
    description:
      'Os funcionários podem utilizar a Telemedicina para consultas médicas remotas, proporcionando maior comodidade, economia de tempo e acesso rápido a cuidados médicos.',
  },
  {
    image: IMAGE.ICONE_EMPRESTIMO,
    title: 'Descontos em serviços médicos',
    description: 'Consultas médicas, exames laboratoriais, dentistas, fisioterapia, entre outros.',
  },
  {
    image: IMAGE.ICONE_SEGURO_VIDA,
    title: 'Seguro de Vida',
    description:
      'Oferece tranquilidade e proteção financeira aos colaboradores e suas famílias em momentos difíceis, garantindo o suporte necessário em caso de imprevistos.',
  },
  {
    image: IMAGE.ICONE_REMEDIO,
    title: 'Descontos em Medicamentos',
    description:
      'Os funcionários têm acesso a descontos exclusivos de 20% a 80% em farmácias parceiras, tornando os medicamentos mais acessíveis e aliviando os custos com saúde.',
  },
  {
    image: IMAGE.ASSISTENCIA_FUNERAL,
    title: 'Assistência Funeral',
    description:
      'Garante auxílio e suporte em caso de falecimento, proporcionando suporte emocional e financeiro aos familiares dos colaboradores.',
  },
]

const BenefitsPartners = () => {
  return (
    <div className={S.container}>
      <h1 className={S.titleSection}>Benefícios para os Funcionários:</h1>
      <div className={S.anomecarua}>
        <div className={S.benefitsContainer}>
          {BENEFITS.map((benefit, index) => (
            <div key={index} className={S.benefitItem}>
              <div className={S.icon}>
                <Image src={benefit.image} alt={benefit.title} width={84} height={64} priority />
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BenefitsPartners
