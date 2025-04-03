import { Button, Hero, Meta } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import S from './intranet.module.scss'

const Intranet = () => {
  return (
    <div>
      <Meta
        title="Intranet - Cartão Amigo Saúde"
        description="Acesse sistemas internos da rede Amigo Saúde. Área exclusiva para colaboradores, franqueados e parceiros autorizados."
        keywords="intranet Amigo Saúde, acesso interno, portal do colaborador, login Galax, Webmail Amigo Saúde, sistemas internos"
      />
      <Hero imageUrl={IMAGE.INTRANET.src} text="Intranet" />
      <div className={S.container}>
        <div className={S.box}>
          <img src={IMAGE.ICONE_GALAX.src} alt="Ícone Galax" />
          <h1>Cel Cash</h1>
          <a href="https://celcash.celcoin.com.br/v2/login/somente-logado/restrict" target="_blank">
            <Button typeStyle="btn2" label="Entrar" width="100px" />
          </a>
        </div>
        <div className={S.box}>
          <img src={IMAGE.ICONE_WEBMAIL.src} alt="Ícone Webmail" />
          <h1>Webmail</h1>
          <a href="http://webmail.cartaoamigosaude.com.br/" target="_blank">
            <Button typeStyle="btn2" label="Entrar" width="100px" />
          </a>
        </div>
        <div className={S.box}>
          <img src={IMAGE.CRM.src} alt="Ícone Pessoas" />
          <h1>Consultar Cartão</h1>
          <a href="https://crm.cartaoamigosaude.com.br/#/">
            <Button typeStyle="btn2" label="Entrar" width="100px" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Intranet
