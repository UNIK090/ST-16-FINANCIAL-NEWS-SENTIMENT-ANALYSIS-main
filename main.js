document.addEventListener('DOMContentLoaded', () => {
    // Page Navigation
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('[data-page]');

    function showPage(pageId) {
        pages.forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(pageId).classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            showPage(pageId);
        });
    });

    // Form Handling
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    loginForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add login logic here
        alert('Login functionality will be implemented here');
    });

    signupForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add signup logic here
        alert('Signup functionality will be implemented here');
    });

    // Sentiment Analysis
    const analyzeBtn = document.querySelector('.analyze-btn');
    const sentimentMeter = document.querySelector('.meter-fill');
    const sentimentResult = document.querySelector('.sentiment-result');

    analyzeBtn?.addEventListener('click', () => {
        // Simulate sentiment analysis
        const randomSentiment = Math.random();
        sentimentMeter.style.width = `${randomSentiment * 100}%`;
        
        let sentiment;
        if (randomSentiment < 0.3) {
            sentiment = 'Negative';
            sentimentResult.style.color = '#ff4444';
        } else if (randomSentiment < 0.7) {
            sentiment = 'Neutral';
            sentimentResult.style.color = '#ffbb33';
        } else {
            sentiment = 'Positive';
            sentimentResult.style.color = '#4CAF50';
        }
        
        sentimentResult.textContent = `Sentiment Analysis Result: ${sentiment}`;
    });

    // Add smooth scrolling (fixed version)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});