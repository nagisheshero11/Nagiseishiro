import "./style/Certifications.css";

function Certifications() {
  return (
    <section className="certs">
      <div className="certs-container">

        <h2>Certifications</h2>

        <div className="cert-item">
          <img src="/certs/mongodb.png" alt="MongoDB" />

          <div className="cert-info">
            <h3>MongoDB Certified Associate Data Modeler</h3>
            <p>MongoDB</p>
          </div>
        </div>

        <div className="cert-item">
          <img src="/certs/microsoft.png" alt="Microsoft Azure" />

          <div className="cert-info">
            <h3>Microsoft Azure Fundamentals</h3>
            <p>Microsoft</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Certifications;