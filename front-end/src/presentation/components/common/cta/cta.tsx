import Link from 'next/link'

import { Button } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import S from './cta.module.scss'

const Cta = () => {
  return (
    <div
      className={S.container}
      style={{
        backgroundImage: `url(${IMAGE.CRIANCA_NA_GRAMA.src})`,
      }}
    >
      <div className={S.content}>
        <h2>Ainda não é nosso cliente?</h2>
        <p>Clique no botão abaixo para conhecer os nosso planos</p>
        <Link href="/#planos">
          <Button typeStyle="btn2" label="Conhecer planos" width="180px" />
        </Link>
      </div>
    </div>
  )
}

export default Cta
