import { type ReactNode } from 'react'
import Link from 'next/link'

import { Navbar, Footer, Strip, Sac } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import S from './default.module.scss'
interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => (
  <div>
    <Strip />
    <Navbar />
    <main>{children}</main>
    <Sac />
    <Footer />
    <div className={S.boxWhats}>
      <Link
        href="https://api.whatsapp.com/send?phone=5519989512404&text=Ol%C3%A1,%20tudo%20bem?%20Estava%20no%20site%20de%20voc%C3%AAs%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida."
        target="_blank"
      >
        <img src={IMAGE.ICONE_WHATSAPP.src} alt="WhatsApp" />
      </Link>
    </div>
  </div>
)

export default DefaultLayout
