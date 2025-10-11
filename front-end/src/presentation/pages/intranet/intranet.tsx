import { Button, Hero, Meta, Strip, Navbar, Sac, Footer } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'
import Link from 'next/link'

import S from './intranet.module.scss'

const Intranet = () => {
  return (
    <div>
      <Strip />
      <Navbar />
      <main>
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
      </main>
      <Sac />
      <Footer />
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

export default Intranet
