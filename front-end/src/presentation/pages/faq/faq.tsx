import { useState } from 'react'
import { Hero, Meta } from 'src/presentation/components'
import S from './faq.module.scss'
import { IMAGE } from 'src/presentation/assets'

const ITEMS = [
  {
    title: 'O que é o Cartão Amigo Saúde?',
    content:
      'É o maior cartão de descontos do Brasil. Oferece descontos de até 75%, principalmente na área de saúde. Pagando um plano a partir de R$ 29,90 mensais, você pode aproveitar todos os benefícios e incluir dependentes, como filhos, marido ou esposa etc.',
  },
  {
    title: 'Como retiro meu Cartão Amigo Saúde?',
    content: 'O cartão é digital e estará disponível após a ativação por meio do nosso portal ou aplicativo.',
  },
  {
    title: 'Quanto custa o Cartão Amigo Saúde?',
    content: 'Os planos começam a partir de R$ 29,90 mensais. Consulte nossa tabela de preços atualizada.',
  },
  {
    title: 'Como utilizo o meu Cartão Amigo Saúde?',
    content: 'Basta apresentar o cartão virtual em clínicas ou estabelecimentos parceiros no momento do atendimento.',
  },
  {
    title: 'Qual é o objetivo do Cartão Amigo Saúde?',
    content: 'Oferecer acesso facilitado à saúde com economia em consultas, exames e outros serviços.',
  },
  {
    title: 'Se eu cancelar meu Cartão Amigo Saúde, vou pagar alguma multa?',
    content: 'O cancelamento é livre após o período mínimo de vigência. Consulte o contrato para detalhes.',
  },
  {
    title: 'O Cartão Amigo Saúde é um plano de saúde?',
    content: 'Não. É um cartão de descontos em serviços de saúde e não substitui um plano de saúde convencional.',
  },
  {
    title: 'Quem pode aderir ao Cartão Amigo Saúde?',
    content: 'Qualquer pessoa acima de 18 anos pode aderir. Também é possível incluir dependentes.',
  },
  {
    title: 'Qual a vigência do Cartão Amigo Saúde?',
    content: 'O contrato tem vigência de 12 meses com renovação automática. Consulte cláusulas para cancelamento.',
  },
]

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div>
      <Meta
        title="Dúvidas Frequentes - Cartão Amigo Saúde"
        description="Encontre respostas para as principais dúvidas sobre o Cartão Amigo Saúde. Saiba como funciona, quanto custa, como usar e muito mais."
        keywords="dúvidas Cartão Amigo Saúde, FAQ Amigo Saúde, o que é Cartão Amigo Saúde, como usar, quanto custa, plano de saúde acessível"
      />

      <Hero imageUrl={IMAGE.MULHER_TRABALAHANDO_COM_CELULAR.src} text="Dúvidas Frequentes" />
      <div className={S.accordion}>
        {ITEMS.map((item, index) => (
          <div key={index} className={`${S.accordionItem} ${activeIndex === index ? S.active : ''}`}>
            <button className={S.accordionHeader} onClick={() => toggleItem(index)}>
              <span className={S.icon}>{activeIndex === index ? '−' : '+'}</span>
              <span className={S.title}>{item.title}</span>
            </button>
            {activeIndex === index && (
              <div className={S.accordionContent}>
                <p className={S.content}>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq
