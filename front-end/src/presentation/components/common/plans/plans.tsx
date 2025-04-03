import { HiOutlineCheckCircle } from 'react-icons/hi'

import S from './plans.module.scss'

const Plans = () => {
  return (
    <div id="planos" className={S.container}>
      <h2 className={S.title}>Escolha o seu plano</h2>
      <div className={S.plansWrapper}>
        <div className={`${S.plan} ${S.popular}`}>
          <div className={S.ribbon}>MAIS VENDIDO</div>
          <div className={S.sectionPlan}>
            <h3 className={S.planTitle}>Plano Familiar</h3>
            <p className={S.planSubtitle}>Titular + 4 dependentes</p>
          </div>
          <p className={S.price}>
            <strong>
              <sup> R$ </sup> 39<sup>90</sup>
            </strong>
            <span>por mês</span>
          </p>
          <ul className={`${S.featureList} ${S.featureBorder}`}>
            <li>
              <HiOutlineCheckCircle /> Descontos de Consultas e Exames
            </li>
            <li>
              <HiOutlineCheckCircle /> Pronto-atendimento 24h online
            </li>
            <li>
              <HiOutlineCheckCircle /> Atendimento Odontológico
            </li>
            <li>
              <HiOutlineCheckCircle /> Clube Certo
            </li>
            <li>
              <HiOutlineCheckCircle /> Descontos em Farmácias
            </li>
            <li>
              <HiOutlineCheckCircle /> Empréstimo de equipamentos médico-hospitalares
            </li>
            <li>
              <HiOutlineCheckCircle /> Seguro de Acidentes Pessoais para o Titular
            </li>
            <li>
              <HiOutlineCheckCircle /> Assistência Funeral para o titular
            </li>
            <li>
              <HiOutlineCheckCircle /> Desconto na conta de Luz
            </li>
          </ul>
          <a href="https://app.galaxpay.com.br/contratar/planos/adquira-agora/7450-familiar-mensal/1">
            <button className={S.buttonHighlight}>Quero contratar</button>
          </a>
        </div>

        <div className={S.plan}>
          <div className={S.sectionPlan}>
            <h3 className={S.planTitle}>Plano Essencial</h3>
            <p className={S.planSubtitle}>Titular</p>
          </div>
          <p className={S.price}>
            <strong>
              <sup>R$</sup>29<sup>90</sup>
            </strong>
            <span>por mês</span>
          </p>
          <ul className={S.featureList}>
            <li>
              <HiOutlineCheckCircle /> Descontos de Consultas e Exames
            </li>
            <li>
              <HiOutlineCheckCircle /> Pronto-atendimento 24h online
            </li>
            <li>
              <HiOutlineCheckCircle /> Atendimento Odontológico
            </li>
            <li>
              <HiOutlineCheckCircle /> Clube Certo
            </li>
            <li>
              <HiOutlineCheckCircle /> Descontos em Farmácias
            </li>
            <li>
              <HiOutlineCheckCircle /> Empréstimo de equipamentos médico-hospitalares
            </li>
            <li>
              <HiOutlineCheckCircle /> Seguro de Acidentes Pessoais para o Titular
            </li>
            <li>
              <HiOutlineCheckCircle /> Assistência Funeral para o titular
            </li>
            <li>
              <HiOutlineCheckCircle /> Desconto na conta de Luz
            </li>
          </ul>
          <a href="https://app.galaxpay.com.br/contratar/planos/adquira-agora/7501-essencial-mensal/2">
            <button className={S.button}>Quero contratar</button>
          </a>
        </div>

        <div className={S.plan}>
          <div className={S.sectionPlan}>
            <h3 className={S.planTitle}>Plano Empresarial</h3>
            <p className={S.planSubtitle}>Para seus funcionários</p>
          </div>
          <p className={S.priceConsult}>
            <strong>
              Valores a <br />
              Consultar
            </strong>
          </p>
          <p className={S.consult}>Fale com a nossa equipe</p>
          <ul className={S.featureList}>
            <li>
              <HiOutlineCheckCircle /> Descontos de Consultas e Exames
            </li>
            <li>
              <HiOutlineCheckCircle /> Pronto-atendimento 24h online
            </li>
            <li>
              <HiOutlineCheckCircle /> Atendimento Odontológico
            </li>
            <li>
              <HiOutlineCheckCircle /> Clube Certo
            </li>
            <li>
              <HiOutlineCheckCircle /> Descontos em Farmácias
            </li>
            <li>
              <HiOutlineCheckCircle /> Empréstimo de equipamentos médico-hospitalares
            </li>
            <li>
              <HiOutlineCheckCircle /> Seguro de Acidentes Pessoais para o Titular
            </li>
            <li>
              <HiOutlineCheckCircle /> Assistência Funeral para o titular
            </li>
            <li>
              <HiOutlineCheckCircle /> Desconto na conta de Luz
            </li>
          </ul>
          <a href=" https://api.whatsapp.com/send?phone=5519989512404&text=Ol%C3%A1,%20tudo%20bem?%20Estava%20no%20site%20de%20voc%C3%AAs%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida.">
            <button className={S.button}>Quero contratar</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Plans
