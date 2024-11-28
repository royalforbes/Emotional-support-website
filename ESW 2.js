// Initialize SwiperJS
const swiper = new Swiper('.slider-wrapper', {
    direction: 'horizontal', // Slider direction
    loop: true,              // Enable infinite loop
    grabCursor: true,        // Enable grab cursor for better UX
    spaceBetween: 20,        // Space between slides

    // Pagination settings
    pagination: {
        el: '.swiper-pagination', // Element for pagination dots
        clickable: true,          // Allow users to click pagination dots
        dynamicBullets: true,     // Enable dynamic bullet styling
    },

    // Navigation settings
    navigation: {
        nextEl: '.swiper-button-next', // Selector for next button
        prevEl: '.swiper-button-prev', // Selector for previous button
    },

    // Responsive breakpoints
    breakpoints: {
        480: {
            slidesPerView: 1, // Show 1 slide for small screens
            spaceBetween: 20, // Space between slides
        },
        768: {
            slidesPerView: 2, // Show 2 slides for medium screens
            spaceBetween: 20, // Space between slides
        },
        1024: {
            slidesPerView: 3, // Show 3 slides for large screens
            spaceBetween: 40, // Increased space for larger screens
        }
    }
});

// Add event listeners to all buttons
const buttons = document.querySelectorAll('.Press-button');

buttons.forEach(button => {
    button.addEventListener('click', event => {
        // Get the emotion text from the card's description
        const emotion = event.target.closest('.card-item').querySelector('.Description').textContent.trim();

        // Define emotion-specific messages
        let message = '';
        switch (emotion) {
            case 'Love':
                message = "Feeling low on love? Remember, you are valued and appreciated!";
                break;
            case 'Joyful':
                message = "Great to hear you're joyful! Share your happiness with others.";
                break;
            case 'Sad':
                message = "Feeling sad? It's okay to take a moment to reflect and recharge.";
                break;
            case 'Tired':
                message = "Take a break and give yourself the rest you deserve.";
                break;
            case 'Stressed':
                message = "Breathe deeply. Stress is temporary, and you're stronger than it.";
                break;
            case 'Frustrated':
                message = "Channel your frustration into something productive. You've got this!";
                break;
            case 'Horny':
                message = "It's natural. Maybe relax, watch a show, or connect with a loved one.";
                break;
            case 'Fearful and Hopeless':
                message = "You’re stronger than your doubts. Seek support from friends or family.";
                break;
            case 'Bored':
                message = "Bored? Try a new hobby or revisit an old favorite activity.";
                break;
            case 'Anxious':
                message = "Take a deep breath and face the day step by step. You’ll do great.";
                break;
            case 'Shy':
                message = "Being shy is beautiful. Take small steps and be kind to yourself.";
                break;
            case 'Angry':
                message = "Feeling angry? Take a moment to cool off and process your emotions.";
                break;
            case 'Sexy':
                message = "Embrace your confidence! You’re glowing with positive vibes.";
                break;
            case 'Blessed':
                message = "Feeling blessed? Share the positivity and gratitude with others!";
                break;
            case 'Excited':
                message = "Channel your excitement into something amazing today!";
                break;
            case 'Confident':
                message = "You're unstoppable! Let your confidence shine.";
                break;
            case 'Curious':
                message = "Follow your curiosity and discover new wonders.";
                break;
            case 'Grateful':
                message = "Gratitude is powerful—take a moment to appreciate what you have.";
                break;
            case 'Hopeful':
                message = "Stay optimistic! Great things are on the horizon.";
                break;
            default:
                message = "Stay positive and take care of yourself!";
        }

        // Show the alert with the appropriate message
        alert(message);
    });
});
