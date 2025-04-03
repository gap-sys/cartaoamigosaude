import S from './sac.module.scss'

import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { IMAGE } from 'src/presentation/assets'

const Sac = () => {
  return (
    <div className={S.anomecarua}>
      <div className={S.sacContainer}>
        <div className={S.logoSection}>
          <img src={IMAGE.LOGO.src} alt="Cartão Amigo Saúde" />
          <div className={S.socialIcons}>
            <a href="https://www.facebook.com/cartaoamigosaude" target="_blank">
              <FaFacebook className={S.icon} />
            </a>
            <a href="https://www.instagram.com/cartaoamigosaude/" target="_blank">
              <FaInstagram className={S.icon} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5519989512404&text=Ol%C3%A1,%20tudo%20bem?%20Estava%20no%20site%20de%20voc%C3%AAs%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida."
              target="_blank"
            >
              <FaWhatsapp className={S.icon} />
            </a>
          </div>
        </div>
        <div className={S.infoSection}>
          <h3>Vendas | SAC</h3>
          <a href="tel:08003235084">
            <div className={S.phoneBox}>
              <span>0800 323 5084</span>
            </div>
          </a>
          <p>
            O cartão de desconto não funciona como um plano de saúde e não se responsabiliza pelos serviços ou
            pagamentos. Descontos não são garantidos para todos os serviços obrigatórios de um plano de saúde. O cliente
            é responsável por pagar diretamente ao prestador por qualquer serviço utilizado. O cartão garante apenas
            preços e descontos listados no site www.cartaoamigosaude.com.br. O agendamento ocorre em até 15 dias,
            sujeito à disponibilidade. Consulte a clínica para especialidades disponíveis e condições de consulta.
          </p>
          <h4>FORMAS DE PAGAMENTO</h4>
          <div className={S.paymentIcons}>
            <img src={IMAGE.ICONE_MASTERCARD.src} alt="Mastercard" />
            <img src={IMAGE.ICONE_VISA.src} alt="Visa" />
            <img src={IMAGE.ICONE_AMERICAN_EXPRESS.src} alt="American Express" />
            <img src={IMAGE.ICONE_DINERS_CLUB.src} alt="Diners Club" />
            <img src={IMAGE.ICONE_ELO.src} alt="Elo" />
            <img src={IMAGE.ICONE_HIPERCARD.src} alt="Hipercard" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sac
