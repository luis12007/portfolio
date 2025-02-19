function openLinkedIn() {
    window.open('https://www.linkedin.com/in/alexmtzai/', '_blank');
}

function openGitHub() {
    window.open('https://github.com/luis12007', '_blank');
}

function openEmail() {
    window.open('mailto:alexmtzai2002@gmail.com', '_blank');
}

openVideo = function() {
    window.location.href = '/presentation';
}

downloadCV = function() {
    window.open('/static/files/CV.pdf', '_blank');
}
opendte = function() {
    window.open('https://cliente-production-e629.up.railway.app/demostration', '_blank');
}

openlinkedinbot = function() {
    window.open('https://github.com/luis12007/Networking-bot', '_blank');
}

let navOpen = false;

function openNav() {
    navOpen = !navOpen;
    const navLinks = document.querySelector('.nav-links');
    if (navOpen) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
}

const titles = [
    "ML Engineer",
    "AI Enthusiast",
    "AI Developer",
    "Model Optimization Specialist",
    "Data Science Practitioner"
];

let currentIndex = 0;

function changeTitle() {
    const titleElement = document.querySelector('.ai-engineer span');
    titleElement.textContent = titles[currentIndex];
    currentIndex = (currentIndex + 1) % titles.length;
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(changeTitle, 3000); // Change text every 2.5 seconds
});

/*  */

document.addEventListener("DOMContentLoaded", function() {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    let lastX = 0,
        lastY = 0;

    document.addEventListener("mousemove", (e) => {
        // Smoothly follow the cursor with slight delay
        lastX = e.clientX;
        lastY = e.clientY;
        requestAnimationFrame(() => {
            cursor.style.left = `${lastX}px`;
            cursor.style.top = `${lastY}px`;
        });

        // Create smooth wake effect
        const wake = document.createElement("div");
        wake.classList.add("cursor-wake");
        document.body.appendChild(wake);
        wake.style.left = `${lastX}px`;
        wake.style.top = `${lastY}px`;

        // Remove wake after animation
        setTimeout(() => {
            wake.remove();
        }, 500);
    });

    document.addEventListener("mousedown", () => {
        cursor.classList.add("click");
    });

    document.addEventListener("mouseup", () => {
        cursor.classList.remove("click");
    });
});

/* to change menu */
/* 
document.addEventListener('DOMContentLoaded', () => {
    const frameParent = document.querySelector('.frame-parent');
    const originalOffsetTop = frameParent.offsetTop;

    window.addEventListener('scroll', () => {
        if (window.scrollY > originalOffsetTop) {
            frameParent.classList.add('fixed');
        } else {
            frameParent.classList.remove('fixed');
        }
    });
}); */