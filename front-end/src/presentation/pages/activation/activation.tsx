import Link from 'next/link'

import { Hero, Meta } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import S from './activation.module.scss'

const Activation = () => {
  return (
    <div>
      <main>
       <Meta
        title="Ativação do Cartão - Cartão Amigo Saúde"
        description="Ative seu Cartão Amigo Saúde e comece a usufruir de todos os benefícios e descontos em saúde. Processo rápido e simples para começar a economizar."
        keywords="ativação cartão, Cartão Amigo Saúde, ativar benefícios, descontos saúde, processo de ativação, começar a usar"
      />
      <Hero imageUrl={IMAGE.DOIS_HOMENS_ACORDO.src} text="Ativação do Cartão" />
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
      </main>
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
        <Link
          href="https://api.whatsapp.com/send?phone=5519989512404&text=Ol%C3%A1,%20tudo%20bem?%20Estava%20no%20site%20de%20voc%C3%AAs%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida."
          target="_blank"
        >
          <img src={IMAGE.ICONE_WHATSAPP.src} alt="WhatsApp" style={{ width: '80px', height: '80px', borderRadius: '50%', boxShadow: '2px 2px 10px rgba(0,0,0,0.3)' }} />
        </Link>
      </div>
    </div>
  )
}

export default Activation
