import { useState, useRef, useEffect } from "react";
import "./MusicStack.css";
import songsData from "./db";

function MusicStack() {
  const [songs, setSongs] = useState([]);
  const dragX = useRef(0);
  const startX = useRef(0);
  const isDragging = useRef(false);
  const dragElem = useRef(null);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX || e.touches?.[0].clientX;
    dragElem.current = e.currentTarget;
    if (dragElem.current) dragElem.current.style.transition = "none";
  };

  useEffect(() => {
    setSongs(songsData);
  }, []);

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    if (e.touches) e.preventDefault();
    const x = e.clientX || e.touches?.[0].clientX;
    dragX.current = x - startX.current;
    const el = dragElem.current || e.currentTarget || e.target;
    if (el) {
      const baseX = parseFloat(el.dataset?.offset || 0);
      const baseScale = parseFloat(el.dataset?.scale || 1);
      el.style.transform = `translateX(${baseX + dragX.current}px) scale(${baseScale}) rotate(${dragX.current * 0.04}deg)`;
    }
  };

  const handlePointerUp = (e, index) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const el = dragElem.current || e.currentTarget || e.target;
    const absX = Math.abs(dragX.current);

    if (absX > 120) {
      const direction = dragX.current > 0 ? 1 : -1;
      const baseX = parseFloat(el?.dataset?.offset || 0);
      const baseScale = parseFloat(el?.dataset?.scale || 1);

      if (el) {
        el.style.transition = "transform 0.4s ease, opacity 0.4s ease";
        el.style.transform = `translateX(${baseX + direction * 800}px) scale(${baseScale}) rotate(${direction * 20}deg)`;
        el.style.opacity = "0";
      }
      setTimeout(() => {
        setSongs((prev) => {
          if (prev.length === 0) return prev;
          const removed = prev[index];
          const rest = prev.filter((_, i) => i !== index);
          if (el) el.style.opacity = "1";
          return [...rest, removed];
        });
      }, 300);
    } else {
   
      if (el) {
        el.style.transition = "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)";
        const baseX = el.dataset.offset || 0;
        const baseScale = el.dataset.scale || 1;
        el.style.transform = `translateX(${baseX}px) scale(${baseScale})`;
      }
    }

    dragX.current = 0;
    dragElem.current = null;
  };

  const handlePointerCancel = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const el = dragElem.current || e.currentTarget || e.target;
    if (el) {
      el.style.transition = "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)";
      const baseX = el.dataset.offset || 0;
      const baseScale = el.dataset.scale || 1;
      el.style.transform = `translateX(${baseX}px) scale(${baseScale})`;
    }
    dragX.current = 0;
    dragElem.current = null;
  };

  const autoplayRef = useRef(null);
  const AUTOPLAY_DELAY = 4000;

  useEffect(() => {
    clearInterval(autoplayRef.current);
    if (songs.length === 0) return;

    autoplayRef.current = setInterval(() => {
      if (isDragging.current) return;
      const stack = document.querySelector(".music-stack");
      // Top card has offset 0
      const top = stack?.querySelector('.music-card[data-offset="0"]');
      if (!top) return;

      top.style.transition = "transform 0.6s ease, opacity 0.6s ease";
      const baseX = parseFloat(top.dataset.offset || 0);
      const baseScale = parseFloat(top.dataset.scale || 1);

      const flyX = 800;
      top.style.transform = `translateX(${baseX + flyX}px) scale(${baseScale}) rotate(10deg)`;
      top.style.opacity = "0";

      setTimeout(() => {
        setSongs((prev) => {
          if (prev.length === 0) return prev;
          const [first, ...rest] = prev;
          if (top) top.style.opacity = "1";
          return [...rest, first];
        });
      }, 500);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(autoplayRef.current);
  }, [songs]);

  return (
    <section className="music">
      <div className="music-bg">
        <img src="/m_icon1.png" className="music-icon m-icon-1" alt="" />
        <img src="/m_icon2.png" className="music-icon m-icon-2" alt="" />
        <img src="/m_icon3.png" className="music-icon m-icon-3" alt="" />
        <img src="/m_icon4.png" className="music-icon m-icon-4" alt="" />
      </div>

      <div className="music-container">
        <h2>Music</h2>
        <p>Music is everything to me idk if i can survive a week without it</p>
        <div className="music-stack">
          {songs.map((song, index) => {
            const offset = index * 10;
            const scale = 1 - index * 0.05;
            if (index > 3) return null;

            return (
              <div
                key={song.title}
                className="music-card"
                data-offset={offset}
                data-scale={scale}
                style={{
                  transform: `translateX(${offset}px) scale(${scale})`,
                  zIndex: songs.length - index,
                }}
                onMouseDown={handlePointerDown}
                onMouseMove={handlePointerMove}
                onMouseUp={(e) => handlePointerUp(e, index)}
                onMouseLeave={handlePointerCancel}
                onTouchStart={handlePointerDown}
                onTouchMove={handlePointerMove}
                onTouchEnd={(e) => handlePointerUp(e, index)}
              >
                <img src={song.cover} alt={song.title} />
                <div className="info">
                  <h3>{song.title}</h3>
                  <p>{song.artist}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="spotify-link">
          <p>
            These are some of my Top Songs Last Year
            <br />
            to see more, check out my spotify
          </p>
          <a href="https://open.spotify.com/user/31fazvark25z5pggqzdbyevfktzu?si=b14ab28fe2544ea7" target="_blank" rel="noopener noreferrer">
            <img src="/spotify.png" alt="Spotify" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default MusicStack;