import { Button } from '../../components'
import Hero from '../../components/common/hero/hero'
import { IconCircleCheck, IconCircleX, IconFileText, IconPhoneCall, IconInfoCircle, IconUsers, IconCash, IconClipboardList, IconAlertTriangle } from '@tabler/icons-react'
import S from './funeral-assistance.module.scss'

export const FuneralAssistance: React.FC = () => {
  const heroImageUrl = 'https://images.unsplash.com/photo-1549388604-817d15aa0110?ixlib=rb-4.0.3&q=80&w=2670&auto=format&fit=crop'

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
            <h2>Objetivo do serviço</h2>
          </div>
          <p>
            O Auxílio Funeral é um benefício oferecido pelo Cartão Amigo Saúde, destinado a reembolsar as despesas
            funerárias realizadas pelo familiar titular do cartão, até o valor máximo de R$ 1.000,00 (mil reais), mediante
            apresentação de documentação comprobatória.
          </p>
        </div>

        {/* Beneficiários do serviço */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconUsers size={20} className={S.titleIcon} />
            <h2>Beneficiários do serviço</h2>
          </div>
          <ul className={S.list}>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>O benefício é vinculado ao titular do Cartão Amigo Saúde e será disponibilizado aos seus dependentes legais de 1º grau.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Não se enquadram como dependentes legais: cônjuge convivente, sob guarda ou curatelado.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Período de carência: o benefício estará disponível após 10 (dez) meses da adesão ao Programa Cartão Amigo Saúde.</span>
            </li>
          </ul>
        </div>

        {/* Valor de reembolso */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconCash size={20} className={S.titleIcon} />
            <h2>Valor de reembolso</h2>
          </div>
          <ul className={S.list}>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>O valor máximo reembolsável é de R$ 1.000,00 (mil reais).</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>O reembolso será efetuado exclusivamente para o titular do Cartão Amigo Saúde.</span>
            </li>
          </ul>
        </div>

        {/* Condições para solicitação do reembolso */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconFileText size={20} className={S.titleIcon} />
            <h2>Condições para solicitação do reembolso</h2>
          </div>
          <ul className={S.list}>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Certidão de óbito.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Notas fiscais que comprovem as despesas funerárias (ex.: caixão, velório, cremação, transporte, entre outros).</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Documento oficial com foto do solicitante (RG/CPF).</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Comprovante de dados bancários do solicitante (quando necessário).</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Assinatura do termo de consentimento.</span>
            </li>
          </ul>
        </div>

        {/* Procedimento para solicitação */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconClipboardList size={20} className={S.titleIcon} />
            <h2>Procedimento para solicitação</h2>
          </div>
          <ul className={S.list}>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>A solicitação de reembolso deve ser feita na Central de Atendimento Cartão Amigo Saúde, pelo canal indicado no site/app.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>O prazo para realização do pedido de reembolso é de até 90 (noventa) dias após o falecimento do titular.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>O prazo de análise e processamento do reembolso é de até 30 (trinta) dias, contados a partir do envio completo da documentação exigida.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>O reembolso será realizado exclusivamente na conta bancária indicada pelo solicitante e devidamente validado pelos bancos.</span>
            </li>
          </ul>
          <div className={S.buttonContainer}>
            <Button
              typeStyle="btn5"
              label="Fazer a solicitação agora"
              width="100%"
              iconLeft={<IconCircleCheck size={18} />}
            />
          </div>
        </div>

        {/* Exclusões de cobertura */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconAlertTriangle className={S.titleIconDanger} size={24} />
            <h2>Exclusões de cobertura</h2>
          </div>
          <p className={S.sectionSubtitle}>O reembolso não será concedido em caso de:</p>
          <ul className={S.list}>
            <li className={S.listItem}>
              <IconCircleX size={18} className={S.iconCrossCircle} />
              <span>Falta de comprovação das despesas (notas fiscais incompletas, ilegíveis ou sem validade jurídica).</span>
            </li>
            <li className={S.listItem}>
              <IconCircleX size={18} className={S.iconCrossCircle} />
              <span>Despesas realizadas fora do território nacional.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleX size={18} className={S.iconCrossCircle} />
              <span>Solicitações fora do prazo estabelecido neste regulamento.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleX size={18} className={S.iconCrossCircle} />
              <span>Serviços/fornecedores contratados fora da rede do Cartão Amigo Saúde.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleX size={18} className={S.iconCrossCircle} />
              <span>Em caso de inadimplência das mensalidades do benefício.</span>
            </li>
          </ul>
          <div className={S.buttonContainerLeft}>
            <Button typeStyle="btn4" label="Ver Regulamento Completo (PDF)" width="100%" iconLeft={<IconFileText size={18} />} />
          </div>
        </div>

        {/* Central de Atendimento */}
        <div className={S.card + ' ' + S.centerText}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.875rem' }}>
            <IconPhoneCall size={28} color="#6C75FF" />
          </div>
          <p>Para dúvidas ou informações adicionais, entre em contato com a Central de Atendimento do Cartão Amigo Saúde.</p>
          <div className={S.buttonContainer}>
            <Button
              typeStyle="btn2"
              label="Central de Atendimento"
              width="100%"
              iconLeft={<IconPhoneCall size={18} />}
              style={{ backgroundColor: '#6D74FF' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FuneralAssistance

// Hero image URL mais representativa
const heroImageUrl = "https://images.unsplash.com/photo-1461031189510-2d263b000f65?ixlib=rb-4.0.3&q=80&w=2670&auto=format&fit=crop";
