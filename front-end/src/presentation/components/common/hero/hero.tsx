import S from './hero.module.scss'

type HeroProps = {
  imageUrl: string
  text: string
  fullWidth?: boolean
}

const Hero = ({ imageUrl, text, fullWidth = false }: HeroProps) => {
  return (
    <div className={fullWidth ? S.heroContainerFull : S.heroContainer}>
      <img src={imageUrl} alt="Hero" className={S.heroImage} />
      <div className={S.overlay}>
        <h1 className={S.heroText}>{text}</h1>
      </div>
    </div>
  )
}

export default Hero
