import { useEffect, useState } from 'react'
import { getDeck, getCards } from '../../services/deck-of-cards/deck-of-cards'

const DeckOfCards = () => {
    const [deck, setDeck] = useState({
        cards: []
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const deck = await getDeck()
                const data = await getCards(deck)
                setDeck({
                    cards: data.cards
                })
            } catch (err) {
                console.error('Erro ao carregar as cartas: ', err)
            }
        }

        fetchData()
    }, [])

    return (
        <section>
            <ul>{
                deck.cards.map((card, index) => {
                    return (
                        <li key={index} style={{ listStyle: "none" }}>
                            <img src={card.image} alt={card.value}></img>
                        </li>
                    )
                })
            }</ul>
        </section>
    )
}

// class DeckOfCards extends Component{
//     constructor(){
//         super()
//         this.state = {
//             cards: []
//         }
//     }

//     async componentDidMount(){
//         try{
//             const deck = await getDeck()
//             const data = await getCards(deck)
//             this.setState({
//                 cards: data.cards
//             })
//         } catch(err){
//             console.error('Erro ao carregar as cartas: ', err)
//         }
//     }

//     render(){
//         return(
//             <section>
//                 <ul>{
//                         this.state.cards.map((card, index) =>{
//                             return (
//                                 <li key={index} style={{listStyle: "none"}}>
//                                     <img src={card.image} alt={card.value}></img>
//                                 </li>
//                             )
//                         })
//                     }</ul>
//             </section>
//         )
//     }
// }

export default DeckOfCards