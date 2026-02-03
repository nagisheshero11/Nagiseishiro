import "./style/Opinions.css";

function Opinions() {
  return (
    <section className="opinions">
      <div className="opinions-container">

        {/* Header */}
        <div className="opinions-text">
          <h2>Opinions</h2>
          <p>Here are some of my likes and dislikes.</p>
        </div>

        {/* Columns wrapper (ONLY like & hate) */}
        <div className="opinions-columns">

          {/* LIKE */}
          <div className="opinion-col">
            <img src="/avatars/like.jpg" alt="Like avatar" />
            <h3>I Like</h3>
            <ul>
              <li>Watching Movies</li>
              <li>Listening to Music</li>
              <li>Playing Video Games</li>
              <li>Surfing Internet</li>
              <li>Gosiping with Friends</li>
              <li>Simping Over a Girl</li>
              <li>Eating Good Food</li>
              <li>Watching random online fights</li>
              <li>Pain Balms</li>
              <li>Lite Perfumes</li>
              <li>Ice Cream</li>
              <li>Cancled classes</li>
              <li>Random shit</li>
            </ul>
          </div>

          {/* HATE */}
          <div className="opinion-col">
            <img src="/avatars/hate.jpg" alt="Hate avatar" />
            <h3>I Hate</h3>
            <ul>
              <li>Wet Floor</li>
              <li>Loud noises</li>
              <li>People who are arrogant</li>
              <li>People who are too outgoing</li>
              <li>Crowded places</li>
              <li>Overthinking</li>
              <li>People without common sense</li>
              <li>Chocolate cake and icecream</li>
              <li>College Assignments</li>
              <li>Teachers who don’t have knowledge and ask us to do everything</li>
              <li>Random shit</li>
            </ul>
          </div>

        </div>

        {/* Conclusion */}
        <div className="conclusion">
          <p>
            These are just my current opinions. They are subject to market trends and personal
            experiences and may change at any time.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Opinions;