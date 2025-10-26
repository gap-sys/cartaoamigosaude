import { useState } from 'react'

import { Meta, Hero , Button } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import { IconInfoCircle, IconExternalLink, IconPhoneCall, IconCircleCheck } from '@tabler/icons-react'

import S from './discount-medicines.module.scss'
import Image from 'next/image'

const DiscountMedicines: React.FC = () => {
  const heroImageUrl = IMAGE.MEDICAMENTOS.src
  const [isImageOpen, setIsImageOpen] = useState(false)

  return (
    <div className={S.page}>
      <Meta
        title="Desconto em Medicamentos | Cartão Amigo Saúde"
        description="Tenha acesso a descontos exclusivos em medicamentos em farmácias parceiras por todo o Brasil com o Cartão Amigo Saúde. Economia garantida para você e sua família."
        keywords="desconto em medicamentos, farmácia com desconto, epharma, Cartão Amigo Saúde, medicamentos mais baratos, farmácias conveniadas, economia em remédios"
      />

      <div className={S.heroSpacer}>
        <Hero imageUrl={heroImageUrl} text="Desconto em Medicamentos" fullWidth />
      </div>

      <div className={S.container}>
        {/* Como funciona */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconInfoCircle size={20} className={S.titleIcon} />
            <h2>Como funciona</h2>
          </div>
          <p>
            Tenha acesso a descontos exclusivos em medicamentos em farmácias parceiras por todo o Brasil via rede conveniada
            Epharma. Consulte preços e disponibilidade conforme seu benefício.
          </p>
          <ul className={S.list}>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Descontos aplicados em farmácias parceiras conveniadas.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Pesquisa de medicamentos pelo portal de consulta da Epharma.</span>
            </li>
          </ul>
        </div>

        {/* Pesquisa de Medicamentos */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconInfoCircle size={20} className={S.titleIcon} />
            <h2>Pesquisar Medicamentos</h2>
          </div>
          <div
            className={S.imagePreview}
            role="button"
            aria-label="Ampliar imagem da pesquisa de medicamentos"
            onClick={() => setIsImageOpen(true)}
          >
            <Image src={IMAGE.LAMINA.src} alt="Pesquisa de medicamentos" width={1280} height={720} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} sizes="(max-width: 1280px) 100vw, 1280px" />
          </div>
          <div className={S.buttonContainerLeft}>
            <Button
              typeStyle="btn4"
              label="Abrir Pesquisa de Medicamentos"
              width="100%"
              iconLeft={<IconExternalLink size={18} />}
              onClick={() => window.open('https://pesquisamedicamento.epharma.com.br/?benefitId=244926', '_blank')}
            />
          </div>
        </div>

        {/* Atendimento */}
        <div className={S.card + ' ' + S.centerText}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.875rem' }}>
            <IconPhoneCall size={28} color="#6C75FF" />
          </div>
          <p>Em caso de dúvidas, fale com nossa equipe pelo WhatsApp.</p>
          <div className={S.buttonContainer}>
            <Button
              typeStyle="btn2"
              label="WhatsApp Atendimento"
              width="100%"
              iconLeft={<IconExternalLink size={18} />}
              style={{ backgroundColor: '#00af7d' }}
              onClick={() =>
                window.open(
                  'https://api.whatsapp.com/send?phone=5519989512404&text=Ol%C3%A1,%20tudo%20bem?%20Estava%20no%20site%20de%20voc%C3%AA%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida.',
                  '_blank'
                )
              }
            />
          </div>
        </div>
      </div>
      {isImageOpen && (
        <div className={S.modalOverlay} onClick={() => setIsImageOpen(false)} role="dialog" aria-modal="true">
          <div className={S.modalContent} onClick={(e) => e.stopPropagation()}>
            <Image src={IMAGE.LAMINA.src} alt="Pesquisa de medicamentos ampliada" width={1600} height={900} style={{ width: '90vw', height: 'auto', borderRadius: '8px' }} sizes="90vw" />
            <button className={S.closeBtn} onClick={() => setIsImageOpen(false)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DiscountMedicines
