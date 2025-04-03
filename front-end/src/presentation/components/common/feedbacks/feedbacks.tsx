import { IMAGE } from 'src/presentation/assets'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Autoplay } from 'swiper/modules'

import S from './feedbacks.module.scss'
import { Button } from '../../form'
import Link from 'next/link'

const FEEDBACKS = [
  {
    text: 'O Cartão Amigo Saúde tornou minhas preocupações com os custos de saúde coisa do passado. Agora, posso buscar ajuda médica quando necessário, sem me preocupar com despesas inesperadas. É um alívio saber que estou coberto, não importa a situação.',
  },
  {
    text: 'Com o Cartão Amigo Saúde, eu economizei muito em exames e consultas! Recomendo para todos que querem acesso à saúde sem burocracia.',
  },
  {
    text: 'Ter um suporte médico disponível quando preciso fez toda a diferença para minha família. O Cartão Amigo Saúde é realmente um amigo da saúde!',
  },
]

const Feedbacks = () => {
  return (
    <div className={S.anomecarua}>
      <div className={S.feedbackContainer}>
        <div className={S.feedbackText}>
          <h2 className={S.titleFeedback}>O que os clientes dizem?</h2>

          <div className={S.sliderWrapper}>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              navigation={false}
              pagination={false}
              className={S.swiperContainer}
            >
              {FEEDBACKS.map((feedback, index) => (
                <SwiperSlide key={index} className={S.swiperSlide}>
                  <p>{feedback.text}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <Link href="/duvidas-frequentes">
            <Button typeStyle="btn1" label="DÚVIDAS FREQUENTES" width="220px" />
          </Link>
        </div>

        <div className={S.feedbackImage}>
          <img src={IMAGE.FAMIALIA_REUNIDA_BRANCOS.src} alt="Pai e filho" />
        </div>
      </div>
    </div>
  )
}

export default Feedbacks
