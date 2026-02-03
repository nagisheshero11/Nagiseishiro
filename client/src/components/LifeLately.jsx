import "./style/LifeLately.css";

function LifeLately() {
  const images = Array.from({ length: 20 }, (_, i) => `/life/${i + 1}.jpeg`);

  const columns = [[], [], []];
  images.forEach((img, i) => columns[i % 3].push(img));

  return (
    <section className="life">
      <div className="life-header">
        <h2>Mind</h2>
      </div>

      <div className="life-viewport">
        <div className="life-columns">
          {columns.map((col, i) => (
            <div className={`life-column col-${i}`} key={i}>
              {[...col, ...col].map((src, idx) => (
                <div className="life-item" key={idx}>
                  <img src={src} alt="" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LifeLately;