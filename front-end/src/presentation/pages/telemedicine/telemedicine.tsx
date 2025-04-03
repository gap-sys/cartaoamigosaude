import { Hero, Meta } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import S from './telemedicine.module.scss'

const Telemedicine = () => {
  return (
    <div>
      <Meta
        title="Telemedicina - Cartão Amigo Saúde"
        description="Atendimento médico online para condições clínicas de menor gravidade. Agende sua consulta por vídeo com o Cartão Amigo Saúde e tenha acesso rápido, seguro e gratuito ao Clínico Geral."
        keywords="telemedicina, consulta online, atendimento por vídeo, médico remoto, Cartão Amigo Saúde, saúde digital, agendamento online"
      />
      <Hero imageUrl={IMAGE.TELEMEDICINA_MULHER.src} text="Telemedicina" />
      <div className={S.container}>
        <div className={S.card}>
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
          <p>
            É de responsabilidade do Cliente acessar a plataforma na data e horário agendados previamente (com limite
            máximo de 5 (cinco) minutos de tolerância de atraso), com uma conexão estável de internet. A duração da
            consulta online não terá limite de horário, e durante o atendimento o Cliente poderá enviar arquivos e
            receber arquivos do médico, tais como, atestados, pedidos de exames e prescrições médicas;
          </p>
        </div>
        <div className={S.card}>
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
            Caso o Cliente entre na fila de e não compareça, será considerado como falta e após a terceira falta o
            serviço não estará mais disponível. Cada Cliente terá o direito a 3 (três) faltas
          </p>
        </div>
        <div className={S.card}>
          <p>Para utilização do serviço de Telemedicina sem Carga/Recarga com agendamento o Cliente deverá:</p>
          <ul>
            <li>
              1 – Clicar no botão “AGENDAR” consultas, exames, dentistas, e mais…;
              <br />
            </li>
            <li> 2 – Selecionar para quem é o agendamento, titular ou dependentes;</li>
            <li> 3 – Clicar no quadro “Consulta por vídeo”;</li>
            <li> 4 – Aguardar o contato para prosseguimento no atendimento</li>
          </ul>
          <p>
            Em caso de necessidade de reagendamento, é de responsabilidade do Cliente cancelar o atendimento com até 24
            (vinte e quatro) horas antes do horário agendado. O cancelamento e o reagendamento deverão ser solicitados
            via Central de Atendimento Cartão Amigo Saúde. Caso o Cliente faça o agendamento e não compareça no horário
            marcado, será considerado como falta e após a terceira falta o serviço não estará mais disponível
          </p>
        </div>
      </div>
    </div>
  )
}

export default Telemedicine
