import Link from 'next/link'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button, Meta, FranchiseeAbout } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import S from './franchisee.module.scss'

const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  whatsapp: yup.string().required('WhatsApp é obrigatório'),
  investment: yup.string().required('Selecione uma faixa de investimento'),
})

const Franchisee = () => {
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = () => {
    setLoading(true)
    reset()

    setTimeout(() => {
      window.location.href = '/obrigado-franquia'
    }, 1000)
  }

  return (
    <div>
      <Meta
        title="Seja um Franqueado - Cartão Amigo Saúde"
        description="Transforme sua carreira e empreenda com propósito. Torne-se um franqueado da Amigo Saúde e leve cuidados de saúde acessíveis para sua região com suporte completo."
        keywords="seja um franqueado, franquia saúde, Cartão Amigo Saúde, negócio próprio, franquia rentável, franquia de clínica, abrir franquia, oportunidades de franquia"
      />

      <div id="formulario" className={S.container}>
        <div className={S.overlay}></div>
        <div className={S.content}>
          <div className={S.boxText}>
            <h6 className={S.subtitle}>Seja um franqueado Amigo Saúde</h6>
            <h1 className={S.title}>Entre para o modelo de negócio que mais cresce no Brasil</h1>
            <p className={S.paragraph}>
              Transforme vidas e impulsione sua carreira como franqueado da Amigo Saúde. Preencha o formulário e comece
              sua jornada em um mercado em expansão, oferecendo soluções de saúde de alta qualidade.
            </p>
          </div>

          <form className={S.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={S.inputGroup}>
              <input type="text" placeholder="Qual o seu nome?" className={S.input} {...register('name')} />
              {errors.name && <p className={S.error}>{errors.name.message}</p>}
            </div>

            <div className={S.inputGroup}>
              <input type="email" placeholder="Qual o seu e-mail?" className={S.input} {...register('email')} />
              {errors.email && <p className={S.error}>{errors.email.message}</p>}
            </div>

            <div className={S.inputGroup}>
              <input
                type="text"
                placeholder="Insira seu WhatsApp (DDD+Número)"
                className={S.input}
                {...register('whatsapp')}
              />
              {errors.whatsapp && <p className={S.error}>{errors.whatsapp.message}</p>}
            </div>

            <div className={S.inputGroup}>
              <label className={S.label}>Selecione o capital para investimento</label>
              <select className={S.input} {...register('investment')}>
                <option value="">Selecione</option>
                <option value="Até R$ 150 mil">Até R$ 150 mil</option>
                <option value="De R$ 150.000 à R$ 300.000">De R$ 150.000 à R$ 300.000</option>
                <option value="De R$ 300.000 à R$ 500.000">De R$ 300.000 à R$ 500.000</option>
                <option value="De R$ 500.000 à R$ 700.000">De R$ 500.000 à R$ 700.000</option>
                <option value="De R$ 700.000 à R$ 1.000.000">De R$ 700.000 à R$ 1.000.000</option>
              </select>
              {errors.investment && <p className={S.error}>{errors.investment.message}</p>}
            </div>

            <Button typeStyle="btn4" width="100%" label={loading ? 'Enviando...' : 'Enviar'} />
          </form>
        </div>
      </div>

      <FranchiseeAbout />
      <div className={S.benefitsContainer}>
        <div className={S.benefitsSection}>
          <div className={S.imageContainer}>
            <img src={IMAGE.FUNCIONARIOS_CONVERSANDO.src} alt="Mulher sorrindo" />
          </div>
          <div className={S.textContainer}>
            <h1 className={S.titleFranchisee}>Suporte ao Franqueado</h1>
            <div className={S.textBlock}>
              <h3>ORIENTAÇÃO NA ESCOLHA DO PONTO</h3>
              <p>Auxílio integral na seleção ideal do seu local de negócios.</p>
            </div>
            <div className={S.textBlock}>
              <h3>CAPACITAÇÃO INTEGRAL</h3>
              <p>Formação em operações, vendas e gestão para você e sua equipe.</p>
            </div>
            <div className={S.textBlock}>
              <h3>DIRETRIZES DE ARQUITETURA</h3>
              <p>Layout minucioso pronto para aprovação da vigilância sanitária.</p>
            </div>
            <div className={S.textBlock}>
              <h3>MANUAL DETALHADO</h3>
              <p>Guias que cobrem todas as rotinas operacionais da franquia.</p>
            </div>
            <div className={S.textBlock}>
              <h3>ESTRATÉGIAS DE MARKETING</h3>
              <p>Orientação completa para promoções online e offline.</p>
            </div>
            <div className={S.textBlock}>
              <h3>SISTEMA DE GERENCIAMENTO</h3>
              <p>Software avançado fornecendo dados e análises em tempo real.</p>
            </div>
            <div className={S.textBlock}>
              <h3>APOIO NA FORMAÇÃO DA EQUIPE</h3>
              <p>Assistência na seleção de profissionais médicos e odontológicos.</p>
            </div>
            <div className={S.textBlock}>
              <h3>ORIENTAÇÃO FINANCEIRA</h3>
              <p>Suporte na otimização do seu plano de negócios para maximizar lucros.</p>
            </div>
            <Link className={S.link} href="#formulario">
              <Button typeStyle="btn4" width="250px" label="Preencher Formulário" />
            </Link>
          </div>
        </div>
      </div>

      <div className={S.testimonialSection}>
        <div className={S.testimonialLeft}>
          <h2>
            O que os <br /> franqueados dizem?
          </h2>
          <p>
            Ouça diretamente de nossos franqueados e descubra o impacto transformador da Amigo Saúde em suas jornadas
            empresariais!
          </p>
        </div>

        <div className={S.testimonialRight}>
          <p className={S.quote}>
            &quot;Minha jornada como franqueado da Amigo Saúde tem sido incrivelmente transformadora. A parceria com a
            empresa tem me proporcionado um suporte excepcional e um treinamento de alta qualidade, o que me permitiu
            alcançar um nível de rentabilidade que nunca imaginei. Estou verdadeiramente grato por fazer parte dessa
            família e pelo impacto positivo que a Amigo Saúde trouxe para o meu negócio.&quot;
          </p>
          <p className={S.author}>
            <strong>Gabriel Hidalgo</strong>
            <br />
            <span className={S.role}>CEO</span>
          </p>
        </div>
      </div>

      <div className={S.ctaContainer}>
        <h1>Inicie Sua Jornada no Universo Amigo Saúde!</h1>
        <p>
          Torne-se parte de uma rede crescente, comprometida com o cuidado e bem-estar. Preencha o formulário e dê o
          primeiro passo rumo a um futuro promissor como franqueado.
        </p>
        <Link href="#formulario">
          <Button typeStyle="btn2" label="Preencher Formulário" width="220px" />
        </Link>
      </div>
    </div>
  )
}

export default Franchisee
