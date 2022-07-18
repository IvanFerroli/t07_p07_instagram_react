export default function Header() {
    return(
       <>
        <header>
            <div className="top">
                <div className="logo">
                    <a href="#">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    <div className="separador not-mobile"></div>
                    <a href="#"><img className="not-mobile" src="assets/img/instagram-logo.svg" alt="Instagram Logo"/></a>
                </div>
                <div className="search-bar not-mobile">Pesquisar</div>
                <img className="mobile" src="assets/img/instagram-logo.svg" alt="Instagram Logo"></img>
                <div className="menu">
                    <a href="#">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </a>
                    <a href="#">
                        <ion-icon name="compass-outline" className="not-mobile"></ion-icon>
                    </a>
                    <a href="#">
                        <ion-icon name="heart-outline" className="not-mobile"></ion-icon>
                    </a>
                    <a href="#">
                        <ion-icon name="person-outline" className="not-mobile"></ion-icon>
                    </a>
                </div>
            </div>
        </header>   
        </>
    )
}