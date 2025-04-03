import { Hero, Meta } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import S from './funeral-assistance.module.scss'

const FuneralAssistance = () => {
  return (
    <div>
      <Meta
        title="Assistência Funeral - Cartão Amigo Saúde"
        description="O Cartão Amigo Saúde oferece reembolso de até R$ 3.000,00 em despesas funerárias. Saiba como funciona o benefício, quem tem direito e como solicitar de forma simples e segura."
        keywords="assistência funeral, reembolso funeral, Cartão Amigo Saúde, benefício funeral, despesas funerárias, auxílio funeral, morte do titular"
      />
      <Hero imageUrl={IMAGE.FUNERAL.src} text="Assistência Funeral" />
      <div className={S.container}>
        <div className={S.card}>
          <h2>Objetivo do Serviço</h2>
          <p>
            O Auxílio Funeral é um benefício oferecido pelo Cartão Amigo Saúde, destinado a reembolsar as despesas
            funerárias realizadas pela família do titular do cartão, até o valor máximo de R$ 3.000,00 (três mil reais),
            mediante apresentação de documentação comprobatória.
          </p>
        </div>

        <div className={S.card}>
          <h2>Beneficiários do Serviço</h2>
          <p>
            2.1. O benefício é exclusivo para o titular do Cartão Amigo Saúde e será disponibilizado aos seus
            dependentes legais (cônjuge, filhos, ou parentes designados legalmente) após o falecimento do titular.
          </p>
          <p>2.2. Apenas um reembolso será concedido por titular.</p>
          <p>
            2.3. Períodos de Carência: O benefício estará disponível após 120 (cento e vinte) dias da aquisição do
            Programa Cartão Amigo Saúde.
          </p>
          <p>2.4. Idade para Ingresso: O benefício está disponível para pessoas com idade entre 18 e 75 anos.</p>
        </div>

        <div className={S.card}>
          <h2>Valor do Reembolso</h2>
          <p>3.1. O valor máximo reembolsável é de R$ 3.000,00 (três mil reais).</p>
          <p>
            3.2. O reembolso será limitado às despesas comprovadas por meio de notas fiscais emitidas em nome de um
            familiar ou responsável indicado.
          </p>
        </div>

        <div className={S.card}>
          <h2>Condições para Solicitação do Reembolso</h2>
          <p>4.1. Para solicitar o reembolso, os familiares devem apresentar:</p>
          <ul>
            <li>Certidão de óbito do titular;</li>
            <li>
              Notas fiscais originais das despesas funerárias (exemplo: caixão, velório, cremação, transporte, entre
              outros);
            </li>
            <li>Documento de identificação do solicitante (RG ou CPF);</li>
            <li>Comprovante de vínculo familiar ou designação legal (se necessário).</li>
          </ul>
          <p>4.2. As notas fiscais devem conter:</p>
          <ul>
            <li>Nome e CNPJ da empresa prestadora do serviço;</li>
            <li>Descrição detalhada dos serviços contratados;</li>
            <li>Data compatível com o óbito do titular.</li>
          </ul>
        </div>

        <div className={S.card}>
          <h2>Procedimento para Solicitação</h2>
          <p>
            5.1. A solicitação de reembolso deve ser feita na Central de Atendimento Cartão Amigo Saúde ou pelo canal
            oficial indicado no site/app.
          </p>
          <p>
            5.2. O prazo para entrada no pedido de reembolso é de até 90 (noventa) dias após o falecimento do titular.
          </p>
          <p>
            5.3. O prazo de análise e processamento do reembolso é de até 30 (trinta) dias úteis, contados a partir do
            envio completo da documentação exigida.
          </p>
        </div>

        <div className={S.card}>
          <h2>Exclusões de Cobertura</h2>
          <p>O reembolso não será concedido em casos de:</p>
          <ul>
            <li>
              6.1. Falta de comprovação das despesas (notas fiscais incompatíveis, ilegíveis ou sem validade jurídica);
            </li>
            <li>6.2. Despesas realizadas fora do território nacional;</li>
            <li>6.3. Solicitações fora do prazo estabelecido neste regulamento;</li>
            <li>6.4. Serviços funerários contratados antes da ativação do Cartão Amigo Saúde.</li>
            <li>6.5. Em caso de inadimplência das mensalidades do benefício.</li>
          </ul>
        </div>

        <div className={S.card}>
          <h2>Disposições Gerais</h2>
          <p>
            7.1. Este regulamento está sujeito a alterações mediante aviso prévio de 30 (trinta) dias aos titulares do
            Cartão Amigo Saúde.
          </p>
          <p>
            7.2. O reembolso será realizado exclusivamente na conta bancária indicada pelo solicitante e devidamente
            validada pela empresa.
          </p>
          <p>
            7.3. Para dúvidas ou informações adicionais, entre em contato com a Central de Atendimento do Cartão Amigo
            Saúde.
          </p>
          <p>
            <strong>Cartão Amigo Saúde</strong>
            <br />
            Cuidando de você e da sua família em todos os momentos.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FuneralAssistance
