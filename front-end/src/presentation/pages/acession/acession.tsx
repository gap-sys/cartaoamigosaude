import { Hero, Meta } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import S from './acession.module.scss'

const Acession = () => {
  return (
    <div>
       <Meta
        title="Contrato de Adesão - Cartão Amigo Saúde"
        description="Leia o contrato completo de adesão ao Cartão Amigo Saúde. Entenda os direitos, deveres e condições para utilização dos serviços e benefícios oferecidos."
        keywords="contrato de adesão, Cartão Amigo Saúde, termos e condições, benefícios saúde, regulamento, cláusulas, obrigações do cliente, direitos do aderente"
      />

      <Hero imageUrl={IMAGE.ADESAO.src} text="Contrato de Adesão" />
      <div className={S.container}>
        <p className={S.pFirst}>
          <strong>Artigo 1º:</strong> Por meio deste contrato, o ADERENTE anui à adesão ao CARTÃO AMIGO SAÚDE,
          proporcionando acesso a uma ampla Rede Credenciada e Convênios em diversas áreas de saúde, tais como consultas
          médicas, exames clínicos, tratamentos odontológicos, telemedicina, seguros, assistência funerária, entre
          outros.
        </p>
        <p>O Programa Cartão Amigo, administrado pelo CARTÃO AMIGO SAÚDE, é regido pelo Regulamento anexo.</p>
        <ul>
          <li>
            <strong>1º:</strong> Fica o ADERENTE ciente de que o CARTÃO AMIGO SAÚDE não é plano de saúde e que o
            CONTRATADO não garante e não se responsabiliza pelos resultados dos serviços oferecidos pelos conveniados e
            pelo pagamento das despesas, nem assegura desconto em todos os serviços obrigatoriamente garantidos por
            plano de saúde.
          </li>
          <li>
            <strong>2º:</strong> De forma em que todos os serviços utilizados devem ter indicação médica ou técnica
            especializada e tudo que o cliente usar ou comprar deverá ser pago por ele pago diretamente aos prestadores
            de serviços, assegurando-se apenas os preços e descontos que constam na relação de empresas e serviços
            conveniados divulgados no site <i> www.cartaoamigosaude.com.br</i>
          </li>
          <li>
            <strong>3º:</strong> Fica o ADERENTE ciente de que o Cartão AMIGO SAÚDE não se responsabiliza pela qualidade
            técnica e profissional dos serviços prestados pelas empresas conveniadas, bem como pelo recebimento dos
            valores estabelecidos pelas mesmas.
          </li>
          <li>
            <strong>4º:</strong> O ADERENTE declara ter recebido, no momento da celebração do presente Contrato de
            Adesão o Regulamento do Programa Cartão Amigo e que está ciente de que a ADMINISTRADORA DE CARTÃO AMIGO
            SAÚDE LTDA se reserva o direito de alteração e atualização dos serviços e parceiros oferecidos independente
            de prévia notificação ao ADERENTE.
          </li>
          <li>
            <strong>5º:</strong> O ADERENTE reconhece a possibilidade de alterações nos serviços e parceiros oferecidos,
            comprometendo-se a manter-se informado por meio do site.
          </li>
        </ul>

        <p>
          <strong>Artigo 2º:</strong> Este contrato concede ao ADERENTE e seus dependentes (cônjuge e filhos até 21
          anos, limitado ao Titular mais 4 dependentes) o acesso às empresas conveniadas. Para a utilização dos serviços
          previstos neste Regulamento pelos dependentes, estes deverão utilizar o mesmo número do cartão do Titular. O
          cadastramento deve ser efetuado no momento do agendamento do serviço, juntamente com a ativação do Cartão
          Virtual CARTÃO AMIGO.
        </p>
        <ul>
          <li>
            <strong>1º:</strong> O ADERENTE tem a facilidade de efetuar a carga/recarga de seu Cartão Virtual CARTÃO
            AMIGO por meio dos Canais de Comunicação do Cliente, utilizando cartão de crédito, boleto bancário ou PIX.
          </li>
          <li>
            <strong>2º:</strong> O status ativo do Cartão é garantido somente ao ADERENTE que efetuar o pagamento da 1ª
            mensalidade e estiver rigorosamente em dia com suas obrigações financeiras junto à CARTÃO AMIGO SAÚDE.
          </li>
          <li>
            <strong>3º:</strong> Como vantagem adicional, o titular ADERENTE, rigorosamente adimplente, maior de 18 anos
            e com menos de 74 anos no ato da adesão, após quitar o mínimo de 4 mensalidades, tem direito ao Auxílio
            Funeral no valor de até R$ 3.000,00 e ao seguro de vida de até R$10.000,00 em caso de morte acidental ou
            invalidez permanente total por acidente, com vigência até 31/12 do ano de assinatura deste contrato, podendo
            ser prorrogado a critério da CARTÃO AMIGO SAÚDE, com comunicação em jornal de grande circulação em caso de
            não prorrogação.
          </li>
          <li>
            <strong>4º:</strong> Fica estabelecido que o seguro é garantido pela seguradora Ezze Seguros S.A. (CNPJ
            31.534.848/0001-24) e está sujeito à análise de risco.
          </li>
          <li>
            <strong>5º:</strong> Ao celebrar este Contrato, o ADERENTE concorda com o fornecimento de seus dados
            pessoais dentre os quais seu nome, CPF, endereço e telefone, assim como os de seus dependentes e concorda
            expressamente, nos termos da Lei Geral de Proteção de Dados, no tratamento destes dados para informação aos
            parceiros do CARTÃO AMIGO SAÚDE e concessão dos descontos contratados, para realização de cobranças, e para
            envio de publicidades com descontos de interesse do ADERENTE ao CARTÃO AMIGO SAÚDE, autorizando seu uso para
            os fins da contratação, conforme legislação de proteção de dados.
          </li>
        </ul>

        <p>
          <strong>Artigo 3º:</strong> O ADERENTE assume o compromisso de pagar o CARTÃO AMIGO SAÚDE, a partir da
          assinatura deste contrato, o valor mensal contratado, optando por boleto bancário, PIX, cartão de crédito ou
          pagamento direto na sede da CARTÃO AMIGO SAÚDE.
        </p>
        <ul>
          <li>
            <strong>1º:</strong> Além da 1ª mensalidade, o ADERENTE paga, no ato da adesão, a Taxa de Emissão do Cartão
            de Identificação, que não se confunde com a 1ª mensalidade.
          </li>
          <li>
            <strong>2º:</strong> O pagamento da 1ª mensalidade, da Taxa de Emissão e a escolha da forma de arrecadação
            viabilizam os pagamentos mensais e a disponibilização dos serviços contratados.
          </li>
          <li>
            <strong>3º:</strong> A responsabilidade de manter o cadastro atualizado e informar sobre alterações recai
            inteiramente sobre o ADERENTE.
          </li>
          <li>
            <strong>4º:</strong> O reajuste anual da mensalidade, mencionado no caput, ocorre em janeiro de cada ano,
            baseado no IGPM integral da FGV do ano anterior, com aviso prévio de 30 dias.
          </li>
          <li>
            <strong>5º:</strong> A CARTÃO AMIGO SAÚDE não se responsabiliza por informações prestadas pelo ADERENTE no
            momento da assinatura do contrato e reserva-se o direito de regresso em caso de fraude ou dolo e/ou culpa.
          </li>
        </ul>

        <p>
          <strong>Artigo 4º:</strong> O ADERENTE compreende que o CARTÃO AMIGO SAÚDE não é um plano de saúde, assumindo
          a responsabilidade pelos pagamentos diretos aos prestadores de serviços, conforme os termos estabelecidos no
          contrato.
        </p>

        <p>
          <strong>Artigo 5º:</strong> O ADERENTE compromete-se a manter seus dados cadastrais atualizados junto à
          CONTRATADA para fins de cobranças e notificações e compromete-se a disponibilizar cópia dos documentos que
          forem solicitados pela CONTRATADA, declarando a veracidade/regularidade dos documentos e informações
          apresentados, assumindo toda e qualquer responsabilidade por qualquer incorreção das informações. A CONTRATADA
          não é responsável em qualquer hipótese direta ou indiretamente por qualquer ato do ADERENTE, incluindo ilícito
          relacionado a eventual fraude.
        </p>

        <p>
          <strong>Artigo 6º:</strong> Ao assinar este contrato, o ADERENTE declara compreender todas as cláusulas,
          termos e condições, incluindo o Regulamento do Programa Cartão Amigo.
        </p>

        <p>
          <strong>Artigo 7º:</strong> A CONTRATADA assume a responsabilidade pela implementação de medidas de segurança,
          técnicas e administrativas, garantindo a proteção dos dados pessoais contra acessos não autorizados,
          destruição, perda, alteração ou tratamento inadequado.
        </p>

        <p>
          <strong>Artigo 8º:</strong> O ADERENTE obriga-se a tomar todas as precauções necessárias a fim de evitar que
          terceiros utilizem o serviço em seu nome. O ADERENTE concorda em responsabilizar-se pelas transações
          comerciais e pagamentos feitos em seu nome por terceiros, ainda que sem sua autorização, isentando a
          CONTRATADA de qualquer ato praticado por terceiro que tenha tido acesso à senha ou a outros dados do ADERENTE.
        </p>

        <p>
          <strong>Artigo 9º:</strong> Este contrato tem prazo de vigência de 12 (doze) meses, contados a partir da
          adesão pelo ADERENTE sob pena da cobrança de multa no importe do valor correspondente 50% das mensalidades
          restantes até o final do contrato; e será renovado automaticamente por prazo indeterminado, após o período
          inicial de vigência, salvo manifestação em terá de ser formulada presencialmente com 30 (trinta) dias de
          antecedência ao término do período inicial de vigência.
        </p>

        <p>
          <strong>Artigo 10:</strong> Em caso de inadimplência incidirá juros de 1% ao mês a título de juros e multa de
          2% sobre o saldo devedor.
        </p>

        <p>
          <strong>Artigo 11:</strong> O Aderente Inadimplente fica obrigado ao pagamento das despesas judiciais e
          extrajudiciais à contratada, incluindo custas cartoriais, encargos judiciais e honorários advocatícios, dentre
          outros custos.
        </p>

        <p>
          <strong>Artigo 12:</strong> A guarda e uso do(s) cartão(ões) de descontos é responsabilidade única do
          BENEFICIÁRIO TITULAR/ADERENTE, que deverá utilizá-lo e conservá-lo para que somente quem figure como titular
          ou dependente do cartão AMIGO SAÚDE possa usufruir dos benefícios do mesmo. Em caso de mau uso ou empréstimo
          do cartão fornecido pela CONTRATADA, poderá o BENEFICIÁRIO TITULAR/ADERENTE ser civil e penalmente
          responsabilizado. E em caso de extravio, dano ou roubo do cartão o BENEFICIÁRIO deverá avisar à CONTRATADA
          imediatamente, e por escrito, bem como solicitar novo cartão, que terá um custo adicional para emissão de
          novo(s) cartão(ões).
        </p>

        <p>
          <strong>Artigo 13:</strong> Este documento pode ser assinado eletronicamente, mediante utilização de processo
          de certificação disponibilizado pela Infraestrutura de Chaves Pública Brasileira ICP-Brasil ou qualquer outro
          meio de comprovação de autoria e integridade de documentos em forma eletrônica, conforme a legislação
          aplicável. Parágrafo único: Na hipótese de assinatura eletrônica, as partes renunciam à possibilidade de
          exigir a troca, envio ou entrega das vias originais não-eletrônicas assinadas do instrumento, bem como
          renunciam ao direito de recusar ou contestar a validade das assinaturas eletrônicas, na medida máxima
          permitida pela legislação aplicável.
        </p>

        <p>
          <strong>Artigo 14:</strong> Os serviços aqui previstos a serem prestados pela CONTRATADA, limitam-se às áreas
          de administração e intermediação de benefícios, ficando esta isenta de responsabilidade civil e penal,
          decorrentes da relação paciente – médico, bem como isenta de todo e qualquer dano físico ou moral decorrente
          de procedimentos médicos e/ou que advenha de condenações judiciais ou administrativas motivadas.
        </p>

        <p>
          <strong>Artigo 15:</strong> As partes elegem o Foro da Comarca de São Pedro/SP para dirimir quaisquer
          disputas, renunciando expressamente a qualquer outro, por mais privilegiado que seja ou venha a ser. E, por
          estarem assim justas e contratadas, as partes firmam o presente contrato em 2 (duas) vias de Igual teor e para
          um só fim e efeito.
        </p>
      </div>
    </div>
  )
}

export default Acession
