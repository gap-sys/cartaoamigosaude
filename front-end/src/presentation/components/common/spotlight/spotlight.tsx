import Link from 'next/link'

import { Button } from 'src/presentation/components'

import S from './spotlight.module.scss'

type SpotlightProps = {
  title: string
  paragraph: string
  image: string
  alt: string
  position: 'left' | 'right'
  titleSize?: string
  buttonLabel?: string
  lineHeight?: string
}

const Spotlight = ({ title, paragraph, image, alt, position, titleSize, buttonLabel, lineHeight }: SpotlightProps) => (
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

export default Spotlight
