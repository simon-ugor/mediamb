import Layout from "../components/Layout"

import Head from "next/head"
import Footer from "../components/Footer"
import Link from "next/link"
import { useState } from "react"

const kontakt = () => {

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
                <title>Základné informácie</title>
                <meta name="description" content="Základné informácie o medicínskej firme MEDIAMB, s. r. o."></meta>
            </Head>
            <div className="content-main-div">
                <div style={{display: main}}>
                    <h1 className="heading-main">Základné informácie</h1>
                    <p style={{textDecoration: "underline"}} className="paragraf-main">
                        Obchodné meno: 
                    </p>
                    <p className="paragraf-main">MEDIAMB, s.r.o.</p>
                    <p style={{textDecoration: "underline"}} className="paragraf-main">IČO:</p>
                    <p className="paragraf-main">36 358 235</p>
                    <p style={{textDecoration: "underline"}} className="paragraf-main">Deň zápisu:</p>
                    <p className="paragraf-main">28.07.2006</p>
                    <p style={{textDecoration: "underline"}} className="paragraf-main">Právna forma:</p>
                    <p className="paragraf-main">Spoločnosť s ručením obmedzeným</p>
                    <p style={{textDecoration: "underline"}} className="paragraf-main">Dátum aktualizácie údajov:</p>
                    <p className="paragraf-main">25.01.2021</p>
                    <Footer />
                </div>
                <div className="menu-div" style={{display: menu}}>
                    <div className="close-div">
                        <button onClick={handleClick} className="x-button">x</button>
                    </div>
                    <ul className="menu-list">
                        <Link href="/"><li className="list-element">&#x2022; Domov</li></Link>
                        <Link href="zakladneinformacie"><li style={{color: "rgb(47,136,201)"}} className="list-element">&#x2022; Základné informácie</li></Link>
                        <Link href="kontakt"><li className="list-element">&#x2022; Kontakt</li></Link>
                        <Link href="sidlofirmy"><li className="list-element">&#x2022; Sídlo firmy</li></Link>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default kontakt