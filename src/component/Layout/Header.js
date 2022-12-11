
const Header = ()=>{
    return(
        <header>
            <div className="container">
                <div className="logo">
                    <h1>NewBazaar</h1>
                    <i className="fa fa-shopping-cart cart-icon"></i>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Enter product name, category"/>
                    <button className="search-btn">
                        Search
                    </button>
                </div>
                <div className="header-links">
                    <span>Cart</span>
                    <span><i className="fa fa-shopping-cart cart-icon"></i></span>
                </div>
            </div>
        </header>
    )
}
export default Header;