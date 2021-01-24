import Image from "next/image"

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
        </div>
    )
}

export default Header