import Navbar from "./Navbar";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="hgroup-wrap">
                    <div className="site-logo">
                        <span>PLC</span>
                    </div>
                    <Navbar/>
                </div>
            </div>
        </header>
    );
}

export default Header;