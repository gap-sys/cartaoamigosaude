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
            É uma proteção ao Titular que tem como objetivo indenizar a família ou o próprio segurado em casos de morte por acidente ou invalidez por acidentes.
          </p>
          <p>
            As coberturas do Seguro previsto neste item são garantidas pela seguradora América Seguros CNPJ 16.965.518/0001-08.
          </p>
          <p>
            A adesão será compulsória aos Clientes que aderirem ao plano Cartão Amigo Saúde que contenha o benefício do Seguro, tratando-se de um seguro não-contributário.
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
              <span>Cobertura caso o Cliente venha a falecer em consequência de acidente pessoal coberto. Limite máximo: R$ 10.000,00.</span>
            </div>
          </div>
          <div className={S.coverageItem}>
            <div className={S.coverageLeft}>
              <IconShieldCheck size={18} className={S.coverageIconRed} />
              <span className={S.coverageTitle}>Invalidez Permanente Total por Acidente</span>
            </div>
            <div className={S.coverageRight}>
              <span>Cobertura em caso do Cliente ter perda total, redução ou impotência funcional definitiva dos membros ou órgãos, em decorrência de lesão física sofrida pelo Cliente, em caráter permanente, em consequência de acidente pessoal coberto.</span>
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
              <span><strong>IPTA:</strong> O próprio cliente ou, na impossibilidade deste receber, será a pessoa designada por lei para tal finalidade.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span><strong>Morte Acidental:</strong> Os herdeiros legais.</span>
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
              <span>As indenizações por Invalidez Permanente por Acidente e Morte Acidental não se acumulam.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Se depois de pagar indenização por invalidez permanente por acidente, verificar-se a morte do Cliente, em consequência do mesmo acidente, a importância já paga por invalidez permanente deve ser deduzida do valor do capital segurado por morte.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Elegíveis: proponentes com idade máxima de 70 anos incompletos na data de adesão do Seguro.</span>
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
          <p>
            É a comunicação formal específica de uma reclamação de terceiros, efetuada durante o período de vigência da apólice, ou Prazo Complementar ou Prazo Suplementar (se aplicável), que o segurado é obrigado a fazer à Seguradora para dar a esta, conhecimento imediato da ocorrência do sinistro.
          </p>
          <p>
            Ocorrendo um sinistro que possa acarretar a responsabilidade da Seguradora, deverá ser comunicado através do Aviso de Sinistro, em carta registrada, telegrama, ou telefax dirigido à Seguradora ou a seu representante legal.
          </p>
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
              <span>Não há franquia para as coberturas de Morte e Invalidez Permanente Total por Acidente.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>A vigência do Seguro estará atrelada à vigência do CARTÃO AMIGO SAÚDE.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>A invalidez permanente deve ser comprovada através de declaração médica apresentada à seguradora.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>A seguradora se reserva o direito de submeter o segurado a exames médicos para comprovar a ocorrência de invalidez.</span>
            </li>
          </ul>
        </div>

        {/* Mais Informações */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconInfoCircle size={20} className={S.titleIcon} />
            <h2>Mais Informações</h2>
          </div>
          <p>
            O Cliente e seus beneficiários devem consultar a Condição Geral do Seguro tratado neste item para tomar ciência dos riscos cobertos e excluídos de cada cobertura e documentação a ser apresentada em caso de sinistro.
          </p>
          <div className={S.buttonGroup}>
            <Button
              typeStyle="btn4"
              label="Visitar Website"
              width="100%"
              style={{ backgroundColor: '#12567A' }}
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
