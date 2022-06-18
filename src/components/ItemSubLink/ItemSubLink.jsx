import React from 'react'
import cl from './ItemSubLink.module.scss'

const ItemSubLink = ({ isHover, isSelected, isHave, description, taste }) => {
    return (
        <div className={cl.link}>
            {(isSelected && isHave) &&
                <div>{description}</div>
            }
            {(!isSelected && isHave) &&
                <div>Чего сидишь? Порадуй котэ, <a className={[cl.link__text, isHover ? cl.link__text : ''].join(' ')} href="/">купи</a>.</div>
            }
            {!isHave &&
                <div className={[cl.link, cl.link_disabled].join(' ')}>Печалька, {taste} закончился.</div>
            }
        </div>
    )
}

export default ItemSubLink