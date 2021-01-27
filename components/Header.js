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
                <Link href="/"><li className="list-element">&#x2022; Domov</li></Link>
                <Link href="zakladneinformacie"><li className="list-element">&#x2022; Základné informácie</li></Link>
                <Link href="kontakt"><li className="list-element">&#x2022; Kontakt</li></Link>
                <Link href="sidlofirmy"><li className="list-element">&#x2022; Sídlo firmy</li></Link>
            </div>
        </div>
    )
}

export default Header