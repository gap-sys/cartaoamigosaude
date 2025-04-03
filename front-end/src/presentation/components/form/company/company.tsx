import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button } from 'src/presentation/components'

import S from './company.module.scss'

const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  company: yup.string().required('Razão social é obrigatória'),
  cnpj: yup.string().required('CNPJ é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  whatsapp: yup.string().required('WhatsApp é obrigatório'),
  employees: yup.string().required('Selecione o número de funcionários'),
  city: yup.string().required('Cidade é obrigatória'),
  state: yup.string().required('Estado é obrigatório'),
})

const CompanyForm = () => {
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
    <div className={S.contactSection}>
      <div className={S.container}>
        <div className={S.info}>
          <h2>Eleve o Bem-Estar da Sua Equipe Hoje!</h2>
          <p>
            O sucesso da sua empresa começa com o bem-estar de seus colaboradores. Deixe-nos ajudar a proporcionar os
            melhores cuidados de saúde e benefícios com o Cartão Amigo Saúde. Preencha o formulário e descubra como
            podemos transformar a saúde e a satisfação da sua equipe.
          </p>
        </div>

        <form className={S.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={S.inputGroup}>
            <input className={S.input} type="text" placeholder="Qual o seu nome?" {...register('name')} />
            {errors.name && <p className={S.error}>{errors.name.message}</p>}
          </div>
          <div className={S.inputSolo}>
            <input className={S.input} type="text" placeholder="Razão social" {...register('company')} />
            <input className={S.input} type="text" placeholder="CNPJ" {...register('cnpj')} />
          </div>
          <div className={S.inputSolo}>
            <input className={S.input} type="email" placeholder="Informe o seu e-mail" {...register('email')} />
            <input className={S.input} type="text" placeholder="WhatsApp (DDD+Número)" {...register('whatsapp')} />
          </div>
          <div className={S.inputGroup}>
            <label className={S.label}>Número de funcionários</label>
            <select className={S.input} {...register('employees')}>
              <option value="1-10">De 1 a 10 funcionários</option>
              <option value="10-20">De 10 a 20 funcionários</option>
              <option value="21-50">De 20 a 50 funcionários</option>
              <option value="21-50">De 50 a 100 funcionários</option>
              <option value="51+">Acima de 100 funcionários</option>
            </select>
          </div>
          <div className={S.inputSolo}>
            <input className={S.input} type="text" placeholder="Qual a sua cidade?" {...register('city')} />
            <select className={S.inputUfs} {...register('state')}>
              <option value="">UF</option>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
            </select>
          </div>
          <Button typeStyle="btn4" width="100%" label={loading ? 'ENVIANDO...' : 'Enviar'} />
        </form>
      </div>
    </div>
  )
}

export default CompanyForm
