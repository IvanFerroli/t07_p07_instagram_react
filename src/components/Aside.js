export default function Aside() {
    const aside = [
        { userImage: "assets/img/midnight_rbz.jpg", name: "midnight_rbz", status: "Segue você" },
        { userImage: "assets/img/respondeai2.svg", name: "respondeai", status: "Segue você" },
        { userImage: "assets/img/cartrottle.jpg", name: "cartrottle", status: "Novo no instagram" },
        { userImage: "assets/img/hoonigan.jpg", name: "hoonigan", status: "Segue você" },
        { userImage: "assets/img/biela_turbo.jpg", name: "bielaturbo", status: "Segue você" },
        { userImage: "assets/img/midnight_rbz.jpg", name: "midnight_rbz", status: "Segue você" },
      ];
    return(
        <div>
            <div className="side-bar">
                <div class="account">
                    <img class="profile-pic" src="assets/img/profile-pic.png"/>
                    <div>
                        <p><strong>ivan_ferroli</strong></p>
                        <p>I V A N</p>
                    </div>
                </div>
                <div class="linha-principal">
                    <p><strong>Sugestões para você</strong></p>
                    <a href="#">
                        <p class="ver-tudo"><strong>Ver tudo</strong></p>
                    </a>
                </div>
                <div class="suggestions">
                {aside.map((suggestion) => (
                        <>
                            <a href="#"/>
                            <p>
                                <div class="suggestion">
                                    <div>
                                        <img class="suggestion-pic" src={suggestion.userImage}/>
                                        <div>
                                            <p><strong>{suggestion.name}</strong></p>
                                            <p>{suggestion.status}</p>
                                        </div>
                                    </div>
                                    <p><strong>Seguir</strong></p>
                                </div>
                            </p>
                        </>
                    ))}
                </div>
                <footer>
                <div className="links">
                    <p><a href="#">Sobre</a></p>
                    <p> • </p>
                    <p><a href="#">Ajuda</a></p>
                    <p> • </p>
                    <p><a href="#">Imprensa</a></p>
                    <p> • </p>
                    <p><a href="#">API</a></p>
                    <p> • </p>
                    <p><a href="#">Carreiras</a></p>
                    <p> • </p>
                    <p><a href="#">Privacidade</a></p>
                    <p> • </p>
                    <p><a href="#">Termos</a></p>
                    <p> • </p>
                    <p><a href="#">Localizações</a></p>
                    <p> • </p>
                    <p><a href="#">Contas mais relevantes</a></p>
                    <p> • </p>
                    <p><a href="#">Hashtags</a></p>
                    <p> • </p>
                    <p><a href="#">Idioma</a></p>
                </div>
                <div className="inst">© 2022 INSTAGRAM FROM META</div>
            </footer>
            </div>
            
        </div>
    )
}