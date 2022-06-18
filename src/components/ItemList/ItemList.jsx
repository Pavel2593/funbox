import React from 'react'
import Item from '../Item/Item'
import cl from './ItemList.module.scss'

const ItemList = ({items, title}) => {
    return (
        <section className={cl.items}>
            {title&&
                <h1 className={cl.items__title}>{title}</h1>
            }
            <div className={cl.items__list}>
                {items &&
                    items.map((item) => (
                        <Item
                            key={item.id}
                            item={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default ItemList