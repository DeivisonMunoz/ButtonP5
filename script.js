const clickCountDisplay = document.getElementById('click-count');
        const header = document.getElementById('header');
        const button = document.getElementById('click-button');

 // Update display on load
        clickCountDisplay.textContent = clickCount;
        updateUI();

// Add event listener to button
        button.addEventListener('click', () => {
            clickCount++;
            localStorage.setItem('clickCount', clickCount);
            clickCountDisplay.textContent = clickCount;
            updateUI();
        });

function updateUI() {
            const colors = ['#FF5733', '#33FF57', '#3357FF', '#F5A623', '#E91E63'];
            const texts = [
                'Keep going!',
                'Great job!',
                'You are amazing!',
                'Fantastic!',
                'Click click hooray!'
            ];

            const randomIndex = Math.floor(Math.random() * colors.length);
            document.body.style.backgroundColor = colors[randomIndex];
            header.textContent = texts[randomIndex];
        }
// the let click count variable stores the current number of button clicks. Then it gets the count form local storage if its available, if there is no count in localstorage it initializes to 0

//The event listener increments the click count every time the button is clicked. It updates the localstorage with the new count, updates the displayed count on the website and calls the updateUI function to change the background color. 

// The updateUI function changes the color and text after each click. It randomly selects a color from the color array for the background and a message from the texts array for the text.
