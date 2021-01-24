
import Header from "./Header"

const Layout = (props) => {
    return (
        <div>
            <Header func={props.func} />
            {props.children}
        </div>
    )
}

export default Layout