import { type ReactNode } from 'react'

import S from './policy.module.scss'

interface PolicysLayoutProps {
  children: ReactNode
}

const Policys = ({ children }: PolicysLayoutProps) => (
  <div className={S.container}>
    <main>{children}</main>
  </div>
)

export default Policys
