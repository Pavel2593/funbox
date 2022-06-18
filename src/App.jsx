import React from 'react'
import ItemList from './components/ItemList/ItemList'

const App = () => {
    const itemList = [
        {
            id: 0,
            isHave: true,
            description: 'Печень утки разварная с артишоками.',
            title: 'Нямушка',
            taste: 'с фуа-гра',
            portions: '10 порций',
            gift: 'Мышь в подарок',
            weight: '0,5'
        },
        {
            id: 1,
            isHave: true,
            description: 'Щучьи головы с чесноком да свежайшая сёмгушка.',
            title: 'Нямушка',
            taste: 'с рыбой',
            portions: '40 порций',
            gift: '2 мыши в подарок',
            weight: '2'
        },
        {
            id: 2,
            isHave: false,
            description: 'Филе из цыплят с трюфелями в бульоне.',
            title: 'Нямушка',
            taste: 'с курой',
            review: 'заказчик доволен',
            portions: '100 порций',
            gift: '5 мышей в подарок',
            weight: '5'
        }
    ]
    return (
        <main className='main'>
            <ItemList
                title='Ты сегодня покормил кота?'
                items={itemList}
            />
        </main>
    )
}

export default App