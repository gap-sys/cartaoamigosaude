import { Hero } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import S from './life-insurance.module.scss'

const LifeInsurance = () => {
  return (
    <div>
      <Hero imageUrl={IMAGE.SEGURO_DE_VIDA.src} text="Seguro de vida" />
      <div className={S.container}>
        {/* Card 1 */}
        <div className={S.card}>
          <h3>SEGURO COM COBERTURAS DE MORTE POR ACIDENTE E INVALIDEZ PERMANENTE E TOTAL POR ACIDENTE – IPTA</h3>
          <p>
            <strong>Definição do Seguro:</strong> É uma proteção ao Titular que tem como objetivo indenizar a família ou
            o próprio segurado em casos de morte por acidente ou invalidez por acidentes
          </p>
          <p>
            As coberturas do Seguro previsto neste item são garantidas pela seguradora América Seguros CNPJ
            16.965.518/0001-08
          </p>
          <p>
            <strong>Carência:</strong> Não há carência.
          </p>
          <p>
            A adesão será compulsória aos Clientes que aderirem ao plano Cartão Amigo Saúde que contenha o benefício do
            Seguro, tratando-se de um seguro não-contributário. O Cliente terá garantido o pagamento de uma indenização
            ou a seu(s) beneficiário(s), caso venha a ocorrer um dos eventos cobertos pelo seguro, desde que previsto
            nas condições e cláusulas descritas e esteja de acordo com as coberturas contratadas.
          </p>
          <p>
            O Cliente estará segurado para os seguintes riscos, não podendo ultrapassar ao limite máximo de indenização
            de R$10.000,00:
          </p>
          <p>
            <strong>a) Morte Decorrente de Acidente:</strong> Cobertura caso o Cliente venha a falecer em consequência
            de acidente pessoal coberto;
          </p>
          <p>
            <strong>b) Invalidez Permanente Total por Acidente:</strong> Cobertura em caso do Cliente ter perda total,
            redução ou impotência funcional definitiva dos membros ou órgãos, em decorrência de lesão física sofrida
            pelo Cliente, em caráter permanente, em consequência de acidente pessoal coberto.
          </p>
        </div>

        {/* Card 2 */}
        <div className={S.card}>
          <p>
            A invalidez permanente deve ser comprovada através de declaração médica apresentada à seguradora. A
            aposentadoria por invalidez concedida por instituições oficiais de previdência, ou assemelhados, não
            caracteriza por si só o estado de invalidez permanente. A seguradora se reserva o direito de submeter o
            segurado a exames médicos, ou a outros complementares, por profissionais de sua indicação para comprovar a
            ocorrência de invalidez, o seu caráter permanente, sua extensão e grau.
          </p>

          <p>
            <strong>Beneficiários:</strong>
          </p>
          <p>
            Para a cobertura de IPTA: o próprio cliente ou, na impossibilidade deste receber, será a pessoa designada
            por lei para tal finalidade;
          </p>
          <p>Para a cobertura de Morte Acidental: os herdeiros legais.</p>

          <p>
            <strong>Elegibilidade:</strong>
          </p>
          <ul>
            <li>As indenizações por Invalidez Permanente por Acidente e Morte Acidental não se acumulam;</li>
            <li>
              Se depois de pagar indenização por invalidez permanente por acidente, verificar-se a morte do Cliente, em
              consequência do mesmo acidente, a importância já paga por invalidez permanente deve ser deduzida do valor
              do capital segurado por morte. Nestes casos, o beneficiário terá direito à indenização por morte,
              deduzidos os valores pagos pela invalidez permanente, mesmo se o seguro já estiver cancelado em razão da
              indenização por invalidez permanente total.
            </li>
          </ul>

          <p>
            Ocorrendo um sinistro que possa acarretar a responsabilidade da Seguradora, deverá ser comunicado através do
            Aviso de Sinistro, em carta registrada, telegrama, ou telefax dirigido à Seguradora ou a seu representante
            legal.
          </p>

          <p>
            <strong>AVISO DE SINISTRO –</strong> É a comunicação formal específica de uma reclamação de terceiros,
            efetuada durante o período de vigência da apólice, ou Prazo Complementar ou Prazo Suplementar (se
            aplicável), que o segurado é obrigado a fazer à Seguradora para dar a esta, conhecimento imediato da
            ocorrência do sinistro e deverá ser feito na central de atendimento da América Seguros –{' '}
            <strong>0800 323 5084</strong>
          </p>

          <p>
            <strong>Franquia:</strong>
          </p>
          <p>Para as coberturas de Morte e Invalidez Permanente Total por Acidente não há franquia.</p>

          <p>
            <strong>Vigência:</strong>
          </p>
          <p>A vigência do Seguro estará atrelada a vigência do CARTÃO AMIGO SAÚDE</p>
          <p>
            Serão elegíveis ao seguro todos os proponentes que na data de adesão do Seguro, seja apurada idade máxima de
            70 anos incompletos.
          </p>
          <p>Para as coberturas de Morte e Invalidez Permanente Total por Acidente não há franquia.</p>

          <p>
            O Cliente e seus beneficiários devem consultar a Condição Geral do Seguro tratado neste item para tomar
            ciência dos riscos cobertos e excluídos de cada cobertura e documentação a ser apresentada em caso de
            sinistro disponível no site{' '}
            <a href="http://cartaoamigosaude.com.br/" target="_blank" rel="noopener noreferrer">
              http://cartaoamigosaude.com.br/
            </a>{' '}
            ou via telefone <strong>0800 323 5084</strong>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LifeInsurance
