import Link from 'next/link'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button } from 'src/presentation/components'

import S from './doubt.module.scss'

const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  phone: yup.string().required('Telefone é obrigatório'),
})

const Doubt = () => {
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = () => {
    setLoading(true)
    reset()

    setTimeout(() => {
      window.location.href = '/obrigado-franquia'
    }, 1000)
  }

  return (
    <div className={S.anomecarua}>
      <div className={S.doubtContainer}>
        <div className={S.doubtInfo}>
          <h2>Peça já o seu!</h2>
          <p className={S.text}>
            Quer acesso fácil e acessível aos melhores cuidados de saúde? Peça já o seu Cartão Amigo Saúde e comece a
            desfrutar de consultas ilimitadas, descontos em medicamentos e muito mais. Clique aqui e torne-se um Amigo
            da Saúde hoje mesmo!
          </p>
          <Link className={S.link} href="/#planos">
            <Button typeStyle="btn1" width="150px" label="VER PLANOS" />
          </Link>
        </div>

        <div className={S.doubtForm}>
          <h3>Alguma dúvida?</h3>
          <p className={S.text}>
            Preencha os dados abaixo para conversar com nossa equipe no WhatsApp e esclarecer todas as suas questões!
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={S.inputGroup}>
              <input className={S.input} type="text" placeholder="Qual o seu nome?" {...register('name')} />
              {errors.name && <p className={S.error}>{errors.name.message}</p>}
            </div>
            <div className={S.inputGroup}>
              <input className={S.input} type="email" placeholder="Informe o seu e-mail" {...register('email')} />
              {errors.email && <p className={S.error}>{errors.email.message}</p>}
            </div>
            <div className={S.inputGroup}>
              <input className={S.input} type="tel" placeholder="WhatsApp (DDD+Número)" {...register('phone')} />
              {errors.phone && <p className={S.error}>{errors.phone.message}</p>}
            </div>

            <div className={S.doubtCheckbox}>
              <label>
                <input type="checkbox" />
                <p className={S.paragraph}>Eu aceito receber notificações pelo WhatsApp</p>
              </label>
              <label>
                <input type="checkbox" />
                <p className={S.paragraph}>Eu aceito receber notificações por e-mail</p>
              </label>
            </div>

            <Button typeStyle="btn2" width="100%" label={loading ? 'ENVIANDO...' : 'IR PARA O WHATSAPP'} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Doubt
