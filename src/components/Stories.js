export default function Stories() {
  const stories = [
    { userImage: "assets/img/biela_turbo.jpg", name: "bielaturbo" },
    { userImage: "assets/img/respondeai2.svg", name: "respondeai" },
    { userImage: "assets/img/midnight_rbz.jpg", name: "midnight_rbz" },
    { userImage: "assets/img/donut_media.jpeg", name: "donut_media" },
    { userImage: "assets/img/respondeai2.svg", name: "respondeai" },
    { userImage: "assets/img/driven-logo.jpeg", name: "driven" },
    { userImage: "assets/img/hoonigan.jpg", name: "hoonigan" },
    { userImage: "assets/img/topgear.jpeg", name: "topgear" },
    { userImage: "assets/img/cartrottle.jpg", name: "cartrottle" },
  ];

  return (
    <>
      <div className="stories">
        {stories.map((story) => (
          <a href="https://www.instagram.com/ivan_ferroli/">
            <div className="single-story">
              <img
                className="story-border"
                src="assets/img/stories_background.svg"
                alt="story-background"
              />
              <img className="profile-pic" src={story.userImage} alt={story.name} />
              <p>{story.name}</p>
            </div>
          </a>
        ))}

        <a href="https://instagram.com">
          <div className="seta not-mobile">
            <img src="assets/img/arrow.svg" alt="Scroll" />
          </div>
        </a>
      </div>
    </>
  );
}
