import Image from 'next/image'
import Link from 'next/link'

import S from './benefits-card.module.scss'

import { IMAGE } from 'src/presentation/assets'
import { Button } from 'src/presentation/components'

const BENEFITS = [
  {
    image: IMAGE.ICONE_REMEDIO,
    title: 'Descontos em Farmácias',
    description: 'Economize até 80% em medicamentos com e-pharma.',
    href: '/desconto-em-medicamentos',
    label: 'Ver descontos',
  },
  {
    image: IMAGE.ICONE_INFINITO,
    title: 'Agendar Consultas e Exames',
    description: 'Agende facilmente suas consultas e exames com poucos cliques.',
    href: '/agendar-consulta',
    label: 'Agendar agora',
  },
  {
    image: IMAGE.ICONE_SEGURO_VIDA,
    title: 'Assistência Funeral',
    description: 'Amparo para momentos delicados com cobertura financeira.',
    href: '/auxilio-funeral',
    label: 'Entenda o benefício',
  },
  {
    image: IMAGE.ICONE_AMPLA_REDE,
    title: 'Assistência Residencial',
    description: 'Serviços de assistência técnica residencial para sua casa.',
    href: '/assistencia-residencial',
    label: 'Saiba mais',
  },
  {
    image: IMAGE.TAG,
    title: 'Empréstimo de Equipamentos Médicos',
    description: 'Veja como solicitar empréstimos com base no regulamento.',
    href: '/emprestimo-de-equipamentos-medico-hospitalar',
    label: 'Saiba como usar',
  },
  {
    image: IMAGE.ICONE_DENTE,
    title: 'Agendar Atendimento Odontológico',
    description: 'Cuide do seu sorriso com nossa rede odontológica.',
    href: '/agendar-consulta',
    label: 'Agendar agora',
  },
  {
    image: IMAGE.ICONE_EMPRESTIMO,
    title: 'Clube Certo – Mais de 600 mil descontos',
    description: 'Descontos exclusivos em lazer, educação, beleza, e mais.',
    href: 'https://www.hotsite.clubecerto.com.br/amigosaude',
    label: 'Aproveitar descontos',
  },
  {
    image: IMAGE.ICONE_PRONTO_ATENDIMENTO,
    title: 'Pronto-atendimento 24h online',
    description: 'Acesse atendimento médico online e veja como usar a telemedicina.',
    href: '/telemedicina',
    label: 'Saiba como usar',
  },
  {
    image: IMAGE.ACCIDENT,
    title: 'Seguro de Acidentes Pessoais',
    description: 'Cobertura em casos de morte acidental ou invalidez.',
    href: '/seguro-de-vida',
    label: 'Como funciona',
  },
]

const BenefitsCard = () => {
  return (
    <div className={S.anomecarua}>
      <div className={S.benefitsContainer}>
        {BENEFITS.map((benefit, index) => (
          <div key={index} className={S.benefitItem}>
            <div className={S.icon}>
              <Image src={benefit.image} alt={benefit.title} width={84} height={64} priority />
            </div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
            <Link href={benefit.href} rel="noopener noreferrer">
              <Button typeStyle="btn2" label={benefit.label} width="200px" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BenefitsCard
