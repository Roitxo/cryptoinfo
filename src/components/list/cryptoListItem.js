import { Link } from "react-router-dom"

export default function CryptoListItem( { crypto } ) {
    const route = '/' + crypto.slug
    return (
        <Link to={route}>{crypto.slug} - {crypto.name}</Link>
    )
}