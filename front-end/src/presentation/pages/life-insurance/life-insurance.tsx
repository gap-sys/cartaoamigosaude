import { Button } from '../../components'
import Hero from '../../components/common/hero/hero'
import { Meta } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'
import { IconCircleCheck, IconFileText, IconPhoneCall, IconInfoCircle, IconUsers, IconListCheck, IconAlertTriangle, IconAlertCircle, IconShieldCheck, IconExternalLink } from '@tabler/icons-react'
import S from './life-insurance.module.scss'

const LifeInsurance: React.FC = () => {
  const heroImageUrl = IMAGE.SEGURO_DE_VIDA.src

  return (
    <div className={S.page}>
      <Meta
        title="Seguro de Vida | Cartão Amigo Saúde"
        description="Condições gerais do Seguro de Vida (Acidentes Pessoais) do Cartão Amigo Saúde."
        keywords="seguro de vida, AP, condições gerais, cartão amigo saúde"
      />

      <div className={S.heroSpacer}>
        <Hero imageUrl={heroImageUrl} text="Seguro de Vida" fullWidth />
      </div>

      <div className={S.container}>
        {/* Definição do Seguro */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconInfoCircle size={20} className={S.titleIcon} />
            <h2>Definição do Seguro</h2>
          </div>
          <p>
            Proteção ao titular para indenizar a família ou o próprio segurado em casos de:
            <br />• Morte por acidente.
            <br />• Invalidez permanente total por acidente.
          </p>
          <p>
            Garantidas pela seguradora América Seguros (CNPJ: 16.965.518/0001-08).
          </p>
        </div>

        {/* Coberturas */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconShieldCheck size={20} className={S.titleIcon} />
            <h2>Coberturas</h2>
          </div>
          <div className={S.coverageItem}>
            <div className={S.coverageLeft}>
              <IconShieldCheck size={18} className={S.coverageIconRed} />
              <span className={S.coverageTitle}>Morte Decorrente de Acidente</span>
            </div>
            <div className={S.coverageRight}>
              <span>Garante aos beneficiários o pagamento de uma indenização em caso de morte do segurado decorrente de acidente.</span>
            </div>
          </div>
          <div className={S.coverageItem}>
            <div className={S.coverageLeft}>
              <IconShieldCheck size={18} className={S.coverageIconRed} />
              <span className={S.coverageTitle}>Invalidez Permanente Total por Acidente</span>
            </div>
            <div className={S.coverageRight}>
              <span>Garante ao próprio segurado o pagamento de uma indenização em caso de invalidez permanente total por acidente.</span>
            </div>
          </div>
          <div className={S.buttonContainerLeft}>
            <Button
              typeStyle="btn4"
              label="Ver Condições Gerais (PDF)"
              iconLeft={<IconFileText size={18} />}
              onClick={() => window.open('/CG AP Coletivo 20250221.pdf', '_blank')}
              width="100%"
            />
          </div>
        </div>

        {/* Beneficiários */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconUsers size={20} className={S.titleIcon} />
            <h2>Beneficiários</h2>
          </div>
          <ul className={S.list}>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span><strong>IPTA:</strong> O próprio cliente ou, na impossibilidade, pessoa designada por lei.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span><strong>Morte Acidental:</strong> Herdeiros legais.</span>
            </li>
          </ul>
        </div>

        {/* Elegibilidade */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconListCheck size={20} className={S.titleIcon} />
            <h2>Elegibilidade</h2>
          </div>
          <ul className={S.list}>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Seguro de contratação com adesão compulsória para clientes do Cartão Amigo Saúde que contem o benefício.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Limite máximo de indenização: R$ 10.000,00.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Indenizações por Morte Acidental e Invalidez Permanente Total não se acumulam.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Se houver pagamento por invalidez e, do mesmo acidente, ocorrer morte, o valor já pago será deduzido.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Elegíveis: proponentes com idade máxima de 70 anos incompletos.</span>
            </li>
          </ul>
        </div>

        {/* Aviso de Sinistro */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconAlertTriangle size={20} className={S.titleIcon} />
            <h2>Aviso de Sinistro</h2>
          </div>
          <p><strong>0800 323 5084</strong></p>
          <p>Entre em contato para notificar sinistros e obter orientações.</p>
        </div>

        {/* Informações Importantes */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconAlertCircle size={20} className={S.titleIcon} />
            <h2>Informações Importantes</h2>
          </div>
          <ul className={S.list}>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Não há carência.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Não há franquia.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Vigência vinculada ao Cartão Amigo Saúde.</span>
            </li>
          </ul>
        </div>

        {/* Mais Informações */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconInfoCircle size={20} className={S.titleIcon} />
            <h2>Mais Informações</h2>
          </div>
          <div className={S.buttonGroup}>
            <Button
              typeStyle="btn4"
              label="Visitar Website"
              width="100%"
              style={{ backgroundColor: '#7060F0' }}
              iconLeft={<IconExternalLink size={18} />}
              onClick={() => window.open('http://cartaoamigosaude.com.br/', '_blank')}
            />
            <Button
              typeStyle="btn2"
              label="Ligar 0800 323 5084"
              width="100%"
              iconLeft={<IconPhoneCall size={18} />}
              style={{ backgroundColor: '#00af7d', marginTop: 0 }}
              onClick={() => window.open('tel:08003235084')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LifeInsurance
