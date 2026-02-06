import "./style/W_E.css";

function W_E() {
  return (
    <section className="we">
      <div className="we-container">

        {/* WORK EXPERIENCE */}
        <div className="we-block">
          <h2>Work Experience</h2>

          <div className="we-item">
            <img src="/innovationLink.png" alt="Innovation Link" />

            <div className="we-info">
              <h3>
                Innovation Link
              </h3>
              <p>Software Engineer And Marketing Manager</p>
            </div>

            <span className="we-time">2025 – Ongoing</span>
          </div>

        </div>

        {/* EDUCATION */}
        <div className="we-block">
          <h2>Education</h2>

          <div className="we-item">
            <img src="/klu.png" alt="KL University" />

            <div className="we-info">
              <h3>KL University</h3>
              <p>B.Tech Computer Science And Engineering · CGPA 9.17/10</p>
            </div>

            <span className="we-time">2023 – Ongoing</span>
          </div>

          <div className="we-item">
            <img src="/narayana.png" alt="Narayana Junior College" />

            <div className="we-info">
              <h3>Narayana Junior College</h3>
              <p>MPC · Marks 898/1000</p>
            </div>

            <span className="we-time">2021 – 2023</span>
          </div>

          <div className="we-item">
            <img src="/narayana.png" alt="Narayana High School" />

            <div className="we-info">
              <h3>Narayana High School</h3>
              <p>SSE · Marks 590/600</p>
            </div>

            <span className="we-time">2020 – 2021</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default W_E;