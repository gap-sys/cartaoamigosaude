import { useState } from 'react'

import { IMAGE } from 'src/presentation/assets'
import { Button } from 'src/presentation/components'

import S from './discount.module.scss'

const Discount = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={S.containerBoss}>
      <div className={S.container}>
        <div className={S.content}>
          <div className={S.text}>
            <h2>Medicamentos com desconto</h2>
            <p>
              Garanta de 20% a 80% de desconto em medicamentos nas nossas farmácias <br /> parceiras. Localize a mais
              próxima e aproveite os benefícios diretamente <br /> pelo nosso APP!
            </p>

            <div className={S.accordion} onClick={() => setIsExpanded(!isExpanded)}>
              <span className={S.accordionTitle}>{isExpanded ? '▼' : '▶'} Como utilizar o Desconto?</span>
              {isExpanded && (
                <div className={S.accordionContent}>
                  <ol className={S.listNumbers}>
                    <li>1 - Vá até o balconista da farmácia</li>
                    <li>2 - Abra o Aplicativo: Tem Saúde</li>
                    <li>3 - Clique em: Medicamentos com desconto</li>
                  </ol>
                  <strong>O que o balconista precisa saber:</strong>
                  <ul className={S.listTexts}>
                    <li>
                      Convênio: <strong>TemPay</strong>
                    </li>
                    <li>Nº do Cartão</li>
                    <li>
                      Nome da empresa autorizadora de descontos: <strong>Amigo Saúde</strong>
                    </li>
                    <li>Data de Nascimento</li>
                  </ul>
                </div>
              )}
            </div>

            <div className={S.partners}>
              <div className={S.space}>
                <img src={IMAGE.DROGA_RAIA.src} alt="Droga Raia" />
                <img src={IMAGE.DROGAL.src} alt="Drogal" />
              </div>
              <a href="https://pesquisamedicamento.epharma.com.br/?benefitId=244926">
                <Button typeStyle="btn1" width="290px" label="CONSULTAR REDE CREDENCIADA" />
              </a>
            </div>
          </div>
          <div className={S.image}>
            <img src={IMAGE.MEDICOS_COM_REMEDIO.src} alt="Médicos analisando medicamento" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discount
