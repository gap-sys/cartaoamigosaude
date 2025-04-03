import { NavItem } from 'src/presentation/components'
import { NavMobileProps } from 'src/data/models'
import { ICON } from 'src/presentation/assets'
import { MENU } from 'src/data/ui'

import S from './nav-mobile.module.scss'

const NavMobile = ({ closeMenu }: NavMobileProps) => {
  const handleClick = () => {
    closeMenu()
  }

  return (
    <div className={S['mobile-nav-container']}>
      <nav className={S['mobile-nav']}>
        <section className={S['close-section']}>
          <ICON.IconX onClick={closeMenu} className={S['close-icon']} />
        </section>
        <div className={S['nav-items']}>
          {MENU.map((item, key) => (
            <NavItem
              key={key}
              label={item.label}
              new={item.new}
              link={item.link}
              onClick={handleClick}
              blank="none"
              closeMenu={closeMenu}
            >
              {item.children}
            </NavItem>
          ))}
        </div>
        <div className={S['button-section']}>
          <ICON.IconBrandWhatsapp className={S.icon} />
          <a
            href="https://api.whatsapp.com/send?phone=5519989512404&text=Ol%C3%A1,%20tudo%20bem?%20Estava%20no%20site%20de%20voc%C3%AAs%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida."
            target="_blank"
            rel="noopener noreferrer"
            className={S.link}
          >
            <span>Fale conosco</span>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default NavMobile
