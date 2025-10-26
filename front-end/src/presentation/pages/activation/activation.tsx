import Link from 'next/link'

import { Hero, Meta } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'
import { IconInfoCircle, IconCircleCheck, IconClipboardList } from '@tabler/icons-react'

import S from './activation.module.scss'

const Activation = () => {
  return (
    <div className={S.page}>
      <Meta
        title="Ativação do Cartão - Cartão Amigo Saúde"
        description="Ative seu Cartão Amigo Saúde e comece a usufruir de todos os benefícios e descontos em saúde. Processo rápido e simples para começar a economizar."
        keywords="ativação cartão, Cartão Amigo Saúde, ativar benefícios, descontos saúde, processo de ativação, começar a usar"
      />
      <div className={S.heroSpacer}>
        <Hero imageUrl={IMAGE.DOIS_HOMENS_ACORDO.src} text="Ativação do Cartão" />
      </div>
      <div className={S.container}>
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconInfoCircle size={20} className={S.titleIcon} />
            <h2>Como funciona a ativação</h2>
          </div>
          <p>
            Para que o Cliente tenha acesso aos serviços do Programa AMIGO SAÚDE deve realizar a ativação do CARTÃO
            AMIGO SAÚDE na Central de Atendimento.
          </p>
        </div>
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconClipboardList size={20} className={S.titleIcon} />
            <h2>Utilização</h2>
          </div>
          <p>
            Com a adesão ao Programa AMIGO SAÚDE e o CARTÃO AMIGO SAÚDE ativado, o Cliente poderá consultar a Central de
            Atendimento para agendamento de consultas, exames médicos, além de consultas e exames odontológicos em uma
            rede particulares pagando preços diferenciados por meio do CARTÃO AMIGO SAÚDE, utilizando da seguinte
            maneira:
          </p>
          <ul className={S.list}>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Solicitar o atendimento desejado na Central de Atendimento (para exames, enviar o pedido médico pelo WhatsApp).</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Receber até 3 opções de orçamento por e-mail, WhatsApp ou telefone em até 2 dias úteis.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Escolher o prestador e confirmar com o atendimento personalizado para realizar o agendamento.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Ser orientado sobre valor, processo de atendimento e prazo de carga/recarga do AMIGO SAÚDE.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Efetuar a carga/recarga com o valor do(s) serviço(s) até 2 dias úteis antes da consulta/exame.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Informar número do CARTÃO AMIGO SAÚDE e senha recebida por SMS ao comparecer na rede credenciada.</span>
            </li>
          </ul>
          <p>
            A aceitação do Cartão Virtual CARTÃO AMIGO SAÚDE como meio de pagamento na Rede Cartão Amigo Saúde dependerá
            da disponibilidade de crédito.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Activation
