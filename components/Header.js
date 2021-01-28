import Image from "next/image"
import Link from "next/link"

const Header = (props) => {

    const handleClick = () => {
        props.func()
    }

    return (
        <div className="header-main-div">
            <div className="logo-div">
                <Image
                    src="/logo.png"
                    alt="Mediamb Logo"
                    width={188}
                    height={53} 
                />
            </div>
            <div className="menu-button-div">
                <button onClick={handleClick} className="menu-button"></button>
            </div>
            <div className="menu-desktop-div">
                <Link href="/"><a className="list-element">&#x2022; Domov</a></Link>
                <Link href="zakladneinformacie"><a className="list-element">&#x2022; Základné informácie</a></Link>
                <Link href="kontakt"><a className="list-element">&#x2022; Kontakt</a></Link>
            </div>
        </div>
    )
}

export default Header