import Link from 'next/link'

import { Button } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import S from './franchisee-about.module.scss'

const FranchiseeAbout = () => {
  return (
    <div>
      <div className={S.container}>
        <section className={S.section}>
          <div className={S.sectionImage}>
            <img src={IMAGE.ACORDO.src} alt="Quem somos?" />
          </div>
          <div className={S.sectionContent}>
            <h2 className={S.sectionTitle}>Quem somos?</h2>
            <p className={S.sectionText}>
              Fundado em 2011, somos uma empresa comprometida em proporcionar a melhor experiência em cuidados de saúde
              com o melhor custo-benefício. Localizada no interior de São Paulo, na cidade de São Pedro, nossa jornada
              começou com a missão de oferecer soluções inovadoras para as necessidades médicas da população.
            </p>
            <p className={S.sectionText}>
              Nos destacamos pela excelência no atendimento personalizado e pela moderna infraestrutura que garantem o
              máximo conforto e bem-estar para nossos pacientes. Ao longo dos anos, desenvolvemos um modelo de negócio
              único, combinando um cartão de saúde com um centro médico, formando uma abrangente rede de profissionais
              em diversas especialidades médicas, odontológicas e não-médicas.
            </p>
            <p className={S.sectionText}>
              Em 2023, alcançamos novos voos e nos tornamos uma Franqueadora, liderada pelos sócios-fundadores Allan
              Bertho e Letícia Antonelli. Essa expansão é fruto de nossa paixão em proporcionar cuidados médicos de
              qualidade e aprimorar o acesso à saúde em todo o país.
            </p>
            <Link className={S.link} href="#formulario">
              <Button typeStyle="btn2" label="Preencher Formulário" width="210px" />
            </Link>
          </div>
        </section>
      </div>
      <section className={S.advantages}>
        <div className={S.boxContainer}>
          <h1 className={S.title}>Quais as vantagens?</h1>
          <div className={S.boxSection}>
            <div className={S.box}>
              <h3>+ de 140 mil</h3>
              <p>associados pelo Brasil</p>
            </div>
            <div className={S.box}>
              <h3>R$ 200 mil</h3>
              <p>faturamento médio mensal</p>
            </div>
            <div className={S.box}>
              <h3>10 anos</h3>
              <p>de experiência no mercado</p>
            </div>
            <div className={S.box}>
              <h3>08 meses</h3>
              <p>para o break even</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FranchiseeAbout
