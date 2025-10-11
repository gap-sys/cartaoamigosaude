import Link from 'next/link'

import { Hero, Meta, Button } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import S from './residential-assistance.module.scss'

export const ResidentialAssistance: React.FC = () => {
  return (
    <div>
      <Meta
        title="Assistência Residencial | Cartão Amigo Saúde"
        description="Conheça o benefício de Assistência Residencial do Cartão Amigo Saúde. Serviços especializados para sua residência com cobertura nacional."
        keywords="assistência residencial, cartão amigo saúde, serviços residenciais, manutenção, reparo elétrico"
      />
      <Hero imageUrl={IMAGE.EMPRESTIMO_EQUIPAMENTOS.src} text="Assistência Residencial" />
      <div className={S.container}>
        <div className={S.card}>
          <h2>Objetivo do Serviço</h2>
          <p>
            A Assistência Residencial oferece serviços especializados de manutenção e reparo de equipamentos elétricos
            e eletrônicos em sua residência, proporcionando tranquilidade e segurança para você e sua família através
            de uma rede credenciada de técnicos qualificados.
          </p>
          <div className={S.buttonContainerLeft}>
            <Button
              typeStyle="btn1"
              label="Ver Regulamento Completo (PDF)"
              onClick={() => window.open('/Residencial Eletroassist Jul_25.pdf', '_blank')}
              width="310px"
            />
          </div>
        </div>

        <div className={S.card}>
          <h2>Beneficiários do Serviço</h2>
          <p>
            O benefício é destinado ao titular do Cartão Amigo Saúde e seus dependentes legais (cônjuge e filhos até
            21 anos ou 24 anos se universitários), desde que residam no mesmo endereço cadastrado no sistema.
          </p>
          <p>
            O serviço está disponível para residências localizadas em território nacional, conforme cobertura da rede credenciada.
          </p>
        </div>

        <div className={S.card}>
          <h2>Serviços Cobertos</h2>
          <p>A Assistência Residencial inclui os seguintes serviços:</p>
          <ul>
            <li>Reparo de equipamentos elétricos e eletrônicos (televisores, geladeiras, micro-ondas, etc.)</li>
            <li>Instalação de equipamentos eletrodomésticos</li>
            <li>Manutenção preventiva de aparelhos</li>
            <li>Diagnóstico técnico especializado</li>
            <li>Orientação técnica por telefone</li>
            <li>Serviços de eletricista para pequenos reparos residenciais</li>
          </ul>
        </div>

        <div className={S.card}>
          <h2>Limite de Utilização</h2>
          <p>
            O benefício oferece até 4 (quatro) chamados por ano por titular, com limite de cobertura de R$ 200,00
            (duzentos reais) por chamado para aquisição de peças e componentes necessários ao reparo.
          </p>
          <p>
            A mão de obra especializada está inclusa no benefício, sem custo adicional para o beneficiário.
          </p>
        </div>

        <div className={S.card}>
          <h2>Franquia e Custos</h2>
          <p>
            <strong>Mão de obra:</strong> Isenta de franquia - totalmente coberta pelo benefício.
          </p>
          <p>
            <strong>Peças e componentes:</strong> Por conta do beneficiário, respeitando o limite de cobertura de
            R$ 200,00 por chamado. Valores excedentes deverão ser pagos diretamente ao técnico credenciado.
          </p>
        </div>

        <div className={S.card}>
          <h2>Como Solicitar o Serviço</h2>
          <p>
            Para solicitar a Assistência Residencial, entre em contato através dos seguintes canais:
          </p>
          <ul>
            <li><strong>Telefone:</strong> 0800 878 0000 (disponível 24 horas por dia, 7 dias por semana)</li>
            <li><strong>Aplicativo:</strong> Cartão Amigo Saúde (disponível para iOS e Android)</li>
            <li><strong>Site:</strong> www.cartaoamigosaude.com.br</li>
          </ul>
          <p>
            Tenha em mãos seu número do cartão e dados pessoais para agilizar o atendimento.
          </p>
        </div>

        <div className={S.card}>
          <h2>Prazo de Atendimento</h2>
          <p>
            O atendimento será realizado em até 48 (quarenta e oito) horas úteis após a solicitação, conforme
            disponibilidade da rede credenciada na sua região.
          </p>
          <p>
            Em casos de urgência, será priorizado o atendimento mais rápido possível, respeitando a disponibilidade
            dos técnicos credenciados.
          </p>
        </div>

        <div className={S.card}>
          <h2>Exclusões de Cobertura</h2>
          <p>O serviço não cobre:</p>
          <ul>
            <li>Equipamentos com defeitos decorrentes de mau uso ou negligência</li>
            <li>Aparelhos em garantia do fabricante</li>
            <li>Equipamentos industriais ou comerciais</li>
            <li>Serviços em imóveis não residenciais</li>
            <li>Reparos em equipamentos de valor superior a R$ 5.000,00</li>
            <li>Instalações elétricas prediais complexas</li>
            <li>Serviços realizados por técnicos não credenciados</li>
          </ul>
        </div>

        <div className={S.card}>
          <h2>Disposições Gerais</h2>
          <p>
            Este regulamento está sujeito a alterações mediante aviso prévio de 30 (trinta) dias aos titulares do
            Cartão Amigo Saúde.
          </p>
          <p>
            O benefício está condicionado à adimplência das mensalidades do Cartão Amigo Saúde e ao cumprimento
            das condições estabelecidas neste regulamento.
          </p>
          <p>
            Para dúvidas ou informações adicionais, entre em contato com a Central de Atendimento do Cartão Amigo Saúde.
          </p>
          <p>
            <strong>Cartão Amigo Saúde</strong>
            <br />
            Cuidando de você e da sua família em todos os momentos.
          </p>
        </div>
      </div>
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
        <Link
          href="https://api.whatsapp.com/send?phone=5519989512404&text=Ol%C3%A1,%20tudo%20bem?%20Estava%20no%20site%20de%20voc%C3%AAs%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida."
          target="_blank"
        >
          <img src={IMAGE.ICONE_WHATSAPP.src} alt="WhatsApp" style={{ width: '80px', height: '80px', borderRadius: '50%', boxShadow: '2px 2px 10px rgba(0,0,0,0.3)' }} />
        </Link>
      </div>
    </div>
  )
}