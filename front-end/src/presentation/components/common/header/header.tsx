import Link from 'next/link'

import { Button, Carousel } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import S from './header.module.scss'

const Header = () => {
  const images = [IMAGE.PRECO.src, IMAGE.DESCONTO.src]

  return (
    <div className={S.container}>
      <div className={S['section-carousel']}>
        <Carousel />
      </div>
      <div className={S['section-prices']}>
        <img src={images[0]} alt="Preços" className={S.img} />
        <img src={images[1]} alt="Preços" className={S.img} />
        <div className={S['section-button']}>
          <Link href="#planos">
            <Button label="VER PLANOS" typeStyle="btn1" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
