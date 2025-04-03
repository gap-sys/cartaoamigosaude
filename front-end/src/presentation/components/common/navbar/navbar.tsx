'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { NavMobile } from 'src/presentation/components'
import { IMAGE, ICON } from 'src/presentation/assets'
import { NavbarItemProps } from 'src/data/models'
import { getLinkAttributes } from 'src/utils'
import { MENU } from 'src/data/ui'

import S from './navbar.module.scss'

const Navbar = () => {
  const [isSideMenuOpen, setSideMenu] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (link === '#') {
      e.preventDefault()
    }
  }

  return (
    <nav className={S.container}>
      <div className={S.navbar}>
        <section className={S['left-section']}>
          <Link href="/" legacyBehavior>
            <a>
              <Image src={IMAGE.LOGO} alt="Logo Cartão Saúde" className={S.logo} />
            </a>
          </Link>
          {isSideMenuOpen && <NavMobile closeMenu={() => setSideMenu(false)} />}
          <div className={S['nav-items']}>
            {MENU.map((item, key) => (
              <div key={key} className={S['nav-link']}>
                <Link href={item.link ?? '#'} legacyBehavior>
                  <a className={S['link-text']} onClick={(e) => handleClick(e, item.link ?? '#')}>
                    <span>{item.label}</span>
                    {item.children && <ICON.IoIosArrowDown className={`${S['arrow-icon']} ${S['rotate-180']}`} />}
                  </a>
                </Link>
                {item.children && (
                  <div className={S.dropdown}>
                    {item.children.map((child: NavbarItemProps, key: number) => (
                      <Link key={key} href={child.link} legacyBehavior>
                        <a
                          className={S['dropdown-link']}
                          {...getLinkAttributes(child.link)}
                          onClick={(e) => handleClick(e, child.link)}
                        >
                          <span className={S['link-label']}>{child.label}</span>
                          {child.new && <p className={S.new}>{child.new}</p>}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={S['right-section']}>
            <Link href="/#planos" legacyBehavior>
              <a className={S.link}>
                <span>Peça já</span>
              </a>
            </Link>
          </div>
        </section>

        <ICON.IconMenu3 onClick={() => setSideMenu(true)} className={S['menu-icon']} />
      </div>
    </nav>
  )
}

export default Navbar
