import S from './accordion.module.scss'

const ITEMS = [
  { title: 'Ativação e Utilização', path: '/ativacao-e-utilizacao' },
  { title: 'Telemedicina', path: '/telemedicina' },
  { title: 'Desconto em Farmácias', path: '/desconto-em-farmacias' },
  { title: 'Empréstimo de Equipamentos Médico Hospitalar', path: '/emprestimo-de-equipamentos-medico-hospitalar' },
  { title: 'Seguro de Vida', path: '/seguro-de-vida' },
  { title: 'Assistência Residencial', path: '/assistencia-residencial' },
  { title: 'Auxílio Funeral', path: '/auxilio-funeral' },
  { title: 'Clube Certo', path: '/clube-certo' },
]

const Accordion = () => {
  return (
    <div className={S.accordion}>
      {ITEMS.map((item, index) => (
        <div key={index} className={S.accordionItem}>
          <a className={S.accordionHeader} href={item.path} rel="noopener noreferrer">
            <span>{item.title}</span>
          </a>
        </div>
      ))}
    </div>
  )
}

export default Accordion
