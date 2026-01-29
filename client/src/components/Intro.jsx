import "./style/Intro.css";

function Intro() {
  return (
    <section className="intro">
      {/* background icons */}
      <div className="intro-bg">
        <img src="/bg_icon1.jpg" className="bg-icon icon-1" alt="" />
        <img src="/bg_icon2.jpg" className="bg-icon icon-2" alt="" />
        <img src="/bg_icon3.jpg" className="bg-icon icon-3" alt="" />
        <img src="/bg_icon4.jpg" className="bg-icon icon-4" alt="" />
      </div>

      {/* foreground content */}
      <div className="intro-container">
        <section className="intro-text">
          <h1>Hey, I'm Hemanth 👋</h1>
          <p>
            I am just a mediocre guy who loves to do things I like and be happy
            with my life and wanna be a software engineer someday and want to belong in the life i wanted to live.
          </p>
        </section>

        <section className="intro-image">
          <img src="/profile.png" alt="NagiSeishiro" />
        </section>
      </div>
    </section>
  );
}

export default Intro;


