import { Hero, Meta, Button } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'
import { IconInfoCircle, IconUsers, IconCircleCheck, IconClipboardList, IconCash, IconPhoneCall, IconBrandWhatsapp } from '@tabler/icons-react'

import S from './residential-assistance.module.scss'

export const ResidentialAssistance: React.FC = () => {
  return (
    <div className={S.page}>
      <Meta
        title="Assistência Residencial | Cartão Amigo Saúde"
        description="Conheça o benefício de Assistência Residencial do Cartão Amigo Saúde. Serviços especializados para sua residência com cobertura nacional."
        keywords="assistência residencial, cartão amigo saúde, serviços residenciais, manutenção, reparo elétrico"
      />
      <div className={S.heroSpacer}>
        <Hero imageUrl={IMAGE.EMPRESTIMO_EQUIPAMENTOS.src} text="Assistência Residencial" fullWidth />
      </div>

      <div className={S.container}>
        {/* Objetivo do Serviço */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconInfoCircle size={20} className={S.titleIcon} />
            <h2>Objetivo do Serviço</h2>
          </div>
          <p>
            A Assistência Residencial oferece serviços especializados de manutenção e reparo de equipamentos elétricos
            e eletrônicos em sua residência, proporcionando tranquilidade e segurança para você e sua família através
            de uma rede credenciada de técnicos qualificados.
          </p>
        </div>

        {/* Beneficiários do Serviço */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconUsers size={20} className={S.titleIcon} />
            <h2>Beneficiários do Serviço</h2>
          </div>
          <ul className={S.list}>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Destinado ao titular do Cartão Amigo Saúde e seus dependentes legais (cônjuge e filhos até 21 anos ou 24 anos se universitários).</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Residência deve coincidir com o endereço cadastrado no sistema.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Disponível para residências em território nacional conforme rede credenciada.</span>
            </li>
          </ul>
        </div>

        {/* Serviços Cobertos */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconClipboardList size={20} className={S.titleIcon} />
            <h2>Serviços Cobertos</h2>
          </div>
          <ul className={S.list}>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Reparo de equipamentos elétricos e eletrônicos (TV, geladeira, micro-ondas etc.).</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Instalação de eletrodomésticos.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Manutenção preventiva de aparelhos.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Diagnóstico técnico especializado.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Orientação técnica por telefone.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Serviços de eletricista para pequenos reparos residenciais.</span>
            </li>
          </ul>
        </div>

        {/* Limite de Utilização */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconCash size={20} className={S.titleIcon} />
            <h2>Limite de Utilização</h2>
          </div>
          <ul className={S.list}>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Até 4 chamados por ano por titular.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Limite de cobertura de R$ 200,00 por chamado para peças e componentes.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Mão de obra especializada inclusa sem custo adicional.</span>
            </li>
          </ul>
        </div>

        {/* Franquia e Custos */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconCash size={20} className={S.titleIcon} />
            <h2>Franquia e Custos</h2>
          </div>
          <ul className={S.list}>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span><strong>Mão de obra:</strong> Isenta de franquia.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span><strong>Peças e componentes:</strong> Por conta do beneficiário, respeitando limite de R$ 200,00 por chamado.</span>
            </li>
          </ul>
        </div>

        {/* Como Solicitar o Serviço */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconPhoneCall size={20} className={S.titleIcon} />
            <h2>Como Solicitar o Serviço</h2>
          </div>
          <ul className={S.list}>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span><strong>Telefone:</strong> 0800 878 0000 (24h)</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span><strong>Aplicativo:</strong> Cartão Amigo Saúde (iOS e Android)</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span><strong>Site:</strong> www.cartaoamigosaude.com.br</span>
            </li>
          </ul>
          <p>Tenha em mãos seu número do cartão e dados pessoais para agilizar o atendimento.</p>
        </div>

        {/* Prazo de Atendimento */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconInfoCircle size={20} className={S.titleIcon} />
            <h2>Prazo de Atendimento</h2>
          </div>
          <ul className={S.list}>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Atendimento em até 48 horas úteis após a solicitação.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Urgências priorizadas conforme disponibilidade da rede.</span>
            </li>
          </ul>
        </div>

        {/* Disposições Gerais */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconInfoCircle size={20} className={S.titleIcon} />
            <h2>Disposições Gerais</h2>
          </div>
          <ul className={S.list}>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Regulamento sujeito a alterações com aviso prévio de 30 dias.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Benefício condicionado à adimplência das mensalidades.</span>
            </li>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Apoio da Central de Atendimento do Cartão Amigo Saúde.</span>
            </li>
          </ul>
        </div>

        {/* Regulamento Completo */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconClipboardList size={20} className={S.titleIcon} />
            <h2>Regulamento Completo</h2>
          </div>
          <p>
            Para informações detalhadas sobre condições, exclusões e procedimentos completos do serviço de 
            Assistência Residencial, consulte o regulamento oficial em PDF.
          </p>
          <div className={S.buttonContainer}>
            <Button
              typeStyle="btn2"
              label="Ver Regulamento Completo (PDF)"
              width="100%"
              iconLeft={<IconClipboardList size={18} />}
              onClick={() => window.open('/Residencial Eletroassist Jul_25.pdf', '_blank')}
            />
          </div>
        </div>
      </div>

      {/* Atendimento via WhatsApp */}
      <div className={S.container}>
        <div className={S.card + ' ' + S.centerText}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.875rem' }}>
            <IconPhoneCall size={28} color="#6C75FF" />
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

export default ResidentialAssistance