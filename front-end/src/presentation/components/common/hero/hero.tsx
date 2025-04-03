import S from './hero.module.scss'

type HeroProps = {
  imageUrl: string
  text: string
}

const Hero = ({ imageUrl, text }: HeroProps) => {
  return (
    <div className={S.heroContainer}>
      <img src={imageUrl} alt="Hero" className={S.heroImage} />
      <div className={S.overlay}>
        <h1 className={S.heroText}>{text}</h1>
      </div>
    </div>
  )
}

export default Hero
