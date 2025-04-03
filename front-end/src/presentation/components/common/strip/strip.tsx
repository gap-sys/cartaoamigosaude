import S from './strip.module.scss'

const Strip = () => {
  return (
    <div className={S['strip-container']}>
      <div className={S.background}></div>
      <div className={S['animated-bar']}></div>
      <div className={S.content}>
        Peça agora pelo telefone <span className={S.tel}>0800 323 5084</span>
      </div>
    </div>
  )
}

export default Strip
