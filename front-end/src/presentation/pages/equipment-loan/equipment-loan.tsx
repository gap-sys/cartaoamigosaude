import Link from 'next/link'

import { Hero, Meta } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import S from './equipment-loan.module.scss'

const Equipamentloan = () => {
  return (
    <div>
      <Meta
        title="Empréstimo de Equipamentos Médico Hospitalar - Cartão Amigo Saúde"
        description="Serviço de assistência para empréstimo e locação de equipamentos médico-hospitalares. Atendimento personalizado e suporte em situações de acidente ou enfermidade."
        keywords="empréstimo de equipamentos, locação de equipamentos médicos, assistência hospitalar, Cartão Amigo Saúde, aluguel de aparelhos, suporte médico"
      />
      <Hero imageUrl={IMAGE.EMPRESTIMO_EQUIPAMENTOS.src} text="Empréstimo de Equipamentos Médico Hospitalar" />
      <div className={S.container}>
        <div className={S.card}>
          <p>
            Apresentação: A Assistência de Empréstimo e/ou Locação de Equipamentos Especiais pela Amigo Saúde é um
            serviço que propicia ao Usuário auxílio para locação de equipamentos e aparelhos especiais, destinados a
            atender as necessidades do usuário em caso de acidente ou enfermidade a título de empréstimo por 15 (quinze)
            dias a título gratuito e/ou locação onerosa após encerrado o período da gratuidade.
          </p>
          <p>
            Serviço de Assistência: Este serviço garante uma assistência personalizada, através de Solicitação Pessoal
            no endereço da sede da empresa mediante a contratação.
          </p>
          <p>
            Vigência: A duração da garantia dos serviços de assistência fica limitada à vigência do contrato de
            empréstimo e locação.
          </p>
          <p>
            Abrangência e Condições: Os serviços de Locação de Equipamentos Especiais terão extensão em todo o
            território brasileiro contudo fica sob encargo do assistido a retirada e a devolução presencial dos
            equipamentos emprestados/locados na sede da empresa.
          </p>
          <p>
            Regras da Assistência: Não ficam garantidas as prestações que não tenham sido previamente solicitadas e
            contratadas e a assistência oferecida se dará no limite da listagens de bens móveis integrantes do
            patrimônio da empresa e da disponibilidade para empréstimo/locação.
          </p>
        </div>
        <div className={S.card}>
          <p>Empréstimo: prazo de até 15 (quinze) dias a título gratuito</p>
          <p>
            Locação: Após o 15º dia de empréstimo condicionado a pedido expresso de renovação do contrato mediante o
            pagamento dos valores previstos na Tabela de Preços anexa ao contrato.
          </p>
          <p>
            Ao alugar qualquer equipamento da Amigo Saúde, o locatário torna-se fiel depositário e a não devolução dos
            equipamentos ou não renovação do contrato até o final da locação, obriga a Amparar a denuncia-lo por
            apropriação indébita, (Art: 168 Código Civil), dos bens locados.{' '}
          </p>
          <p>
            A devolução dos equipamentos será de exclusiva responsabilidade do contratante, de forma que a contratada
            deixa claro que não faz entrega ou fornece serviços de frete para entrega e/ou retirada dos equipamentos
            emprestados/locados.
          </p>
        </div>
      </div>
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
        <Link href="https://api.whatsapp.com/send?phone=5519989512404&text=Ol%C3%A1,%20tudo%20bem?%20Estava%20no%20site%20de%20voc%C3%AAs%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida."
          target="_blank"
        >
          <img src={IMAGE.ICONE_WHATSAPP.src} alt="WhatsApp" style={{ width: '80px', height: '80px', borderRadius: '50%', boxShadow: '2px 2px 10px rgba(0,0,0,0.3)' }} />
        </Link>
      </div>
    </div>
  )
}

export default Equipamentloan
