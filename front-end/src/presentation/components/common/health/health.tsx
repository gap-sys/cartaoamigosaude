import Link from 'next/link'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button } from 'src/presentation/components'

import { FiCheck } from 'react-icons/fi'
import S from './health.module.scss'

const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  phone: yup.string().required('Telefone é obrigatório'),
})

const Health = () => {
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
    <div className={S.healthSection}>
      <div className={S.healthContainer}>
        <div className={S.healthInfo}>
          <h2>O que é o cartão Amigo Saúde?</h2>
          <p>
            É o maior programa de Desconto em Saúde do Brasil. Acesso facilitado aos melhores cuidados de saúde, sendo
            um amigo confiável no seu bem-estar e de seus dependentes.
          </p>
          <ul className={S.list}>
            <li>
              <FiCheck className={S.icon} /> Consultas e exames ilimitados
            </li>
            <li>
              <FiCheck className={S.icon} /> Telemedicina 24 horas
            </li>
            <li>
              <FiCheck className={S.icon} /> Medicamentos de 20% a 80% de Desconto
            </li>
          </ul>
          <Link href="#planos">
            <Button typeStyle="btn1" width="170px" label="PEÇA JÁ O SEU" />
          </Link>
        </div>
      </div>

      <div className={S.healthForm}>
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
  )
}

export default Health
