import S from './accordion.module.scss'
import Link from 'next/link'

const ITEMS = [
  { title: 'Desconto em Farmácias', path: '/desconto-em-farmacias' },
  { title: 'Auxílio Funeral', path: '/auxilio-funeral' },
  { title: 'Seguro de Vida', path: '/seguro-de-vida' },
  { title: 'Empréstimo de Equipamentos Médico Hospitalar', path: '/emprestimo-de-equipamentos-medico-hospitalar' },
  { title: 'Assistência Residencial', path: '/assistencia-residencial' },
  { title: 'Ativação e Utilização', path: '/ativacao-e-utilizacao' },
  { title: 'Clube Certo', path: '/clube-certo' },
  { title: 'Telemedicina', path: '/telemedicina' },
]

const Accordion = () => {
  return (
    <div className={S.accordion}>
      {ITEMS.map((item, index) => (
        <div key={index} className={S.accordionItem}>
          <Link className={S.accordionHeader} href={item.path}>
            <span>{item.title}</span>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Accordion
