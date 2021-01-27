import Layout from "../components/Layout"

import Head from "next/head"
import Footer from "../components/Footer"
import Link from "next/link"
import { useState } from "react"

const sidloFirmy = () => {

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
                <title>Kontakt</title>
                <meta name="description" content="Kontakt na medicínsku firme MEDIAMB, s. r. o."></meta>
            </Head>
            <div className="content-main-div">
                <div style={{display: main}}>
                    <h1 className="heading-main">Sídlo firmy</h1>
                    <div className="map-div">
                        <iframe className="map" width="93%" height="550px" frameBorder="" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=W.%20Schiffera%205%20Trnava+(MATIAMB)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://www.symptoma.sk/sk/info/covid-19#info'>SARS-CoV-2</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=51a6ed110e48cf5bc0de94d3ad6da25ca8f9ea35'></script>
                    </div>
                    <Footer />
                </div>
                <div className="menu-div" style={{display: menu}}>
                    <div className="close-div">
                        <button onClick={handleClick} className="x-button">x</button>
                    </div>
                    <ul className="menu-list">
                        <Link href="/"><li className="list-element">&#x2022; Domov</li></Link>
                        <Link href="zakladneinformacie"><li className="list-element">&#x2022; Základné informácie</li></Link>
                        <Link href="kontakt"><li className="list-element">&#x2022; Kontakt</li></Link>
                        <Link href="sidlofirmy"><li style={{color: "rgb(47,136,201)"}} className="list-element">&#x2022; Sídlo firmy</li></Link>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default sidloFirmy