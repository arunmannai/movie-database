import Navbar from "./navbar";

function Layout(props) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            {props.children}
        </>
    );
}

export default Layout;