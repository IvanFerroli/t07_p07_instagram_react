import LikeButton from './LikeButton'

export default function Posts() {
    const posts = [
        { userImage: "assets/img/hoonigan.jpg", postImage: "assets/img/hoonicorn_v2.webp", name: "Hoonigan", postLike: "assets/img/biela_turbo.jpg", postLikeName: "bielaturbo" },
        { userImage: "assets/img/biela_turbo.jpg", postImage: "assets/img/widebody_chevette.jpg", name: "bielaturbo", postLike: "assets/img/hoonigan.jpg", postLikeName: "Hoonigan" },
        { userImage: "assets/img/hoonigan.jpg", postImage: "assets/img/hoonicorn_v2.webp", name: "Hoonigan", postLike: "assets/img/biela_turbo.jpg", postLikeName: "bielaturbo" },
        { userImage: "assets/img/biela_turbo.jpg", postImage: "assets/img/widebody_chevette.jpg", name: "bielaturbo", postLike: "assets/img/hoonigan.jpg", postLikeName: "Hoonigan" }
      ];
    
    return(
        <div>  
            {posts.map((post) => (
                <div className="post">
                <div className="post-top">
                    <a href="https://www.instagram.com/ivan_ferroli/">
                        <div className="user-info">
                            <img src={post.userImage} alt={post.name}/>
                            <p><strong>hoonigan</strong></p>
                        </div>
                    </a>
                    <a href="#">
                        <ion-icon className="ion" name="ellipsis-horizontal"></ion-icon>
                    </a>
                </div>
                <div className="post-middle">
                    <a href="#">
                        <img src={post.postImage} alt={post.name}/>
                    </a>
                </div>
                <div className="post-bottom">
                    <div className="post-icons">
                        <div className="left-icons">
                            
                                
                                <ion-icon name="heart-outline" ></ion-icon>
                            
                                <ion-icon name="chatbubble-outline" ></ion-icon>
                           
                                <ion-icon name="paper-plane-outline"></ion-icon>
                           
                        </div>
                        
                            <ion-icon name="bookmark-outline"></ion-icon>
                       
                    </div>
                    <div className="likes">
                        <a href="#"><img src={post.postLike} alt={post.postLikeName}></img></a>
                        <p>Curtido por <a href="#"><strong>{post.postLikeName}</strong></a> e <a href="#"><strong>outras 101.523 pessoas</strong></a></p>
                    </div>
                </div>         
            </div>
            ))}
        </div>
    )
}

