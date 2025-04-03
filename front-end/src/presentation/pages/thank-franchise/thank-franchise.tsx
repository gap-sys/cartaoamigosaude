import { Button, Meta } from 'src/presentation/components'

import S from './thank-franchise.module.scss'

const ThankFranchise = () => {
  return (
    <div className={S.container}>
      <Meta
        title="Obrigado Franquia - Cartão Amigo Saúde"
        description="Agradecemos o seu interesse em se tornar um franqueado Amigo Saúde. Em breve, nossa equipe entrará em contato com você para os próximos passos."
        keywords="formulário enviado, franquia recebida, obrigado Cartão Amigo Saúde, interesse em franquia, ser franqueado, contato recebido"
      />
      <h1>Recebemos o seu formulário</h1>
      <p>
        Em breve nossa equipe entrará em contato com você. Caso queira falar conosco nesse momento, basta clicar no
        botão abaixo:
      </p>
      <a href="https://api.whatsapp.com/send?phone=5519989512404&text=Ol%C3%A1,%20tudo%20bem?%20Estava%20no%20site%20de%20voc%C3%AAs%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida.">
        <Button typeStyle="btn2" width="190px" label="Falar com a equipe" />
      </a>
    </div>
  )
}

export default ThankFranchise
