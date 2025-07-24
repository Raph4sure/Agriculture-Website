import clsx from 'clsx'
import style from './../styles/ui/buttons.module.scss'

function Buttons({ children, className}) {
    return (
        <button className={clsx(style.button, className)} >
            {children}
        </button>
    )
}

export default Buttons
