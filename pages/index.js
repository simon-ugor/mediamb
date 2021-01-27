import Layout from "../components/Layout"

import Head from "next/head"
import Footer from "../components/Footer"
import Link from "next/link"
import { useState } from "react"

const index = () => {

    const [menu, setMenu] = useState("none")
    const [main, setMain] = useState("")

    const test = () => {
        setMenu("")
        setMain("none")
    }

    const handleClick = () => {
        setMenu("none")
        setMain("")
    }

    return (
        <Layout func={test}>
            <Head>
                <title>MEDIAMB, s. r. o.</title>
                <meta name="description" content="Informácie o medicínskej firme MEDIAMB, s. r. o."></meta>
            </Head>
            <div className="content-main-div">
                <div style={{display: main}}>
                    <h1 className="heading-main">Kto sme?</h1>
                    <p className="paragraf-main">
                        Mediamb, s. r. o. je medicínska spoločnosť
                        s ambulanciou v Hlohovci. Sme ambulancia chirurgie
                        a úrazovej chirurgie (traumatológie). Zdravotnú
                        starostlivosť u nás zabezpečujú lekári, ktorí zároveň pracujú
                        a operujú vo FN Trnava na klinike ortopédie a úrazovej
                        chirurgie. Poskytujeme komplexnú starostlivosť o úrazy,
                        či už ambulatne alebo operačne v nemocnici. Naša starostlivosť
                        zahŕňa aj pooperačné kontroly, obzvlášť po operáciach úrazov.
                    </p>
                    <h1 className="heading-main">Kde nás nájdete?</h1>
                    <p className="paragraf-main">Poliklinika Hlohovec, prvé poschodie vpravo</p>
                    <div className="map-div">
                        <iframe className="map" width="93%" height="550px" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=N%C3%A1bre%C5%BEie%20A.%20Hlinku%2027%20Hlohovec+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://www.symptoma.sk/sk/info/covid-19#info'>SARS-CoV-2</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=4e9e53e992ef2e9420131e9eecb5d595cdef4818'></script>
                    </div>
                    <Footer />
                </div>
                <div className="menu-div" style={{display: menu}}>
                    <div className="close-div">
                        <button onClick={handleClick} className="x-button">x</button>
                    </div>
                    <ul className="menu-list">
                        <Link href="/"><li style={{color: "rgb(47,136,201)"}} className="list-element">&#x2022; Domov</li></Link>
                        <Link href="zakladneinformacie"><li className="list-element">&#x2022; Základné informácie</li></Link>
                        <Link href="kontakt"><li className="list-element">&#x2022; Kontakt</li></Link>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default index