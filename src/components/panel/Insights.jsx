import React from 'react'
import Card from './Card/Card'

const Insights = () => {
    const cardsInfo = [
        {
            id: 1,
            num: 12.361,
            title: "Users",
            countUp: 25
        },
        {
            id: 2,
            num: 431.361,
            title: "Posts",
            countUp: 20
        },
        {
            id: 3,
            num: 275.1,
            title: "Comments",
            countUp: 50
        },
        {
            id: 4,
            num: 27,
            title: "Todos",
            countUp: 70
        },
    ];

  return (
    <div className='m-3'>
       <div className="row">
        { cardsInfo.map(card=> <Card key={card.id} card={card} />)}
       </div>
    </div>
  )
}

export default Insights