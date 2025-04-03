import Image from 'next/image'
import S from './benefits.module.scss'

import { IMAGE } from 'src/presentation/assets'

const BENEFITS = [
  {
    image: IMAGE.ICONE_INFINITO,
    title: 'Consultas e Exames Ilimitados',
    description: 'Acesso ilimitado a consultas e exames, sempre que precisar.',
  },
  {
    image: IMAGE.ICONE_DENTE,
    title: 'Atendimento Odontológico',
    description: 'Cuide do seu sorriso com nossos serviços odontológicos inclusos no plano.',
  },
  {
    image: IMAGE.ICONE_REMEDIO,
    title: 'Desconto em Medicamentos',
    description: 'De 20% a 80% de desconto para tornar o tratamento mais acessível.',
  },
  {
    image: IMAGE.ICONE_PRONTO_ATENDIMENTO,
    title: 'Pronto-atendimento 24h online',
    description:
      'Clínico geral, pediatra e médico da família. Prescrição de medicamentos, guias de exames, atestados médicos e encaminhamentos a outras especialidades.',
  },
  {
    image: IMAGE.ICONE_SEGURO_VIDA,
    title: 'Seguro de Vida e Assistência Funeral',
    description: 'Proteção e tranquilidade para o inesperado.',
  },
  {
    image: IMAGE.ICONE_EMPRESTIMO,
    title: 'Empréstimos de equipamentos Médico-Hospitalares',
    description: 'Serviços de empréstimos de equipamentos hospitalares para sua clínica.',
  },
  {
    image: IMAGE.ICONE_AMPLA_REDE,
    title: 'Ampla Rede de Parceiros',
    description: 'Encontre profissionais de saúde facilmente em nossa rede crescente.',
  },
  {
    image: IMAGE.ICONE_PLANO_SAUDE,
    title: 'Complementaridade aos Planos de Saúde',
    description: 'Uma opção abrangente aos planos de saúde tradicionais.',
  },
]

const Benefits = () => {
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default Benefits
