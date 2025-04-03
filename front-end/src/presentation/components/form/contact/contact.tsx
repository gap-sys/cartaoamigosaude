import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button } from 'src/presentation/components'

import { FiPhone, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import S from './contact.module.scss'

const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  phone: yup.string().required('Telefone é obrigatório'),
  message: yup.string().required('Mensagem é obrigatória'),
})

const ContactForm = () => {
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
      window.location.href =
        'https://api.whatsapp.com/send/?phone=5519989512404&text=Olá! Estava no site e gostaria de tirar uma dúvida.'
    }, 1000)
  }

  return (
    <div className={S.contactSection}>
      <div className={S.container}>
        <div className={S.info}>
          <h2>Vamos conversar?</h2>
          <p>
            Estamos aqui para ouvir, ajudar e responder a todas as suas questões. Conecte-se conosco e torne sua
            experiência com a Amigo Saúde ainda melhor!
          </p>

          <ul className={S.contactList}>
            <li>
              <a href="tel:08003235084">
                <FiPhone className={S.icon} />
                0800 323 5084 (Vendas | SAC)
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=5519989512404&text=Olá! Estava no site e gostaria de tirar uma dúvida."
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className={S.icon} />
                (19) 98951-2404 (Vendas WhatsApp)
              </a>
            </li>
            <li>
              <a href="mailto:sac@cartaoamigosaude.com.br">
                <FiMail className={S.icon} />
                sac@cartaoamigosaude.com.br
              </a>
            </li>
          </ul>

          <p>
            Se você tem dúvidas, reclamações ou sugestões, preencha nosso formulário. Estamos sempre prontos para
            atender e aprimorar nossos serviços com base em seus feedbacks.
          </p>
        </div>

        <form className={S.form} onSubmit={handleSubmit(onSubmit)}>
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
          <div className={S.inputGroup}>
            <textarea className={S.input} rows={4} placeholder="Como nós podemos te ajudar?" {...register('message')} />
            {errors.message && <p className={S.error}>{errors.message.message}</p>}
          </div>

          <Button typeStyle="btn4" width="100%" label={loading ? 'ENVIANDO...' : 'Enviar'} />
        </form>
      </div>
    </div>
  )
}

export default ContactForm
