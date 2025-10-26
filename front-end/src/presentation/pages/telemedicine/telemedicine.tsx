import { Hero, Meta } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'
import { IconInfoCircle, IconClipboardList, IconCircleCheck } from '@tabler/icons-react'

import S from './telemedicine.module.scss'

const Telemedicine = () => {
  return (
    <div className={S.page}>
      <Meta
        title="Telemedicina - Cartão Amigo Saúde"
        description="Atendimento médico online para condições clínicas de menor gravidade. Agende sua consulta por vídeo com o Cartão Amigo Saúde e tenha acesso rápido, seguro e gratuito ao Clínico Geral."
        keywords="telemedicina, consulta online, atendimento por vídeo, médico remoto, Cartão Amigo Saúde, saúde digital, agendamento online"
      />
      <div className={S.heroSpacer}>
        <Hero imageUrl={IMAGE.TELEMEDICINA_MULHER.src} text="Telemedicina" fullWidth />
      </div>
      <div className={S.container}>
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconInfoCircle size={20} className={S.titleIcon} />
            <h2>Informações Importantes</h2>
          </div>
          <p>
            TRATA-SE DE UM SERVIÇO QUE NÃO REPRESENTA OU SUBSTITUI UMA CONSULTA MÉDICA PRESENCIAL PARA TRATAMENTOS DE
            SINTOMAS/CONDIÇÕES CLÍNICAS DE MAIOR GRAVIDADE, COMO POR EXEMPLO HEMORRAGIAS, FRATURAS ÓSSEAS, INFARTOS,
            ANEURISMAS ENTRE OUTRAS ENFERMIDADES CONSIDERADAS GRAVES
          </p>
          <p>
            Definição de Telemedicina: Consultas realizadas a distância (por videoconferência), para avaliação de
            condições clínicas de menor gravidade e/ou complexidade, com a finalidade de assistência, prevenção de
            doenças e lesões e promoção da saúde e do bem-estar.
          </p>
          <p>
            O Cliente será informado pelo médico acerca de todas as limitações inerentes ao uso da telemedicina, tendo
            em vista a impossibilidade de realização de exame físico durante a consulta.
          </p>
        </div>
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconInfoCircle size={20} className={S.titleIcon} />
            <h2>Condições do Serviço</h2>
          </div>
          <p>Carência: 2 (dois) dias úteis após a ativação do Cartão Virtual CARTÃO AMIGO SAÚDE.</p>
          <p>Retorno: sem custo se marcado pelo médico dentro do prazo de 15 dias da realização da Consulta.</p>
          <p>
            Este serviço de Telemedicina estará disponível para o Cliente enquanto estiver permitido pela Agência
            Nacional de Saúde – ANS e/ou pelo Conselho Federal de Medicina – CFM;
          </p>
          <p>
            TELEMEDICINA SEM CARGA/RECARGA: Cliente não arcará com o pagamento da Consulta que será na especialidade
            Clínico Geral.
          </p>
          <p>
            Caso o Cliente entre na fila e não compareça, será considerado como falta e após a terceira falta o
            serviço não estará mais disponível. Cada Cliente terá o direito a 3 (três) faltas.
          </p>
        </div>
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconClipboardList size={20} className={S.titleIcon} />
            <h2>Como utilizar</h2>
          </div>
          <p>Para utilização do serviço de Telemedicina sem Carga/Recarga com agendamento o Cliente deverá:</p>
          <ul className={S.list}>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Clicar em “AGENDAR” consultas, exames, dentistas, e mais…</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Selecionar para quem é o agendamento, titular ou dependentes.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Clicar no quadro “Consulta por vídeo”.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Aguardar o contato para prosseguimento no atendimento.</span>
            </li>
          </ul>
          <p>
            Em caso de necessidade de reagendamento, é de responsabilidade do Cliente cancelar o atendimento com até 24
            (vinte e quatro) horas antes do horário agendado. O cancelamento e o reagendamento deverão ser solicitados
            via Central de Atendimento Cartão Amigo Saúde. Caso o Cliente faça o agendamento e não compareça no horário
            marcado, será considerado como falta e após a terceira falta o serviço não estará mais disponível.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Telemedicine
