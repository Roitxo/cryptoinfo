import { Link } from "react-router-dom"

export default function NavTopbar() {
    const menuItems = [
        { link: "/", name: "home" },
        { link: "/crypto", name: "crypto" },
        { link: "/fiat", name: "FIAT" },
        { link: "/exchanges", name: "exchanges" }
    ]

    const MenuElements = () => {
        return (
            menuItems.map(item => {
                return <li className="navbar-link">
                    <Link to={item.link}>{item.name}</Link>
                </li>
            })
        )
    }

    return (
        <header className="nav-topbar items-center flex">
            <div className="logo w-6/12 flex justify-end align-center font-bold text-xl">($)CryptoInfo</div>
            <nav className="w-6/12">
                <ul className="flex justify-start">
                    <MenuElements />
                </ul>
            </nav>
        </header>
    )
}