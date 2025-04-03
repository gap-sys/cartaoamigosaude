import Link from 'next/link'

import S from './footer.module.scss'

const Footer = () => (
  <div className={S.footer}>
    <div className={S['section-footer']}>
      <div className={S['section-policys']}>
        <ul className={S.policys}>
          <li className={S.title}>@ 2023, Amigo Saúde - Todos direitos reservados</li>
          <Link href="/politica-de-privacidade">
            <li className={S.title}>Política de Privacidade</li>
          </Link>
          <Link href="/regulamentos">
            <li className={S.title}>Regulamentos</li>
          </Link>
          <Link href="/contrato-de-adesao">
            <li className={S.title}>Contrato de Adesão</li>
          </Link>
          <Link href="/intranet">
            <li className={S.title}>Intranet</li>
          </Link>
        </ul>
      </div>
      <div className={S['section-adm']}>
        <h6 className={S.title}>Administradora de cartao amigo saude ltda</h6>
        <p className={S.subtitle}>Endereço: Rua Valentim Amaral, 236, Santa Cruz, 13521-134 - São Pedro SP</p>
      </div>
    </div>
  </div>
)

export default Footer
