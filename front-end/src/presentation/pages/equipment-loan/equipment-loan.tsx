import { Button } from '../../components'
import { Hero, Meta } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'
import { IconInfoCircle, IconCircleCheck, IconPhoneCall, IconBrandWhatsapp } from '@tabler/icons-react'

import S from './equipment-loan.module.scss'

const Equipamentloan = () => {
  // removed unused modal state
  return (
    <div className={S.page}>
      <Meta
        title="Equipamentos de Saúde - Cartão Amigo Saúde"
        description="Serviço de assistência para empréstimo e locação de equipamentos médico-hospitalares. Atendimento personalizado e suporte em situações de acidente ou enfermidade."
        keywords="empréstimo de equipamentos, locação de equipamentos médicos, assistência hospitalar, Cartão Amigo Saúde, aluguel de aparelhos, suporte médico"
      />
      <div className={S.heroSpacer}>
        <Hero imageUrl={IMAGE.EMPRESTIMO_EQUIPAMENTOS.src} text="Equipamentos de Saúde" />
      </div>

      <div className={S.container}>
        {/* Bloco 1: Apresentação e condições gerais */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconInfoCircle size={20} className={S.titleIcon} />
            <h2>Apresentação e Condições</h2>
          </div>
          <p>
            <strong>Apresentação:</strong> A Assistência de Empréstimo e/ou Locação de Equipamentos Especiais pela Amigo
            Saúde é um serviço que propicia ao Usuário auxílio para locação de equipamentos e aparelhos especiais,
            destinados a atender as necessidades do usuário em caso de acidente ou enfermidade a título de empréstimo por
            15 (quinze) dias a título gratuito e/ou locação onerosa após encerrado o período da gratuidade.
          </p>
          <p>
            <strong>Serviço de Assistência:</strong> Este serviço garante uma assistência personalizada, através de
            Solicitação Pessoal no endereço da sede da empresa mediante a contratação.
          </p>
          <p>
            <strong>Vigência:</strong> A duração da garantia dos serviços de assistência fica limitada à vigência do
            contrato de empréstimo e locação.
          </p>
          <p>
            <strong>Abrangência e Condições:</strong> Os serviços de Locação de Equipamentos Especiais terão extensão em
            todo o território brasileiro, contudo fica sob encargo do assistido a retirada e a devolução presencial dos
            equipamentos emprestados/locados na sede da empresa.
          </p>
          <p>
            <strong>Regras da Assistência:</strong> Não ficam garantidas as prestações que não tenham sido previamente
            solicitadas e contratadas e a assistência oferecida se dará no limite das listagens de bens móveis integrantes
            do patrimônio da empresa e da disponibilidade para empréstimo/locação.
          </p>
        </div>

        {/* Bloco 2: Empréstimo, Locação e Devolução */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconInfoCircle size={20} className={S.titleIcon} />
            <h2>Empréstimo, Locação e Devolução</h2>
          </div>
          <p>
            <strong>Empréstimo:</strong> prazo de até 15 (quinze) dias a título gratuito.
          </p>
          <p>
            <strong>Locação:</strong> Após o 15º dia de empréstimo, condicionado a pedido expresso de renovação do
            contrato mediante o pagamento dos valores previstos na Tabela de Preços anexa ao contrato.
          </p>
          <p>
            Ao alugar qualquer equipamento da Amigo Saúde, o locatário torna-se fiel depositário e a não devolução dos
            equipamentos ou não renovação do contrato até o final da locação, obriga a Amparar a denunciá-lo por
            apropriação indébita (Art: 168 Código Civil) dos bens locados.
          </p>
          <p>
            A devolução dos equipamentos será de exclusiva responsabilidade do contratante, de forma que a contratada
            deixa claro que não faz entrega ou fornece serviços de frete para entrega e/ou retirada dos equipamentos
            emprestados/locados.
          </p>
        </div>

        {/* Bloco 3: Informações adicionais que não se repetem */}
        <div className={S.card}>
          <div className={S.titleRow}>
            <IconInfoCircle size={20} className={S.titleIcon} />
            <h2>Informações Adicionais</h2>
          </div>
          <ul className={S.list}>
            <li className={S.listItem}>
              <IconCircleCheck size={18} className={S.iconCheck} />
              <span>Uso exclusivo do titular e seus dependentes.</span>
            </li>
          </ul>
        </div>

        {/* Atendimento via WhatsApp */}
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

export default Equipamentloan
