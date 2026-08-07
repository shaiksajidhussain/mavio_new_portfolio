import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-gold-gradient text-navy-deep font-semibold hover:brightness-105 shadow-card',
  navy: 'bg-navy text-white font-semibold hover:bg-navy-deep',
  outline:
    'border border-line text-ink hover:border-gold hover:text-navy dark:hover:text-gold',
}

export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm transition-all duration-200 hover:scale-[1.04] active:scale-[0.97] ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  )
}
