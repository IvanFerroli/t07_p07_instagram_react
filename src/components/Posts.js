import { Heart, HeartOutline, ChatbubbleOutline, BookmarkOutline, PaperPlaneOutline, EllipsisHorizontal} from 'react-ionicons'
import React, { Fragment, useState } from "react";
const LikeButton = () => {
    const [like, setLike] = React.useState(false); 
  
    return (
      <Fragment>
        {like ? (
          <Heart onClick={() => setLike(false)} name="heart" color={'#ED4956'} />
        ) : (
          <HeartOutline onClick={() => setLike(true)} name="heart" color={'#000000'} />
        )}
      </Fragment>
    );
  };

/* import LikeButton from './LikeButton' */

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
                        <EllipsisHorizontal name="ellipsis-horizontal"/>
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
                            
                                
                                {/* <{like? "Heart" : "HeartOutline"} name="heart" color={like? "red" : "black"} onClick={() => {
                                    if(like == true){
                                        setLike = false;
                                    }else{
                                        setLike = true;
                                    }
                                }}/> */}
                                < LikeButton /> 
                            
                                <ChatbubbleOutline name="chatbubble-outline" />
                           
                                <PaperPlaneOutline name="paper-plane-outline"/>
                           
                        </div>
                        
                            <BookmarkOutline name="bookmark-outline"/>
                       
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

