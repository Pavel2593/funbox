import React from 'react'
import { useState } from 'react'
import ItemSubLink from '../ItemSubLink/ItemSubLink'
import cl from './Item.module.scss'

const Item = ({item}) => {
    const {
        isHave,
        description,
        title,
        taste,
        review,
        portions,
        gift,
        weight
    } = item

    const [isSelectedItem, setIsSelectedItem] = useState(false)
    const [isHoverItem, setIsHoverItem] = useState(false)

    let classesItem = [
        cl.item,
        isSelectedItem && isHave ? cl.selected : '',
        isHave ? '' : cl.disabled,
    ]

    const clickItem = () => {
        if (isHave) {
            setIsSelectedItem(!isSelectedItem)
        }
    }

    return (
        <div className={classesItem.join(' ')}>
            <div
                className={cl.item_wrapper}
                onMouseEnter={() => {setIsHoverItem(true)}}
                onMouseLeave={() => {setIsHoverItem(false)}}
                onClick={() => {clickItem()}}
            >
                <div className={cl.item__box}>
                    <p className={cl.item__description}>
                        {isSelectedItem && isHoverItem
                            ?
                            'Котэ не одобряет?'
                            :
                            'Сказочное заморское яство'
                        }
                    </p>
                    <p className={cl.item__title}>{title}</p>
                    <p className={cl.item__taste}>{taste}</p>
                    <p className={cl.item__portions}>{portions}</p>
                    <p className={cl.item__gift}>{gift}</p>
                    {review&&
                        <p className={cl.item__review}>{review}</p>
                    }
                    
                    <img
                        className={cl.item__img}
                        src={isHave ? './cat.png' : './cat-disabled.png'}
                        alt="cat"
                        width='320'
                        height='273'
                    />
                    <div className={cl.weight}>
                        <div className={cl.weight__value}>{weight}</div>
                        <div className={cl.weight__unit}>кг</div>
                    </div>
                </div>
            </div>
            <ItemSubLink
                taste={taste}
                description={description}
                isHover={isHoverItem}
                isSelected={isSelectedItem}
                isHave={isHave}
            />
        </div>
    )
}

export default Item