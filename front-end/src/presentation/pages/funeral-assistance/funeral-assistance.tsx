import React from 'react'
import { Hero, Meta, Button } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'
import S from './funeral-assistance.module.scss'

export const FuneralAssistance: React.FC = () => {
  return (
    <div>
      <Meta
        title="Auxílio Funeral | Cartão Amigo Saúde"
        description="Conheça o benefício de Auxílio Funeral do Cartão Amigo Saúde. Assistência completa em momentos difíceis com cobertura nacional."
        keywords="auxílio funeral, cartão amigo saúde, assistência funeral, sepultamento, cremação"
      />
      <Hero imageUrl={IMAGE.FUNERAL.src} text="Auxílio Funeral" />
      <div className={S.container}>
        <div className={S.card}>
          <h2>Regulamento Completo</h2>
          <p>
            Para consultar o regulamento completo do benefício de Auxílio Funeral, clique no botão abaixo:
          </p>
          <div className={S.buttonContainerLeft}>
            <Button 
              typeStyle="btn1" 
              label="Ver Regulamento Completo (PDF)" 
              onClick={() => window.open('/Funeral Assist Jul_25.pdf', '_blank')}
              width="310px"
            />
          </div>
        </div>

        <div className={S.card}>
          <h2>Objetivo do Serviço</h2>
          <p>
            O Auxílio Funeral oferece assistência completa e especializada em momentos de luto, proporcionando 
            suporte integral para os procedimentos funerários através de uma rede credenciada nacional, 
            garantindo dignidade e tranquilidade para a família enlutada.
          </p>
        </div>

        <div className={S.card}>
          <h2>Beneficiários do Serviço</h2>
          <p>
            O benefício é destinado ao titular do Cartão Amigo Saúde e seus dependentes legais, incluindo:
          </p>
          <ul>
            <li>Cônjuge ou companheiro(a) em união estável</li>
            <li>Filhos solteiros até 21 anos de idade</li>
            <li>Filhos solteiros até 24 anos se universitários</li>
            <li>Filhos inválidos de qualquer idade</li>
            <li>Pais do titular (mediante comprovação de dependência econômica)</li>
          </ul>
          <p>
            O serviço está disponível em todo território nacional, conforme cobertura da rede credenciada.
          </p>
        </div>

        <div className={S.card}>
          <h2>Valor de Reembolso</h2>
          <p>
            O Cartão Amigo Saúde oferece reembolso de até <strong>R$ 3.500,00 (três mil e quinhentos reais)</strong> 
            para despesas com serviços funerários, mediante apresentação de notas fiscais e comprovantes válidos.
          </p>
          <p>
            O reembolso será processado em até 30 (trinta) dias úteis após a entrega completa da documentação 
            exigida e aprovação da análise.
          </p>
        </div>

        <div className={S.card}>
          <h2>Serviços Cobertos</h2>
          <p>O Auxílio Funeral cobre os seguintes serviços e produtos:</p>
          <ul>
            <li>Caixão ou urna funerária</li>
            <li>Ornamentação e flores</li>
            <li>Velas e paramentos</li>
            <li>Transporte do corpo (dentro do município)</li>
            <li>Preparação e conservação do corpo</li>
            <li>Documentação necessária (certidões, alvarás)</li>
            <li>Taxa de sepultamento ou cremação</li>
            <li>Coroa de flores</li>
            <li>Livro de presença</li>
            <li>Serviços de tanatopraxia básica</li>
          </ul>
        </div>

        <div className={S.card}>
          <h2>Condições de Utilização</h2>
          <p>
            <strong>Carência:</strong> O benefício possui carência de 180 (cento e oitenta) dias corridos 
            a partir da data de adesão ao Cartão Amigo Saúde, exceto em casos de morte por acidente.
          </p>
          <p>
            <strong>Morte por acidente:</strong> Não há carência para óbitos decorrentes de acidentes, 
            desde que ocorram após 24 horas da adesão ao cartão.
          </p>
          <p>
            <strong>Limite anual:</strong> O benefício pode ser utilizado quantas vezes necessário durante 
            a vigência do cartão, respeitando o valor máximo de reembolso por evento.
          </p>
        </div>

        <div className={S.card}>
          <h2>Procedimento para Solicitação</h2>
          <p>
            Para solicitar o Auxílio Funeral, siga os seguintes passos:
          </p>
          <ol>
            <li>Entre em contato imediatamente com a Central de Atendimento: <strong>0800 878 0000</strong></li>
            <li>Informe o número do cartão e dados do beneficiário falecido</li>
            <li>Receba orientações sobre a rede credenciada mais próxima</li>
            <li>Guarde todas as notas fiscais e comprovantes de pagamento</li>
            <li>Envie a documentação completa para análise e reembolso</li>
          </ol>
          <p>
            <strong>Atendimento 24 horas:</strong> A Central de Atendimento funciona 24 horas por dia, 
            7 dias por semana, incluindo feriados.
          </p>
        </div>

        <div className={S.card}>
          <h2>Documentação Necessária</h2>
          <p>Para solicitar o reembolso, é necessário apresentar:</p>
          <ul>
            <li>Certidão de óbito original</li>
            <li>Cópia do RG e CPF do falecido</li>
            <li>Cópia do cartão Amigo Saúde</li>
            <li>Notas fiscais originais dos serviços funerários</li>
            <li>Comprovantes de pagamento</li>
            <li>Formulário de solicitação de reembolso preenchido</li>
            <li>Dados bancários para depósito (conta corrente ou poupança)</li>
          </ul>
        </div>

        <div className={S.card}>
          <h2>Exclusões de Cobertura</h2>
          <p>O Auxílio Funeral não cobre:</p>
          <ul>
            <li>Óbitos decorrentes de suicídio nos primeiros 24 meses de vigência</li>
            <li>Morte em decorrência de guerra, motim ou comoção civil</li>
            <li>Sepultamentos em jazigos perpétuos ou particulares</li>
            <li>Transporte do corpo para outras cidades (exceto se contratado à parte)</li>
            <li>Serviços não relacionados diretamente ao funeral</li>
            <li>Despesas com alimentação ou hospedagem de familiares</li>
            <li>Missas, cultos ou cerimônias religiosas</li>
            <li>Lápides, monumentos ou ornamentações permanentes</li>
          </ul>
        </div>

        <div className={S.card}>
          <h2>Rede Credenciada</h2>
          <p>
            O Cartão Amigo Saúde possui uma ampla rede de funerárias credenciadas em todo o Brasil, 
            oferecendo atendimento de qualidade e preços diferenciados para os beneficiários.
          </p>
          <p>
            Para localizar a funerária credenciada mais próxima, entre em contato com a Central de 
            Atendimento ou consulte o aplicativo Cartão Amigo Saúde.
          </p>
        </div>

        <div className={S.card}>
          <h2>Disposições Gerais</h2>
          <p>
            Este regulamento está sujeito a alterações mediante aviso prévio de 30 (trinta) dias aos 
            titulares do Cartão Amigo Saúde.
          </p>
          <p>
            O benefício está condicionado à adimplência das mensalidades do Cartão Amigo Saúde e ao 
            cumprimento das condições estabelecidas neste regulamento.
          </p>
          <p>
            Em caso de dúvidas ou necessidade de esclarecimentos adicionais, entre em contato com a 
            Central de Atendimento do Cartão Amigo Saúde.
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
