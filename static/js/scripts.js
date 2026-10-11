// Rotating title under the hero ("AI Engineer" -> "ML Engineer" -> ...).
// One JS loop owns both the motion and the text swap, so they can't drift
// apart; it starts once the hero intro animation has finished.
const TITLES = [
    "AI Engineer",
    "ML Engineer",
    "AI Enthusiast",
    "Model Optimization Specialist",
    "Data Scientist",
    "AI Developer",
];
const TITLE_HOLD_MS = 2600;
const TITLE_MOVE_MS = 450;

function initTitleRotator() {
    const box = document.querySelector('.ai-engineer');
    const span = box && box.querySelector('span');
    if (!span) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let index = Math.max(0, TITLES.indexOf(span.textContent.trim()));

    // Shrink the font just enough for the longest title to stay on one line.
    const fit = () => {
        box.style.fontSize = '';
        const current = span.textContent;
        let widest = 0;
        for (const title of TITLES) {
            span.textContent = title;
            widest = Math.max(widest, span.getBoundingClientRect().width);
        }
        span.textContent = current;
        const available = box.clientWidth;
        if (widest > available) {
            const size = parseFloat(getComputedStyle(box).fontSize);
            box.style.fontSize = `${Math.floor(size * available / widest)}px`;
        }
    };

    const move = (from, to) => span.animate(
        [{ transform: `translateY(${from})`, opacity: from === '0' ? 1 : 0 },
         { transform: `translateY(${to})`, opacity: to === '0' ? 1 : 0 }],
        { duration: TITLE_MOVE_MS, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', fill: 'both' }
    ).finished;

    const next = async () => {
        if (!document.hidden) {
            const animate = !reducedMotion.matches && typeof span.animate === 'function';
            if (animate) await move('0', '-100%');
            index = (index + 1) % TITLES.length;
            span.textContent = TITLES[index];
            if (animate) await move('100%', '0');
            span.getAnimations?.().forEach((a) => a.cancel());
        }
        setTimeout(next, TITLE_HOLD_MS);
    };

    fit();
    if (document.fonts) document.fonts.ready.then(fit);
    let resizeFrame;
    window.addEventListener('resize', () => {
        cancelAnimationFrame(resizeFrame);
        resizeFrame = requestAnimationFrame(fit);
    });
    const start = () => setTimeout(next, TITLE_HOLD_MS);
    if (document.body.classList.contains('intro-done')) start();
    else document.addEventListener('hero:intro-done', start, { once: true });
}

document.addEventListener('DOMContentLoaded', initTitleRotator);

/*  */

// Custom cursor dot with a fading wake, only for mouse/trackpad users.
function initCustomCursor() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    document.documentElement.classList.add('has-custom-cursor');

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    document.body.appendChild(cursor);

    let x = 0;
    let y = 0;
    let frame = 0;
    // An open modal <dialog> sits in the browser's top layer, above everything
    // else on the page, so the dot (and its wake) is drawn inside it while it's
    // open; otherwise the visitor would have no cursor at all in the modal.
    const host = () => document.querySelector('dialog:modal') || document.body;

    // One position update and at most one wake dot per animation frame.
    const render = () => {
        frame = 0;
        const parent = host();
        if (cursor.parentElement !== parent) parent.appendChild(cursor);
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
        const wake = document.createElement('div');
        wake.className = 'cursor-wake';
        wake.setAttribute('aria-hidden', 'true');
        wake.style.left = `${x}px`;
        wake.style.top = `${y}px`;
        wake.addEventListener('animationend', () => wake.remove());
        parent.appendChild(wake);
    };

    document.addEventListener('mousemove', (e) => {
        x = e.clientX;
        y = e.clientY;
        cursor.classList.add('visible');
        if (!frame) frame = requestAnimationFrame(render);
    }, { passive: true });
    document.documentElement.addEventListener('mouseleave', () => cursor.classList.remove('visible'));
    document.addEventListener('mousedown', () => cursor.classList.add('click'));
    document.addEventListener('mouseup', () => cursor.classList.remove('click'));
}

document.addEventListener('DOMContentLoaded', initCustomCursor);

// ===== PROFESSIONAL ANIMATION CONTROLLER =====

// Main animation initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    setupScrollAnimations();
    revealOnScroll(document.querySelectorAll('.tech-animate, .project-animate'));
    setupMobileNavAnimations();
    setupEnhancedInteractions();
    document.querySelectorAll('.tech-carousel').forEach(initCarousel);
    initPresentationModal();
    initCertificateRecords();
});

// Loading overlay + hero intro. The overlay leaves once the page (and its
// fonts) have loaded, never later than INTRO_MAX_WAIT_MS; that adds
// body.loaded, which starts the hero intro in index.css ("HERO INTRO").
const INTRO_MIN_WAIT_MS = 700;   // keep the loader from just flashing
const INTRO_MAX_WAIT_MS = 3000;  // slow network: start anyway
const INTRO_DURATION_MS = 2400;  // the last hero animation (CV button) ends here

function initializeAnimations() {
    const body = document.body;
    // html.hero-intro comes from the inline script in <head> (motion allowed)
    const reducedMotion = !document.documentElement.classList.contains('hero-intro');
    if (!reducedMotion) splitHeroTitle();

    const startedAt = performance.now();
    let revealed = false;
    const reveal = () => {
        if (revealed) return;
        revealed = true;
        const overlay = document.querySelector('.overlay');
        if (overlay) {
            overlay.classList.add('done');
            setTimeout(() => overlay.remove(), 700);
        }
        body.classList.add('loaded');
        setTimeout(() => {
            body.classList.add('intro-done');
            document.dispatchEvent(new Event('hero:intro-done'));
        }, reducedMotion ? 0 : INTRO_DURATION_MS);
    };

    const pageLoaded = document.readyState === 'complete'
        ? Promise.resolve()
        : new Promise((resolve) => window.addEventListener('load', resolve, { once: true }));
    const fontsLoaded = document.fonts ? document.fonts.ready : Promise.resolve();
    Promise.all([pageLoaded, fontsLoaded]).then(() => {
        setTimeout(reveal, Math.max(0, INTRO_MIN_WAIT_MS - (performance.now() - startedAt)));
    });
    setTimeout(reveal, INTRO_MAX_WAIT_MS);
}

// Wrap each letter of the hero name in a span so it can rise in on its own
// (staggered by --i). Words stay unbreakable; screen readers get the plain name.
function splitHeroTitle() {
    const title = document.querySelector('.title');
    if (!title || title.dataset.split) return;
    const text = title.textContent.trim();
    title.dataset.split = 'true';
    title.setAttribute('aria-label', text);
    title.textContent = '';
    let index = 0;
    text.split(/\s+/).forEach((word, i) => {
        if (i) title.append(' ');
        const wordEl = document.createElement('span');
        wordEl.className = 'word';
        wordEl.setAttribute('aria-hidden', 'true');
        for (const letter of word) {
            const char = document.createElement('span');
            char.className = 'char';
            char.textContent = letter;
            char.style.setProperty('--i', index++);
            wordEl.append(char);
        }
        title.append(wordEl);
    });
}

// Setup scroll-triggered animations
function setupScrollAnimations() {
    const header = document.querySelector('.frame-parent');
    if (!header) return;

    // On wide screens the floating header is position: fixed, which takes it
    // out of the flow; this spacer keeps its height so the page doesn't jump.
    // The float-in animation itself comes from .frame-parent.floating in CSS.
    const spacer = document.createElement('div');
    spacer.setAttribute('aria-hidden', 'true');
    // hidden (not just 0px tall) while unused: in a flex parent with a gap even
    // an empty item would add an extra gap.
    spacer.hidden = true;
    header.after(spacer);

    let floating = false;
    const layout = () => {
        header.classList.remove('floating');
        header.style.removeProperty('padding-left');
        header.style.removeProperty('padding-right');
        const inFlow = header.getBoundingClientRect();
        const inFlowStyle = getComputedStyle(header);
        const padLeft = inFlow.left + parseFloat(inFlowStyle.paddingLeft);
        const padRight = document.documentElement.clientWidth - inFlow.right + parseFloat(inFlowStyle.paddingRight);
        header.classList.toggle('floating', floating);
        const style = getComputedStyle(header);
        const isFixed = floating && style.position === 'fixed';
        spacer.hidden = !isFixed;
        spacer.style.height = isFixed ? `${inFlow.height}px` : '';
        // Small screens pin a full-width bar (no centered pill); the page
        // gutter becomes padding so its contents don't shift sideways.
        if (isFixed && style.transform === 'none') {
            header.style.paddingLeft = `${padLeft}px`;
            header.style.paddingRight = `${padRight}px`;
        }
    };

    const update = () => {
        const shouldFloat = window.scrollY > 100;
        if (shouldFloat !== floating) {
            floating = shouldFloat;
            layout();
        }
    };

    window.addEventListener('scroll', throttle(update, 16), { passive: true });
    window.addEventListener('resize', throttle(layout, 100));
    update();
}

// Focuses an element inside a panel that is fading in. Its visibility is
// still "hidden" on the transition's first frame, which makes focus() a no-op,
// so retry for a few frames until it takes.
function focusWhenVisible(el, framesLeft = 30) {
    if (!el) return;
    el.focus({ preventScroll: true });
    if (document.activeElement !== el && framesLeft > 0) {
        requestAnimationFrame(() => focusWhenVisible(el, framesLeft - 1));
    }
}

// Fades elements in (adds .animate-in) the first time they scroll into view.
// Elements that enter together, such as one row of cards, are staggered; the
// delay is removed afterwards so it never slows down hover transitions.
function revealOnScroll(elements, stagger = 0.1) {
    const observer = new IntersectionObserver((entries) => {
        entries.filter((entry) => entry.isIntersecting).forEach((entry, i) => {
            const el = entry.target;
            observer.unobserve(el);
            if (i && stagger) {
                el.style.transitionDelay = `${i * stagger}s`;
                setTimeout(() => { el.style.transitionDelay = ''; }, (i * stagger + 0.9) * 1000);
            }
            el.classList.add('animate-in');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    elements.forEach((el) => observer.observe(el));
}

// Mobile menu: hamburger button + sidebar (the link stagger is CSS)
function setupMobileNavAnimations() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileNavClose = document.getElementById('mobileNavClose');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (hamburgerBtn && mobileNav) {
        // While closed the menu sits off-screen; inert keeps its links out of
        // the tab order and away from screen readers.
        mobileNav.inert = true;

        // Open mobile nav
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.add('active');
            hamburgerBtn.setAttribute('aria-expanded', 'true');
            mobileNav.classList.add('active');
            mobileNav.inert = false;
            mobileNavOverlay.classList.add('active');
            
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
            focusWhenVisible(mobileNavClose);
        });

        // Close mobile nav
        const closeMobileNav = ({ restoreFocus = true } = {}) => {
            if (!mobileNav.classList.contains('active')) return;
            hamburgerBtn.classList.remove('active');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            mobileNav.classList.remove('active');
            mobileNav.inert = true;
            mobileNavOverlay.classList.remove('active');
            
            
            // Restore body scroll
            document.body.style.overflow = '';
            if (restoreFocus) hamburgerBtn.focus({ preventScroll: true });
        };

        mobileNavClose?.addEventListener('click', () => closeMobileNav());
        mobileNavOverlay?.addEventListener('click', () => closeMobileNav());

        // Close on link click (focus follows the link, not back to the button)
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                setTimeout(() => closeMobileNav({ restoreFocus: false }), 300);
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMobileNav();
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 1050) closeMobileNav({ restoreFocus: false });
        });
    }
}

// Setup enhanced interactions
function setupEnhancedInteractions() {
    // Button ripple effect
    const buttons = document.querySelectorAll('.button-primary, .button-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', createRippleEffect);
    });

    // Enhanced hover effects for icons
    const icons = document.querySelectorAll('.github, .phinstagram-logo-fill-icon');
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'translateY(-5px) scale(1.15) rotate(5deg)';
            icon.style.filter = 'brightness(1.2) saturate(1.3)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'translateY(0) scale(1) rotate(0)';
            icon.style.filter = 'brightness(1) saturate(1)';
        });
    });

    // Nav link enhanced animations
    const navLinks = document.querySelectorAll('.tab-default a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });

    // Profile image interaction
    const profileImage = document.querySelector('.whatsapp-image-2024-12-03-at-1-icon');
    if (profileImage) {
        profileImage.addEventListener('mouseenter', () => {
            profileImage.style.transform = 'scale(1.05) rotate(0deg)';
            profileImage.style.filter = 'brightness(1.1) saturate(1.1)';
        });
        
        profileImage.addEventListener('mouseleave', () => {
            profileImage.style.transform = 'scale(1) rotate(-3deg)';
            profileImage.style.filter = 'brightness(1) saturate(1)';
        });
    }
}

// Create ripple effect for buttons
function createRippleEffect(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        pointer-events: none;
        z-index: 1;
    `;
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    // Animate ripple
    ripple.animate([
        { transform: 'scale(0)', opacity: 1 },
        { transform: 'scale(1)', opacity: 0 }
    ], {
        duration: 600,
        easing: 'ease-out'
    }).onfinish = () => ripple.remove();
}

// Throttle function for performance
// Runs func at most once per `limit` ms, always including the last call so
// the final scroll/resize position is never missed.
function throttle(func, limit) {
    let timer = null;
    let pending = null;
    return (...args) => {
        if (timer) {
            pending = args;
            return;
        }
        func(...args);
        timer = setTimeout(function flush() {
            timer = null;
            if (pending) {
                const last = pending;
                pending = null;
                func(...last);
                timer = setTimeout(flush, limit);
            }
        }, limit);
    };
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]:not([data-open-presentation])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== DIALOGS =====
// Native <dialog>: showModal() makes the rest of the page inert, traps focus
// and closes on Escape; these helpers add backdrop clicks and a scroll lock.
function openDialog(dialog) {
    if (dialog.open) return;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
}

function setupDialog(dialog, onClose) {
    dialog.addEventListener('click', (e) => {
        // A click on the dialog element itself is a click on the backdrop.
        if (e.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', () => {
        document.body.style.overflow = '';
        if (onClose) onClose();
    });
}

// Presentation video + "more about Alex", opened from the nav, the hero's
// Video button, or a link to /#presentation (old /presentation/ redirects here).
function initPresentationModal() {
    const dialog = document.getElementById('presentationModal');
    if (!dialog) return;
    const video = dialog.querySelector('video');

    const open = () => {
        // The video only starts downloading once someone opens the modal.
        if (video.preload === 'none') {
            video.preload = 'metadata';
            video.load();
        }
        openDialog(dialog);
        dialog.scrollTop = 0;
    };

    setupDialog(dialog, () => {
        video.pause();
        if (location.hash === '#presentation') {
            history.replaceState(null, '', location.pathname + location.search);
        }
    });
    dialog.querySelector('[data-close-presentation]').addEventListener('click', () => dialog.close());
    document.querySelectorAll('[data-open-presentation]').forEach((trigger) => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            open();
        });
    });
    if (location.hash === '#presentation') open();
}

// "View Certificate" buttons for documents that aren't published online open
// a certificate record filled from the button's data-* attributes.
function initCertificateRecords() {
    const dialog = document.getElementById('certRecord');
    if (!dialog) return;
    setupDialog(dialog);
    dialog.querySelector('[data-close-record]').addEventListener('click', () => dialog.close());
    document.querySelectorAll('[data-record]').forEach((button) => {
        button.addEventListener('click', () => {
            for (const field of ['kind', 'title', 'issuer', 'date']) {
                dialog.querySelectorAll(`[data-field="${field}"]`).forEach((el) => {
                    el.textContent = button.dataset[field];
                });
            }
            openDialog(dialog);
        });
    });
}

// ===== CAROUSEL =====
function initCarousel(root) {
    const track = root.querySelector('.carousel-track');
    const slides = [...track.children];
    const dotsBox = root.querySelector('.carousel-dots');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const AUTOPLAY_MS = 5000;
    if (!slides.length) return;

    const slideStep = () => (slides[1] ? slides[1].offsetLeft - slides[0].offsetLeft : track.clientWidth);
    const perView = () => Math.max(1, Math.round((track.clientWidth + 1) / slideStep()));
    const lastIndex = () => Math.max(0, slides.length - perView());
    const currentIndex = () => Math.round(track.scrollLeft / slideStep());

    // While a smooth scroll is running, count from where it is heading so
    // quick repeated clicks advance page by page.
    let heading = null;
    let headingTimer = 0;
    const position = () => (heading ?? currentIndex());
    const goTo = (index) => {
        heading = Math.min(Math.max(index, 0), lastIndex());
        clearTimeout(headingTimer);
        headingTimer = setTimeout(() => { heading = null; }, 1000);
        track.scrollTo({ left: slides[heading].offsetLeft - slides[0].offsetLeft });
    };
    track.addEventListener('scrollend', () => { heading = null; });
    // Arrows move a whole page and wrap around at the ends.
    const next = () => goTo(position() >= lastIndex() ? 0 : position() + perView());
    const prev = () => goTo(position() <= 0 ? lastIndex() : position() - perView());

    // Autoplay, paused while the visitor hovers, focuses or touches the carousel,
    // while it is off screen, and entirely for reduced-motion users.
    let timer = null;
    let paused = false;
    let visible = false;
    const stop = () => { clearInterval(timer); timer = null; };
    const restart = () => {
        stop();
        if (!paused && visible && !document.hidden && !reducedMotion.matches) timer = setInterval(next, AUTOPLAY_MS);
    };
    const setPaused = (value) => { paused = value; restart(); };

    // One dot per page, rebuilt when the number of visible cards changes; with
    // more than MAX_DOTS pages (phones) a "3 / 16" counter replaces the dots.
    const MAX_DOTS = 8;
    let dots = [];
    let pageCount = 0;
    const counter = document.createElement('span');
    counter.className = 'carousel-count';
    const updateDots = () => {
        const index = currentIndex();
        const active = index >= lastIndex() ? pageCount - 1 : Math.floor(index / perView());
        dots.forEach((dot, page) => dot.setAttribute('aria-current', String(page === active)));
        counter.textContent = `${active + 1} / ${pageCount}`;
    };
    const buildDots = () => {
        const pages = Math.ceil(slides.length / perView());
        if (pageCount !== pages) {
            pageCount = pages;
            dotsBox.replaceChildren();
            dots = [];
        }
        if (pages > MAX_DOTS) {
            if (!counter.isConnected) dotsBox.appendChild(counter);
        } else if (!dots.length) {
            dots = Array.from({ length: pages }, (_, page) => {
                const dot = document.createElement('button');
                dot.type = 'button';
                dot.className = 'carousel-dot';
                dot.setAttribute('aria-label', `Go to page ${page + 1} of ${pages}`);
                dot.addEventListener('click', () => { goTo(page * perView()); restart(); });
                dotsBox.appendChild(dot);
                return dot;
            });
        }
        updateDots();
    };

    root.querySelector('.carousel-next').addEventListener('click', () => { next(); restart(); });
    root.querySelector('.carousel-prev').addEventListener('click', () => { prev(); restart(); });
    track.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    });
    root.addEventListener('mouseenter', () => setPaused(true));
    root.addEventListener('mouseleave', () => setPaused(root.contains(document.activeElement)));
    root.addEventListener('focusin', () => setPaused(true));
    root.addEventListener('focusout', (e) => { if (!root.contains(e.relatedTarget)) setPaused(false); });
    track.addEventListener('touchstart', () => setPaused(true), { passive: true });
    track.addEventListener('touchend', () => setTimeout(() => setPaused(false), AUTOPLAY_MS), { passive: true });
    document.addEventListener('visibilitychange', restart);
    new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; restart(); }).observe(root);

    let frame = 0;
    track.addEventListener('scroll', () => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(updateDots);
    }, { passive: true });
    window.addEventListener('resize', throttle(buildDots, 150));
    buildDots();
}
