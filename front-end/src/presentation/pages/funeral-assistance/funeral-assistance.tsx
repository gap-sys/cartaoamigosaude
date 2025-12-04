import { Button } from '../../components'
import Hero from '../../components/common/hero/hero'
import {
  IconBrandWhatsapp,
  IconPhoneCall,
  IconInfoCircle,
  IconUsers,
  IconCash,
  IconClipboardList,
  IconFileText,
  IconCircleCheck,
  IconAlertTriangle,
  IconCircleX,
} from '@tabler/icons-react'
import S from './funeral-assistance.module.scss'
import { IMAGE } from 'src/presentation/assets'

export const FuneralAssistance: React.FC = () => {
  const heroImageUrl = IMAGE.FUNERAL.src

  return (
    <div className={S.page}>
      <div className={S.heroSpacer}>
        <Hero imageUrl={heroImageUrl} text="Auxílio Funeral" fullWidth />
      </div>

      <div className={S.container}>
        {/* Objetivo do serviço */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconInfoCircle size={20} className={S.titleIcon} />
            <h2>Objetivo do Serviço</h2>
          </div>
          <p>
            O Auxílio Funeral oferece assistência completa e especializada em momentos de luto, proporcionando
            suporte integral para os procedimentos funerários através de uma rede credenciada nacional,
            garantindo dignidade e tranquilidade para a família enlutada.
          </p>
        </div>

        {/* Beneficiários do serviço */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconUsers size={20} className={S.titleIcon} />
            <h2>Beneficiários do Serviço</h2>
          </div>
          <p>
            O benefício é destinado ao titular do Cartão Amigo Saúde e seus dependentes legais, incluindo:
          </p>
          <ul className={S.list}>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Cônjuge ou companheiro(a) em união estável</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Filhos solteiros até 21 anos de idade</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Filhos solteiros até 24 anos se universitários</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Filhos inválidos de qualquer idade</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Pais do titular (mediante comprovação de dependência econômica)</span>
            </li>
          </ul>
          <p>
            O serviço está disponível em todo território nacional, conforme cobertura da rede credenciada.
          </p>
        </div>

        {/* Valor de reembolso */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconCash size={20} className={S.titleIcon} />
            <h2>Valor de Reembolso</h2>
          </div>
          <p>
            O Cartão Amigo Saúde oferece reembolso de até <strong>R$ 3.000,00 (três mil reais)</strong>
            para despesas com serviços funerários, mediante apresentação de notas fiscais e comprovantes válidos.
          </p>
          <p>
            O reembolso será processado em até 30 (trinta) dias úteis após a entrega completa da documentação
            exigida e aprovação da análise.
          </p>
        </div>

        {/* Serviços Cobertos */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconClipboardList size={20} className={S.titleIcon} />
            <h2>Serviços Cobertos</h2>
          </div>
          <p>O Auxílio Funeral cobre os seguintes serviços e produtos:</p>
          <ul className={S.list}>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Caixão ou urna funerária</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Ornamentação e flores</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Velas e paramentos</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Transporte do corpo (dentro do município)</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Preparação e conservação do corpo</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Documentação necessária (certidões, alvarás)</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Taxa de sepultamento ou cremação</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Coroa de flores</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Livro de presença</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Serviços de tanatopraxia básica</span>
            </li>
          </ul>
        </div>

        {/* Condições de Utilização */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconInfoCircle size={20} className={S.titleIcon} />
            <h2>Condições de Utilização</h2>
          </div>
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

        {/* Procedimento para solicitação */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconClipboardList size={20} className={S.titleIcon} />
            <h2>Procedimento para Solicitação</h2>
          </div>
          <p>
            Para solicitar o Auxílio Funeral, siga os seguintes passos:
          </p>
          <ol className={S.list}>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Entre em contato imediatamente com a Central de Atendimento: <strong>0800 880 7515</strong></span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Informe o número do cartão e dados do beneficiário falecido</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Receba orientações sobre a rede credenciada mais próxima</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Guarde todas as notas fiscais e comprovantes de pagamento</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Envie a documentação completa para análise e reembolso</span>
            </li>
          </ol>
          <p>
            <strong>Atendimento 24 horas:</strong> A Central de Atendimento funciona 24 horas por dia,
            7 dias por semana, incluindo feriados.
          </p>
        </div>

        {/* Documentação necessária */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconFileText size={20} className={S.titleIcon} />
            <h2>Documentação Necessária</h2>
          </div>
          <p>Para solicitar o reembolso, é necessário apresentar:</p>
          <ul className={S.list}>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Certidão de óbito original</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Cópia do RG e CPF do falecido</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Cópia do cartão Amigo Saúde</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Notas fiscais originais dos serviços funerários</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Comprovantes de pagamento</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Formulário de solicitação de reembolso preenchido</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Dados bancários para depósito (conta corrente ou poupança)</span>
            </li>
          </ul>
        </div>

        {/* Exclusões de cobertura */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconAlertTriangle size={20} className={S.titleIconDanger} />
            <h2 className={S.dangerTitle}>Exclusões de Cobertura</h2>
          </div>
          <p className={S.sectionSubtitle}>O Auxílio Funeral não cobre:</p>
          <ul className={S.list}>
            <li className={S.listItem}>
              <IconCircleX size={18} className={S.iconCrossCircle} />
              <span>Óbitos decorrentes de suicídio nos primeiros 24 meses de vigência</span>
            </li>
            <li className={S.listItem}>
              <IconCircleX size={18} className={S.iconCrossCircle} />
              <span>Morte em decorrência de guerra, motim ou comoção civil</span>
            </li>
            <li className={S.listItem}>
              <IconCircleX size={18} className={S.iconCrossCircle} />
              <span>Sepultamentos em jazigos perpétuos ou particulares</span>
            </li>
            <li className={S.listItem}>
              <IconCircleX size={18} className={S.iconCrossCircle} />
              <span>Transporte do corpo para outras cidades (exceto se contratado à parte)</span>
            </li>
            <li className={S.listItem}>
              <IconCircleX size={18} className={S.iconCrossCircle} />
              <span>Serviços não relacionados diretamente ao funeral</span>
            </li>
            <li className={S.listItem}>
              <IconCircleX size={18} className={S.iconCrossCircle} />
              <span>Despesas com alimentação ou hospedagem de familiares</span>
            </li>
            <li className={S.listItem}>
              <IconCircleX size={18} className={S.iconCrossCircle} />
              <span>Missas, cultos ou cerimônias religiosas</span>
            </li>
            <li className={S.listItem}>
              <IconCircleX size={18} className={S.iconCrossCircle} />
              <span>Lápides, monumentos ou ornamentações permanentes</span>
            </li>
          </ul>
        </div>

        {/* Rede Credenciada */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconUsers size={20} className={S.titleIcon} />
            <h2>Rede Credenciada</h2>
          </div>
          <p>
            O Cartão Amigo Saúde possui uma ampla rede de funerárias credenciadas em todo o Brasil,
            oferecendo atendimento de qualidade e preços diferenciados para os beneficiários.
          </p>
          <p>
            Para localizar a funerária credenciada mais próxima, entre em contato com a Central de
            Atendimento ou consulte o aplicativo Cartão Amigo Saúde.
          </p>
        </div>

        {/* Disposições gerais */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconInfoCircle size={20} className={S.titleIcon} />
            <h2>Disposições Gerais</h2>
          </div>
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

        {/* Regulamento Completo */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconFileText size={20} className={S.titleIcon} />
            <h2>Regulamento Completo</h2>
          </div>
          <p>
            Para consultar o regulamento completo do benefício de Auxílio Funeral, clique no botão abaixo:
          </p>
          <div className={S.buttonContainer}>
            <Button
              typeStyle="btn2"
              label="Ver Regulamento Completo (PDF)"
              width="100%"
              iconLeft={<IconFileText size={18} />}
              onClick={() => window.open('/Funeral Individual JUL_25.pdf', '_blank')}
            />
          </div>
        </div>

        {/* Atendimento via WhatsApp */}
        <div className={S.card + ' ' + S.centerText}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.875rem' }}>
            <IconPhoneCall size={28} color="#12567A" />
          </div>
          <p>Em caso de dúvidas, fale com nossa equipe pelo WhatsApp.</p>
          <div className={S.buttonContainer}>
            <Button
              typeStyle="btn5"
              label="WhatsApp Atendimento"
              width="100%"
              iconLeft={<IconBrandWhatsapp size={18} />}
              onClick={() => window.open('https://api.whatsapp.com/send?phone=5519989512404&text=Ol%C3%A1,%20tudo%20bem?%20Estava%20no%20site%20de%20voc%C3%AAs%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida.', '_blank')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FuneralAssistance
