import styles from './button.module.scss'

export type ButtonProps = {
  typeStyle: 'btn1' | 'btn2' | 'btn3' | 'btn4' | 'btn5'
  label: string
  width?: string
  onClick?: () => void
  iconLeft?: React.ReactNode
  style?: React.CSSProperties
}

const Button: React.FC<ButtonProps> = ({ typeStyle, label, width, onClick, iconLeft, style }) => {
  const buttonClasses = {
    btn1: styles.btn1,
    btn2: styles.btn2,
    btn3: styles.btn3,
    btn4: styles.btn4,
    btn5: styles.btn5,
  }

  const buttonClass = buttonClasses[typeStyle]

  return (
    <button
      className={`${styles.btn} ${buttonClass}`}
      style={{ width: width || 'auto', ...(style || {}) }}
      onClick={onClick}
    >
      {iconLeft ? <span className={styles.iconLeft}>{iconLeft}</span> : null}
      <span>{label}</span>
    </button>
  )
}

export default Button
