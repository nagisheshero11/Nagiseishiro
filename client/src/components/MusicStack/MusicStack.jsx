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

  // load songs from db (allows future switching to async fetch)
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
      const baseY = el.dataset?.offset || 0;
      const baseScale = el.dataset?.scale || 1;
      el.style.transform = `translateY(${baseY}px) scale(${baseScale}) translateX(${dragX.current}px) rotate(${dragX.current * 0.05}deg)`;
    }
  };

  const handlePointerUp = (e, index) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const el = dragElem.current || e.currentTarget || e.target;
    const absX = Math.abs(dragX.current);
    if (el) {
      // restore transition for smooth snap/exit
      el.style.transition = "transform 0.35s ease, box-shadow 0.35s ease";
    }

    if (absX > 120) {
      // swipe away with animation then rotate the card to the end
      const direction = dragX.current > 0 ? 1 : -1;
      const baseY = el?.dataset?.offset || 0;
      const baseScale = el?.dataset?.scale || 1;
      if (el) el.style.transform = `translateY(${baseY}px) scale(${baseScale}) translateX(${direction * 1000}px) rotate(${direction * 30}deg)`;
      // wait for animation then move the card to the end to create an infinite cycle
      setTimeout(() => {
        setSongs((prev) => {
          if (prev.length === 0) return prev;
          const removed = prev[index];
          const rest = prev.filter((_, i) => i !== index);
          return [...rest, removed];
        });
      }, 300);
    } else {
      // snap back to base transform
      if (el) {
        const baseY = el.dataset.offset || 0;
        const baseScale = el.dataset.scale || 1;
        el.style.transform = `translateY(${baseY}px) scale(${baseScale})`;
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
      el.style.transition = "transform 0.35s ease, box-shadow 0.35s ease";
      const baseY = el.dataset.offset || 0;
      const baseScale = el.dataset.scale || 1;
      el.style.transform = `translateY(${baseY}px) scale(${baseScale})`;
    }
    dragX.current = 0;
    dragElem.current = null;
  };

  // Autoplay: automatically swipe the top card at intervals and rotate it to the end
  const autoplayRef = useRef(null);
  const AUTOPLAY_DELAY = 3000;

  useEffect(() => {
    clearInterval(autoplayRef.current);
    if (songs.length === 0) return;

    autoplayRef.current = setInterval(() => {
      if (isDragging.current) return;
      const stack = document.querySelector(".music-stack");
      const top = stack?.querySelector('.music-card[data-offset="0"]') || stack?.querySelector('.music-card');
      if (!top) return;
      top.style.transition = "transform 0.6s ease, box-shadow 0.35s ease";
      const baseY = top.dataset.offset || 0;
      const baseScale = top.dataset.scale || 1;
      // swipe left automatically
      top.style.transform = `translateY(${baseY}px) scale(${baseScale}) translateX(${-1000}px) rotate(${-30}deg)`;
      setTimeout(() => {
        setSongs((prev) => {
          if (prev.length === 0) return prev;
          const [first, ...rest] = prev;
          return [...rest, first];
        });
      }, 500);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(autoplayRef.current);
  }, [songs]);

  return (
    <section className="music">
      <h2>My Music</h2>

      <div className="music-stack">
        {songs.map((song, index) => {
          const offset = index * 8;
          const scale = 1 - index * 0.04;

          return (
            <div
              key={song.title}
              className="music-card"
              data-offset={offset}
              data-scale={scale}
              style={{
                transform: `translateY(${offset}px) scale(${scale})`,
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
    </section>
  );
}

export default MusicStack;