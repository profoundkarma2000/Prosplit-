// External library for confetti effect
// Included via: <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>

// Store checkbox and set counter states for each day in localStorage
const workoutStates = JSON.parse(localStorage.getItem('workoutStates')) || {};
let currentDay = 1; // Start on Day 1

function updateProgressBar() {
    const currentDayElement = document.getElementById(`day${currentDay}`);
    if (!currentDayElement) return; // Exit if the day element isn't found

    const checkboxes = currentDayElement.querySelectorAll('.exercise-checkbox');
    const totalExercises = checkboxes.length;
    const completedExercises = Array.from(checkboxes).filter(cb => cb.checked).length;

    const progressBarFill = document.getElementById('progressBarFill');
    const progressText = document.getElementById('progress-text');

    if (totalExercises === 0) {
        progressBarFill.style.width = '0%';
        progressText.textContent = 'Workout Progress: 0%';
        progressBarFill.classList.remove('completed');
        return;
    }

    const percentage = (completedExercises / totalExercises) * 100;
    progressBarFill.style.width = `${percentage}%`;
    progressText.textContent = `Workout Progress: ${Math.round(percentage)}%`;

    if (percentage === 100) {
        progressBarFill.classList.add('completed');
        // Trigger confetti when 100% complete
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    } else {
        progressBarFill.classList.remove('completed');
    }

    saveWorkoutStates(); // Save state after each update (checkbox or sets)
}

function saveWorkoutStates() {
    const checkboxes = document.querySelectorAll(`#day${currentDay} .exercise-checkbox`);
    const setsCounters = document.querySelectorAll(`#day${currentDay} .current-sets`);

    workoutStates[currentDay] = workoutStates[currentDay] || { checkboxes: [], sets: [] };

    workoutStates[currentDay].checkboxes = Array.from(checkboxes).map(cb => cb.checked);
    workoutStates[currentDay].sets = Array.from(setsCounters).map(span => parseInt(span.textContent));

    localStorage.setItem('workoutStates', JSON.stringify(workoutStates));
}

function loadWorkoutStates() {
    const checkboxes = document.querySelectorAll(`#day${currentDay} .exercise-checkbox`);
    const setsCounters = document.querySelectorAll(`#day${currentDay} .current-sets`);

    if (workoutStates[currentDay]) {
        checkboxes.forEach((cb, index) => {
            cb.checked = workoutStates[currentDay].checkboxes[index] || false;
        });
        setsCounters.forEach((span, index) => {
            span.textContent = workoutStates[currentDay].sets[index] !== undefined ? workoutStates[currentDay].sets[index] : 0;
        });
    } else {
        // If no saved state, ensure all are unchecked and sets are 0
        checkboxes.forEach(cb => cb.checked = false);
        setsCounters.forEach(span => span.textContent = 0);
    }
    updateProgressBar(); // Update bar after loading states
}

function incrementSet(button) {
    const currentSetsSpan = button.previousElementSibling;
    let currentSets = parseInt(currentSetsSpan.textContent);
    currentSets++;
    currentSetsSpan.textContent = currentSets;

    // Get the parent exercise card
    const exerciseCard = button.closest('.exercise-card');
    const checkbox = exerciseCard.querySelector('.exercise-checkbox');
    const setsRepsText = exerciseCard.querySelector('.sets-reps').textContent;

    // Extract the target number of sets (e.g., "4 sets" from "4 sets × 6-8 reps")
    const targetSetsMatch = setsRepsText.match(/(\d+)\s+sets/);
    if (targetSetsMatch) {
        const targetSets = parseInt(targetSetsMatch[1]);
        if (currentSets >= targetSets) {
            checkbox.checked = true;
        } else {
            checkbox.checked = false; // Uncheck if sets fall below target after decrementing
        }
    }

    saveWorkoutStates();
    updateProgressBar(); // Also update progress bar after set change
}

function decrementSet(button) {
    const currentSetsSpan = button.nextElementSibling;
    let currentSets = parseInt(currentSetsSpan.textContent);
    if (currentSets > 0) {
        currentSets--;
        currentSetsSpan.textContent = currentSets;

        // Get the parent exercise card
        const exerciseCard = button.closest('.exercise-card');
        const checkbox = exerciseCard.querySelector('.exercise-checkbox');
        const setsRepsText = exerciseCard.querySelector('.sets-reps').textContent;

        // Extract the target number of sets
        const targetSetsMatch = setsRepsText.match(/(\d+)\s+sets/);
        if (targetSetsMatch) {
            const targetSets = parseInt(targetSetsMatch[1]);
            if (currentSets < targetSets) {
                checkbox.checked = false; // Uncheck if sets fall below target
            }
        }
    }

    saveWorkoutStates();
    updateProgressBar(); // Also update progress bar after set change
}

function showDay(dayNumber, event) {
    // Save state of the currently active day before switching
    saveWorkoutStates();

    // Hide all workout days
    const workoutDays = document.querySelectorAll('.workout-day');
    workoutDays.forEach(day => day.classList.remove('active'));

    // Remove active class from all buttons and add 'selected-before'
    const dayBtns = document.querySelectorAll('.day-btn');
    dayBtns.forEach(btn => {
        btn.classList.remove('active');
        // Ensure only previously clicked buttons get 'selected-before'
        if (parseInt(btn.dataset.day) === currentDay) { // Use parseInt for safe comparison
            btn.classList.add('selected-before');
        }
    });

    // Show selected day
    const selectedDayElement = document.getElementById(`day${dayNumber}`);
    selectedDayElement.classList.add('active');
    currentDay = dayNumber; // Update current day

    // Add active class to clicked button
    if (event && event.target) {
        event.target.classList.add('active');
    }

    // Load states for the newly active day
    loadWorkoutStates();
}

function resetProgress() {
    const checkboxes = document.querySelectorAll(`#day${currentDay} .exercise-checkbox`);
    checkboxes.forEach(cb => cb.checked = false);

    const setsCounters = document.querySelectorAll(`#day${currentDay} .current-sets`);
    setsCounters.forEach(span => span.textContent = 0);

    updateProgressBar(); // Update the bar (this will remove 'completed' class)
    saveWorkoutStates(); // Save the reset state
}

// Initial load
document.addEventListener('DOMContentLoaded', function() {
    // Ensure the initially active day (Day 1) loads its state
    loadWorkoutStates();

    const exerciseCards = document.querySelectorAll('.exercise-card');
    exerciseCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Prevent card click animation when clicking the checkbox or set counter buttons
            if (e.target.type !== 'checkbox' && !e.target.closest('.sets-counter button')) {
                this.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
            }
        });
    });
});