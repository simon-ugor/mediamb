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
                <title>Kontakt</title>
                <meta name="description" content="Kontakt na medicínsku firme MEDIAMB, s. r. o."></meta>
            </Head>
            <div className="content-main-div">
                <div style={{display: main}}>
                    <h1 className="heading-main">Kontakt</h1>
                    <p className="paragraf-main">
                        Kontaktovať nás môžete na: 
                    </p>
                    <Footer />
                </div>
                <div className="menu-div" style={{display: menu}}>
                    <div className="close-div">
                        <button onClick={handleClick} className="x-button">x</button>
                    </div>
                    <ul className="menu-list">
                        <Link href="/"><li className="list-element">&#x2022; Domov</li></Link>
                        <Link href="kontakt"><li style={{color: "rgb(47,136,201)"}} className="list-element">&#x2022; Kontakt</li></Link>
                        <Link href="/"><li className="list-element">&#x2022; Sídlo firmy</li></Link>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default kontakt