import Link from 'next/link'

import { Button } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import S from './spotlight-benefits.module.scss'

type SpotlightBenefitsProps = {
  title: string
  paragraph: string
  image: string
  alt: string
  position: 'left' | 'right'
  titleSize?: string
  buttonLabel?: string
  lineHeight?: string
}

const SpotlightBenefits = ({
  title,
  paragraph,
  image,
  alt,
  position,
  titleSize,
  buttonLabel,
  lineHeight,
}: SpotlightBenefitsProps) => (
  <div className={S.container}>
    {position === 'left' && (
      <>
        <div className={S['image-section']}>
          <img className={S.img} src={image} alt={alt} />
        </div>
        <div className={S['text-section']}>
          <h1 className={S.title} style={{ fontSize: titleSize }}>
            {title}
          </h1>
          <p className={S.paragraph}>{paragraph}</p>
          <div className={S.boxIcons}>
            <img src={IMAGE.BOTAO_APPLE.src} alt="Icone Apple Store" />
            <img src={IMAGE.BOTAO_GOOGLE.src} alt="Icone Google Play" />
          </div>
        </div>
      </>
    )}
    {position === 'right' && (
      <>
        <div className={S['text-section']}>
          <h1 className={S.title} style={{ fontSize: titleSize, lineHeight: lineHeight }}>
            {title}
          </h1>
          <p className={S.paragraph}>{paragraph}</p>
          {buttonLabel && (
            <div className={S['btn-section']}>
              <Link href="/#planos">
                <Button typeStyle="btn2" label={buttonLabel} width="240px" />
              </Link>
            </div>
          )}
        </div>
        <div className={S['image-section']}>
          <img className={S.img} src={image} alt={alt} />
        </div>
      </>
    )}
  </div>
)

export default SpotlightBenefits
