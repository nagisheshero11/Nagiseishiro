import "./style/About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>Who am I, anyway?</h2>

          <p className="about-preface">
            You probably don’t really want to be here reading about me.
            You’re here just because I showed this to you, and you’re pretending
            you care. And honestly, that’s fine.
          </p>

          <div className="about-body">
            <p>
              I’m just a normal guy, 
              I like keeping things simple and blending in with the crowd. I like spending my time
              listening to music, watching movies, and scrolling through random stuff
              on the internet.
            </p>

            <p>
              I’m into tech and enjoy's learning new things, especially when it
              comes to exploring new stuff and trying them and learning them. I like trying
              things out, breaking them, fixing them, and slowly getting better at it.
            </p>
          </div>
        </div>

        {/* <div className="about-image">
          <img src="/about_hero.jpg" alt="About doodle" />
        </div> */}
      </div>
    </section>
  );
}

export default About;