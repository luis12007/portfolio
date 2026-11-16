// About page extras. Everything else (loader, header, menu, scroll reveal,
// contact modal, language switch) comes from scripts.js and i18n.js.

// Photos tilt towards the pointer (3D), mouse/trackpad users only. The
// elements carry data-tilt with the maximum angle in degrees.
function initTilt() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    document.querySelectorAll('[data-tilt]').forEach((el) => {
        const max = Number(el.dataset.tilt) || 6;
        let frame = 0;
        let rect = null;

        el.addEventListener('pointerenter', () => { rect = el.getBoundingClientRect(); });
        el.addEventListener('pointermove', (e) => {
            if (!rect) rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                el.style.transform =
                    `perspective(900px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg) translateY(-4px)`;
            });
        });
        el.addEventListener('pointerleave', () => {
            cancelAnimationFrame(frame);
            rect = null;
            el.style.transform = '';
        });
    });
}

// The ticker is decorative; it only moves while it is on screen.
function initTicker() {
    const ticker = document.querySelector('.ab-ticker');
    const track = ticker?.querySelector('.ab-ticker-track');
    if (!track) return;
    new IntersectionObserver(([entry]) => {
        track.style.animationPlayState = entry.isIntersecting ? '' : 'paused';
    }).observe(ticker);
}

document.addEventListener('DOMContentLoaded', () => {
    initTilt();
    initTicker();
});
