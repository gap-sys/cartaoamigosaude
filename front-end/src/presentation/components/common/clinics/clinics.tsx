import { IMAGE } from 'src/presentation/assets'
import { Button } from '../../form'

import S from './clinics.module.scss'
import Link from 'next/link'

const Clinics = () => {
  return (
    <div className={S.container}>
      <div className={S.content}>
        <div className={S.logo}>
          <img src={IMAGE.LOGO_MAO_AMIGA.src} alt="Mão Amiga" />
        </div>
        <div className={S.text}>
          <h2>Clínicas Mão Amiga</h2>
          <p>
            Para proporcionar a você a melhor assistência, temos uma ampla rede de clínicas parceiras pelo Brasil. Elas
            estão prontas para realizar consultas, exames e procedimentos, tanto presenciais quanto online. Descubra o
            quão simples é agendar uma consulta a um preço acessível e ter acesso aos melhores profissionais da área!
          </p>
          <Link href="#">
            <Button label="Saiba Mais" width="140px" typeStyle="btn1" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Clinics
