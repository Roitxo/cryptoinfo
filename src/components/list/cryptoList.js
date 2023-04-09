import CryptoListItem from "./cryptoListItem"

export default function CryptoList( { list } ) {
    return (
        list.map(crypto => {
            return <li><CryptoListItem crypto={crypto}></CryptoListItem></li>
        })
    )
}