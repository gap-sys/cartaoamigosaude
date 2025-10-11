import Link from 'next/link'

import { IMAGE } from 'src/presentation/assets'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import S from './carousel.module.scss'

const Carousel = () => {
  const CAROUSEL = [
    { src: IMAGE.BANNER_1.src, link: '/#planos' },
    { src: IMAGE.BANNER_2.src, link: '/baixe-o-app' },
    { src: IMAGE.BANNER_3.src, link: '#' },
  ]

  return (
    <div className={S.container}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        autoplay={{ delay: 3000 }}
        className={S.swiper}
      >
        {CAROUSEL.map((item, index) => (
          <SwiperSlide key={index} className={S.swiperSlide}>
            <Link href={item.link}>
              <img className={S.img} src={item.src} alt={`Slide ${index + 1}`} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel
