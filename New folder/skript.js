/* ==========================================
   1. NAVIGATION & DRAWER LOGIC
   ========================================== */
const hamburger = document.getElementById('hamburger'); // Use getElementById for IDs
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        // Toggle the X animation and the slide-out menu
        hamburger.classList.toggle('is-active');
        navMenu.classList.toggle('active');
    });
}

// Close drawer when a link is clicked
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger && navMenu) {
            hamburger.classList.remove('is-active');
            navMenu.classList.remove('active');
        }
    });
});


/* ==========================================
   INTEGRITY PILLARS LOGIC
   ========================================== */
const pillarData = {
    "01": {
        title: "Structural Integrity",
        tagline: "High-class code is not a PLUS. It is a MUST!",
        list: ["5+ years of uncompromised engineering", "Clean code by our own strict standards"],
        img: "assets/integrityBlockImage.jpg"
    },
    "02": {
        title: "Technical Integrity",
        tagline: "Your DESIGNS. Your RULES.",
        list: ["Adapting to your working process", "Zero-debt implementation"],
        img: "assets/tailor-made.jpg" // Change to your actual image name
    },
    "03": {
        title: "Reliability",
        tagline: "Don't trust WORDS. Trust ACTIONS.",
        list: ["Dedicated maintenance support", "Real-time progress tracking"],
        img: "assets/reliability.jpg"
    },
    "04": {
        title: "Safety & Security",
        tagline: "Safety FIRST. Safety ALWAYS.",
        list: ["NDA protected workflows", "Encrypted data infrastructure"],
        img: "assets/security.jpg"
    }
};

document.querySelectorAll('.pillar-link').forEach(link => {
    link.addEventListener('click', function() {
        const id = this.getAttribute('data-pillar');
        const container = document.querySelector('.pillar-text-wrapper');
        const displayImg = document.querySelector('.split-image');
        const listContainer = document.getElementById('pillar-list');

        // Toggle active number state
        document.querySelectorAll('.pillar-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        // Start Fade/Slide animation
        container.classList.add('is-hidden');

        setTimeout(() => {
            const data = pillarData[id];
            
            // Swap Text content
            document.querySelector('.pillar-title').innerText = data.title;
            document.querySelector('.pillar-tagline').innerText = data.tagline;
            listContainer.innerHTML = data.list.map(item => `<li>${item}</li>`).join('');
            
            // Swap Image
            if(displayImg) {
                displayImg.style.backgroundImage = `url(${data.img})`;
            }

            // Reveal content
            container.classList.remove('is-hidden');
        }, 400); 
    });
});