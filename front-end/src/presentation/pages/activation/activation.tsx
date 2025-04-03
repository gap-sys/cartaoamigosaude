import { Hero, Meta } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import S from './activation.module.scss'

const Activation = () => {
  return (
    <div>
      <Meta
        title="Ativação e Utilização - Cartão Amigo Saúde"
        description="Saiba como ativar o seu Cartão Amigo Saúde e utilizar todos os serviços oferecidos, como consultas, exames e atendimento odontológico com preços acessíveis."
        keywords="ativação do cartão, como usar o Cartão Amigo Saúde, agendamento de consultas, exames com desconto, saúde acessível, cartão de benefícios, recarga de cartão saúde"
      />
      <Hero imageUrl={IMAGE.DOIS_HOMENS_ACORDO.src} text="Ativação e Utilização" />
      <div className={S.container}>
        <div className={S.card}>
          <p>
            Para que o Cliente tenha acesso aos serviços do Programa AMIGO SAÚDE deve realizar a ativação do CARTÃO
            AMIGO SAÚDE na Central de Atendimento.
          </p>
        </div>
        <div className={S.card}>
          <p>UTILIZAÇÃO</p>
          <p>
            Com a adesão ao Programa AMIGO SAÚDE e o CARTÃO AMIGO SAÚDE ativado, o Cliente poderá consultar a Central de
            Atendimento para agendamento de consultas, exames médicos, além de consultas e exames odontológicos em uma
            rede particulares pagando preços diferenciados por meio do CARTÃO AMIGO SAÚDE, utilizando da seguinte
            maneira:
          </p>
          <ul>
            <li>
              O Cliente deverá solicitar através da Central de Atendimento Cartão Amigo Saúde o atendimento que deseja.
              Em caso de exames será necessário anexar/enviar o pedido médico à Central de Atendimento pelo whatsapp.
              <br />
            </li>
            <li>
              Em até 2 (dois) dias úteis da solicitação o Cliente receberá do serviço de atendimento personalizado por
              e-mail, WhatsApp e/ou contato telefônico o orçamento com até 3 (três) opções de atendimento para o serviço
              solicitado (as quantidades e opções de atendimento vão variar com a região em que o Cliente esteja
              localizado);
            </li>
            <li>
              O Cliente deverá escolher um prestador de serviço, entre as opções oferecidas, e informar ao serviço de
              atendimento personalizado para que o agendamento seja realizado no prestador escolhido;
            </li>
            <li>
              O serviço de atendimento personalizado orientará ao Cliente sobre o valor, processo de atendimento junto
              ao prestador de serviço e prazo de carga/recarga do AMIGO SAÚDE;
            </li>
            <li>
              Após a confirmação de agendamento realizado por meio do serviço de atendimento personalizado, o Cliente
              deverá efetuar a carga/recarga do CARTÃO AMIGO SAÚDE, com o(s) valor(es) do(s) serviço(s) em até 2 (dois)
              dias úteis antes da consulta e/ou exame agendado
            </li>
            <li>
              Ao comparecer na Rede Cartão Amigo Saúde o Cliente deverá informar o número do CARTÃO AMIGO SAÚDE e a
              senha de acesso recebida por SMS, para autorização e pagamento do atendimento
            </li>
          </ul>{' '}
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
