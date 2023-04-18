import { Link } from "react-router-dom"

export default function CryptoList( { list } ) {
    const CryptoListItem = ( { crypto } ) => {
        const route = '/' + crypto.slug
        return (
            <Link to={route}>{crypto.symbol} - {crypto.name}</Link>
        )
    }

    return (
        list.map(crypto => {
            return <li><CryptoListItem crypto={crypto}></CryptoListItem></li>
        })
    )
}