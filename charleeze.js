document.addEventListener('DOMContentLoaded', () => {
    // Workout Data - ADDED exerciseTips property to each exercise
    const workoutDays = [
        {
            day: 1,
            name: "Day 1: Chest & Back",
            description: "Focus on compound movements for chest and back development.",
            icon: "fas fa-lungs", // Example icon for chest/back
            exercises: [
                { name: "Barbell Bench Press", setsReps: "4 sets, 8-12 reps", completed: false,
                  exerciseTips: ["Keep feet flat on the floor.", "Maintain a slight arch in your lower back.", "Control the eccentric (lowering) phase."] },
                { name: "Incline Dumbbell Press", setsReps: "3 sets, 10-15 reps", completed: false,
                  exerciseTips: ["Set bench to 30-45 degrees.", "Focus on squeezing your upper chest at the top.", "Avoid locking out your elbows."] },
                { name: "Bent-Over Rows", setsReps: "4 sets, 8-12 reps", completed: false,
                  exerciseTips: ["Maintain a flat back, parallel to the floor.", "Pull the bar towards your lower abdomen.", "Squeeze your shoulder blades at the top."] },
                { name: "Pull-ups / Lat Pulldown", setsReps: "3 sets, 8-12 reps", completed: false,
                  exerciseTips: ["Use a full range of motion.", "Focus on pulling with your lats, not just your arms.", "If doing pull-ups, use an assisted machine or band if needed."] },
                { name: "Dumbbell Flyes", setsReps: "3 sets, 12-15 reps", completed: false,
                  exerciseTips: ["Keep a slight bend in your elbows.", "Lower dumbbells until you feel a good stretch in your chest.", "Bring dumbbells together slowly at the top."] },
                { name: "Cable Rows", setsReps: "3 sets, 10-15 reps", completed: false,
                  exerciseTips: ["Keep your torso upright and stable.", "Pull the handle towards your lower abs.", "Focus on contracting your back muscles."] }
            ]
        },
        {
            day: 2,
            name: "Day 2: Shoulders & Arms",
            description: "Hit all heads of the shoulders and sculpt your biceps and triceps.",
            icon: "fas fa-hand-fist", // Example icon for shoulders/arms
            exercises: [
                { name: "Overhead Barbell Press", setsReps: "4 sets, 8-12 reps", completed: false,
                  exerciseTips: ["Engage your core to protect your lower back.", "Press directly overhead, not forward.", "Lower the bar in a controlled manner."] },
                { name: "Dumbbell Lateral Raises", setsReps: "3 sets, 12-15 reps", completed: false,
                  exerciseTips: ["Keep a slight bend in your elbows.", "Raise dumbbells to shoulder height, no higher.", "Focus on feeling it in your side deltoids."] },
                { name: "Front Raises", setsReps: "3 sets, 12-15 reps", completed: false,
                  exerciseTips: ["Keep arms straight but not locked.", "Control the movement; avoid swinging.", "Raise to just above shoulder height."] },
                { name: "Barbell Bicep Curls", setsReps: "3 sets, 8-12 reps", completed: false,
                  exerciseTips: ["Keep elbows tucked close to your body.", "Squeeze your biceps at the top.", "Avoid leaning back or using momentum."] },
                { name: "Tricep Pushdowns", setsReps: "3 sets, 10-15 reps", completed: false,
                  exerciseTips: ["Keep your upper arms stationary.", "Fully extend your arms at the bottom for a peak contraction.", "Use a rope attachment for better tricep isolation."] },
                { name: "Hammer Curls", setsReps: "3 sets, 10-15 reps", completed: false,
                  exerciseTips: ["Keep palms facing each other throughout the movement.", "Focus on controlled movement.", "Great for building brachialis and forearm thickness."] },
                { name: "Overhead Dumbbell Extension", setsReps: "3 sets, 10-15 reps", completed: false,
                  exerciseTips: ["Keep elbows pointing forward.", "Lower the dumbbell behind your head.", "Feel the stretch in your triceps at the bottom."] }
            ]
        },
        {
            day: 3,
            name: "Day 3: Legs & Abs",
            description: "Target your quads, hamstrings, glutes, and core strength.",
            icon: "fas fa-leg-calf", // Example icon for legs
            exercises: [
                { name: "Barbell Squats", setsReps: "4 sets, 8-12 reps", completed: false,
                  exerciseTips: ["Keep your chest up and back straight.", "Descend until your thighs are parallel to the floor or deeper.", "Drive through your heels on the way up."] },
                { name: "Leg Press", setsReps: "3 sets, 10-15 reps", completed: false,
                  exerciseTips: ["Place feet shoulder-width apart, mid-foot on the platform.", "Go deep enough to feel a stretch, but don't lift your hips.", "Avoid locking out your knees at the top."] },
                { name: "Romanian Deadlifts", setsReps: "3 sets, 10-15 reps", completed: false,
                  exerciseTips: ["Keep a slight bend in your knees.", "Hinge at your hips, pushing them back.", "Feel the stretch in your hamstrings, not your lower back."] },
                { name: "Leg Curls", setsReps: "3 sets, 12-15 reps", completed: false,
                  exerciseTips: ["Focus on squeezing your hamstrings.", "Control the movement, especially the negative.", "Perform seated or lying variations."] },
                { name: "Calf Raises", setsReps: "4 sets, 15-20 reps", completed: false,
                  exerciseTips: ["Go for a full range of motion: deep stretch at the bottom, high contraction at the top.", "Hold the peak contraction for a second.", "Perform standing or seated variations."] },
                { name: "Plank", setsReps: "3 sets, 60 seconds hold", completed: false,
                  exerciseTips: ["Keep your body in a straight line from head to heels.", "Engage your core and glutes.", "Avoid letting your hips sag or rise too high."] },
                { name: "Cable Crunches", setsReps: "3 sets, 15-20 reps", completed: false,
                  exerciseTips: ["Focus on contracting your abs to bring your elbows to your knees.", "Keep your lower back stable.", "Avoid using your arms to pull the weight."] }
            ]
        },
        {
            day: 4,
            name: "Day 4: Chest & Back",
            description: "Repeat chest and back, varying exercises for complete development.",
            icon: "fas fa-lungs",
            exercises: [
                { name: "Incline Barbell Press", setsReps: "4 sets, 8-12 reps", completed: false,
                  exerciseTips: ["Use a slightly narrower grip than flat bench.", "Focus on controlling the bar throughout the lift.", "Drive through your upper chest."] },
                { name: "Flat Dumbbell Press", setsReps: "3 sets, 10-15 reps", completed: false,
                  exerciseTips: ["Allow dumbbells to travel slightly wider than your shoulders.", "Focus on stretching the chest at the bottom.", "Squeeze chest at the top without touching dumbbells."] },
                { name: "T-Bar Rows", setsReps: "4 sets, 8-12 reps", completed: false,
                  exerciseTips: ["Maintain a strong, stable back.", "Pull with your elbows, focusing on your lats.", "Squeeze your shoulder blades together."] },
                { name: "Seated Cable Rows", setsReps: "3 sets, 10-15 reps", completed: false,
                  exerciseTips: ["Keep your back straight and chest up.", "Pull the handle to your lower abdomen.", "Allow for a slight stretch in your lats at the start."] },
                { name: "Pec Deck Flyes", setsReps: "3 sets, 12-15 reps", completed: false,
                  exerciseTips: ["Keep a slight bend in your elbows.", "Focus on squeezing your chest muscles together.", "Maintain consistent tension throughout the movement."] },
                { name: "Hyperextensions", setsReps: "3 sets, 12-15 reps", completed: false,
                  exerciseTips: ["Go slow and controlled to protect your lower back.", "Focus on engaging your glutes and hamstrings.", "Don't hyperextend your lower back past a neutral spine."] }
            ]
        },
        {
            day: 5,
            name: "Day 5: Shoulders & Arms",
            description: "Second shoulder and arm day with different exercise variations.",
            icon: "fas fa-hand-fist",
            exercises: [
                { name: "Seated Dumbbell Press", setsReps: "4 sets, 8-12 reps", completed: false,
                  exerciseTips: ["Use a bench with back support.", "Press dumbbells directly overhead, engaging your shoulders.", "Lower slowly to ear level."] },
                { name: "Upright Rows", setsReps: "3 sets, 10-15 reps", completed: false,
                  exerciseTips: ["Keep the bar close to your body.", "Pull elbows high, focusing on traps and side deltoids.", "Avoid shrugging excessively; primarily use shoulder muscles."] },
                { name: "Reverse Pec Deck Flyes", setsReps: "3 sets, 12-15 reps", completed: false,
                  exerciseTips: ["Focus on squeezing your rear deltoids.", "Keep a slight bend in your elbows.", "Control the movement, avoiding momentum."] },
                { name: "Preacher Curls", setsReps: "3 sets, 8-12 reps", completed: false,
                  exerciseTips: ["Ensure your triceps are firmly on the pad.", "Focus on a full contraction and stretch.", "Avoid swinging the weight."] },
                { name: "Close-Grip Bench Press", setsReps: "3 sets, 10-15 reps", completed: false,
                  exerciseTips: ["Keep your grip shoulder-width or slightly narrower.", "Tuck your elbows to target the triceps.", "Control the descent to feel the tricep stretch."] },
                { name: "Concentration Curls", setsReps: "3 sets, 10-15 reps", completed: false,
                  exerciseTips: ["Perform seated, resting elbow on inner thigh.", "Focus on extreme isolation and peak contraction.", "Slow, controlled reps are key."] },
                { name: "Tricep Rope Extensions", setsReps: "3 sets, 12-15 reps", completed: false,
                  exerciseTips: ["Split the rope at the bottom for a greater squeeze.", "Keep elbows stationary and close to your body.", "Focus on contracting your triceps to extend your arms."] }
            ]
        },
        {
            day: 6,
            name: "Day 6: Legs & Abs",
            description: "Second leg and ab day, incorporating more isolation work.",
            icon: "fas fa-leg-calf",
            exercises: [
                { name: "Front Squats", setsReps: "4 sets, 8-12 reps", completed: false,
                  exerciseTips: ["Maintain an upright torso.", "Keep elbows high to support the bar.", "Engage core throughout for stability."] },
                { name: "Leg Extensions", setsReps: "3 sets, 12-15 reps", completed: false,
                  exerciseTips: ["Focus on squeezing your quads at the top.", "Control the negative portion of the movement.", "Ensure full range of motion."] },
                { name: "Glute-Ham Raises", setsReps: "3 sets, 10-15 reps", completed: false,
                  exerciseTips: ["Focus on using your hamstrings and glutes, not lower back.", "Control the eccentric phase.", "If no GHR, do good mornings or reverse hyperextensions."] },
                { name: "Walking Lunges", setsReps: "3 sets, 10-12 reps per leg", completed: false,
                  exerciseTips: ["Keep your torso upright.", "Ensure your front knee doesn't go past your toes.", "Step long enough to feel the stretch in the trailing hip flexor."] },
                { name: "Seated Calf Raises", setsReps: "4 sets, 15-20 reps", completed: false,
                  exerciseTips: ["Target the soleus muscle.", "Go for a deep stretch at the bottom.", "Hold the peak contraction at the top."] },
                { name: "Hanging Leg Raises", setsReps: "3 sets, 15-20 reps", completed: false,
                  exerciseTips: ["Keep your core tight, avoid swinging.", "Focus on raising your legs using your lower abs.", "Full range of motion, bringing knees to chest."] },
                { name: "Russian Twists", setsReps: "3 sets, 20-30 reps", completed: false,
                  exerciseTips: ["Maintain a strong core; avoid rounding your back.", "Rotate from your torso, not just your arms.", "Use a weight for added resistance if desired."] }
            ]
        }
    ];

    // DOM Elements
    const daySelector = document.getElementById('day-selector');
    const workoutTitle = document.getElementById('workout-title');
    const workoutDescription = document.getElementById('workout-description');
    const workoutIcon = document.getElementById('workout-icon');
    const exercisesContainer = document.getElementById('exercises-container');
    const exerciseProgressDisplay = document.getElementById('exercise-progress');
    const footerProgressDisplay = document.getElementById('footer-progress');
    const progressBarFill = document.getElementById('progress-fill');
    const completionMessage = document.getElementById('completion-message');
    const resetBtn = document.getElementById('reset-btn');
    const completeBtn = document.getElementById('complete-btn');
    const streakCount = document.getElementById('streak-count');
    const completedDaysDisplay = document.getElementById('completed-days');
    const totalDaysDisplay = document.getElementById('total-days');
    const progressPath = document.getElementById('progress-path');
    const celebrationPopup = document.getElementById('celebration-popup');
    const closePopupBtn = document.getElementById('close-popup-btn');
    const confettiContainer = document.getElementById('confetti-container');

    // New elements for color changes
    const weeklyProgressCircleContainer = document.getElementById('weekly-progress-circle-container');
    const workoutContentSection = document.getElementById('workout-content');
    const footerProgressBarContainer = document.querySelector('.progress-bar-container');

    // NEW: Cardio Timer Elements
    const cardioEquipmentSelect = document.getElementById('cardio-equipment');
    const timerDisplay = document.getElementById('timer-display');
    const startTimerBtn = document.getElementById('start-timer-btn');
    const pauseTimerBtn = document.getElementById('pause-timer-btn');
    const resetTimerBtn = document.getElementById('reset-timer-btn');
    const cardioStatusDisplay = document.getElementById('cardio-status');


    let currentDay = null; // Stores the currently selected day index (0-indexed)

    // --- Cardio Timer Variables ---
    let countdownInterval;
    let totalTimeInSeconds = 0;
    let timeLeft = 0;
    let isTimerRunning = false;
    let cardioCompleted = false; // New variable to track cardio completion


    const cardioTimers = {
        bike: 40 * 60,       // 40 minutes in seconds
        treadmill: 30 * 60,  // 30 minutes in seconds
        stairmaster: 20 * 60 // 20 minutes in seconds
    };

    // --- Local Storage Management ---
    const STORAGE_KEY = 'arnoldSplitTracker';
    const CARDIO_STORAGE_KEY = 'arnoldSplitCardioTimer'; // Separate key for cardio

    function loadState() {
        const storedState = localStorage.getItem(STORAGE_KEY);
        if (storedState) {
            return JSON.parse(storedState);
        }
        // Default state if nothing in storage
        return {
            days: workoutDays.map(day => ({
                ...day,
                exercises: day.exercises.map(ex => ({ ...ex, completed: false }))
            })),
            streak: 0,
            completedWorkoutDays: new Array(workoutDays.length).fill(false) // Tracks which days are fully completed
        };
    }

    function loadCardioState() {
        const storedCardioState = localStorage.getItem(CARDIO_STORAGE_KEY);
        if (storedCardioState) {
            return JSON.parse(storedCardioState);
        }
        return {
            selectedEquipment: '',
            timeLeft: 0,
            totalTime: 0,
            isRunning: false,
            isCompleted: false // New property for cardio completion status
        };
    }

    let appState = loadState();
    let cardioState = loadCardioState();

    function saveState() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    }

    function saveCardioState() {
        localStorage.setItem(CARDIO_STORAGE_KEY, JSON.stringify(cardioState));
    }

    // --- UI Update Functions ---

    function renderDaySelector() {
        daySelector.innerHTML = '';
        appState.days.forEach((dayData, index) => {
            const button = document.createElement('button');
            button.classList.add('day-btn');
            button.textContent = `Day ${dayData.day}`;
            button.dataset.dayIndex = index;

            if (appState.completedWorkoutDays[index]) {
                button.classList.add('completed');
            }

            if (currentDay === index) {
                button.classList.add('active');
            }

            button.addEventListener('click', () => selectDay(index));
            daySelector.appendChild(button);
        });
    }

    function renderWorkoutContent(dayIndex) {
        const dayData = appState.days[dayIndex];
        workoutTitle.textContent = dayData.name;
        workoutDescription.textContent = dayData.description;
        workoutIcon.innerHTML = `<i class="${dayData.icon}"></i>`;
        exercisesContainer.innerHTML = '';

        dayData.exercises.forEach((exercise, exIndex) => {
            const exerciseItem = document.createElement('div');
            exerciseItem.classList.add('exercise-item');
            if (exercise.completed) {
                exerciseItem.classList.add('completed');
            }
            exerciseItem.dataset.exIndex = exIndex;

            // Updated innerHTML to include info button and tips container
            exerciseItem.innerHTML = `
                <div class="exercise-icon"><i class="fas fa-dumbbell"></i></div>
                <div class="exercise-details">
                    <h4>${exercise.name}</h4>
                    <p>${exercise.setsReps}</p>
                </div>
                <div class="exercise-actions">
                    <button class="info-button" aria-label="Exercise Tips">&#x24D8;</button> <div class="exercise-completion-checkbox">
                        <i class="fas fa-check"></i>
                    </div>
                </div>
                <div class="exercise-tips-container">
                    <ul>
                        ${exercise.exerciseTips.map(tip => `<li><i class="fas fa-info-circle"></i> ${tip}</li>`).join('')}
                    </ul>
                </div>
            `;

            // Event listener for completion checkbox (or the whole item for toggling completion)
            const completionCheckbox = exerciseItem.querySelector('.exercise-completion-checkbox');
            completionCheckbox.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent item click from interfering
                toggleExerciseCompletion(dayIndex, exIndex);
            });

            // Event listener for the info button
            const infoButton = exerciseItem.querySelector('.info-button');
            infoButton.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent item click from interfering with tips
                const tipsContainer = exerciseItem.querySelector('.exercise-tips-container');
                if (tipsContainer.style.display === 'block') {
                    tipsContainer.style.display = 'none';
                } else {
                    tipsContainer.style.display = 'block';
                }
            });

            exercisesContainer.appendChild(exerciseItem);
        });

        updateProgressBars();
    }

    function selectDay(index) {
        currentDay = index;
        renderDaySelector(); // Re-render to update active state
        renderWorkoutContent(currentDay);
        saveState();
    }

    function toggleExerciseCompletion(dayIndex, exIndex) {
        if (appState.completedWorkoutDays[dayIndex]) {
            // Prevent changing exercises on a completed day
            return;
        }

        const exercise = appState.days[dayIndex].exercises[exIndex];
        exercise.completed = !exercise.completed;
        saveState();
        renderWorkoutContent(dayIndex); // Re-render current day to update UI

        // Check if all exercises for the day are completed
        const allExercisesCompleted = appState.days[dayIndex].exercises.every(ex => ex.completed);
        if (allExercisesCompleted && !appState.completedWorkoutDays[dayIndex]) {
            markDayAsCompleted(dayIndex);
        } else if (!allExercisesCompleted && appState.completedWorkoutDays[dayIndex]) {
            // If an exercise is unchecked after the day was marked complete, unmark the day
            appState.completedWorkoutDays[dayIndex] = false;
            saveState();
            renderDaySelector(); // Update day button styling
        }
        updateProgressBars();
    }

    function markDayAsCompleted(dayIndex) {
        appState.completedWorkoutDays[dayIndex] = true;
        saveState();
        renderDaySelector(); // Update day button styling
        updateProgressBars();
        showCelebration();
        updateStreak();
    }

    function updateProgressBars() {
        if (currentDay === null) {
            exerciseProgressDisplay.textContent = '0/0';
            footerProgressDisplay.textContent = '0/0 exercises';
            progressBarFill.style.width = '0%';
            completionMessage.style.display = 'none';
            workoutContentSection.classList.remove('day-completed');
            footerProgressBarContainer.classList.remove('day-completed');
            cardioStatusDisplay.textContent = 'Cardio: Not Selected';
            cardioStatusDisplay.classList.remove('completed', 'in-progress');
            return;
        }

        const currentWorkout = appState.days[currentDay];
        const completedExercises = currentWorkout.exercises.filter(ex => ex.completed).length;
        const totalExercises = currentWorkout.exercises.length;

        exerciseProgressDisplay.textContent = `${completedExercises}/${totalExercises}`;

        // Determine cardio status
        let cardioDisplayStatus = '';
        cardioStatusDisplay.classList.remove('completed', 'in-progress');
        if (cardioState.selectedEquipment) {
            if (cardioState.isCompleted) {
                cardioDisplayStatus = 'Cardio: Completed';
                cardioStatusDisplay.classList.add('completed');
            } else if (cardioState.isRunning) {
                cardioDisplayStatus = `Cardio: In Progress (${formatTime(timeLeft)})`;
                cardioStatusDisplay.classList.add('in-progress');
            } else {
                cardioDisplayStatus = `Cardio: Ready (${formatTime(totalTimeInSeconds)})`;
            }
        } else {
            cardioDisplayStatus = 'Cardio: Not Selected';
        }
        cardioStatusDisplay.textContent = cardioDisplayStatus;

        // Calculate overall progress for the footer progress bar
        // Treat cardio as an additional "task" or "exercise" if selected
        let totalProgressItems = totalExercises;
        let completedProgressItems = completedExercises;

        if (cardioState.selectedEquipment) {
            totalProgressItems++; // Add 1 for the cardio task
            if (cardioState.isCompleted) {
                completedProgressItems++; // Add 1 if cardio is completed
            }
        }

        footerProgressDisplay.textContent = `${completedProgressItems}/${totalProgressItems} tasks`;

        const percentage = totalProgressItems === 0 ? 0 : (completedProgressItems / totalProgressItems) * 100;
        progressBarFill.style.width = `${percentage}%`;

        if (completedExercises === totalExercises && totalExercises > 0 && (cardioState.isCompleted || !cardioState.selectedEquipment)) {
            completionMessage.style.display = 'block';
            workoutContentSection.classList.add('day-completed'); // Add class for yellow color
            footerProgressBarContainer.classList.add('day-completed'); // Add class for yellow color
        } else {
            completionMessage.style.display = 'none';
            workoutContentSection.classList.remove('day-completed'); // Remove class if not 100%
            footerProgressBarContainer.classList.remove('day-completed'); // Remove class if not 100%
        }

        // Update weekly progress circle
        const completedWorkoutDaysCount = appState.completedWorkoutDays.filter(day => day).length;
        completedDaysDisplay.textContent = completedWorkoutDaysCount;
        totalDaysDisplay.textContent = appState.days.length; // Ensure total days is accurate

        const circleProgress = (completedWorkoutDaysCount / appState.days.length) * 100;
        progressPath.style.strokeDasharray = `${circleProgress}, 100`;

        // Set weekly progress circle color to yellow if all days are complete
        if (completedWorkoutDaysCount === appState.days.length && appState.days.length > 0) {
            weeklyProgressCircleContainer.querySelector('.progress-circle').classList.add('all-days-complete');
        } else {
            weeklyProgressCircleContainer.querySelector('.progress-circle').classList.remove('all-days-complete');
        }
    }

    function updateStreak() {
        // Simple streak logic: if all days are completed, increment streak.
        // More complex logic would involve checking consecutive daily completions.
        const allWorkoutDaysCompleted = appState.completedWorkoutDays.every(day => day);
        if (allWorkoutDaysCompleted) {
            appState.streak++;
            streakCount.textContent = appState.streak;
            saveState();
            // Optionally, reset completedWorkoutDays for the next week's streak
            // This is where you'd decide if a full 6-day cycle resets for a new streak
            // For now, it just increments the streak when all days are done.
        }
    }

    function resetWorkout() {
        if (!confirm('Are you sure you want to reset ALL workout progress and streak? This action cannot be undone.')) {
            return;
        }
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(CARDIO_STORAGE_KEY); // Clear cardio state too
        appState = loadState(); // Reload to initial state
        cardioState = loadCardioState(); // Reload cardio initial state
        currentDay = null; // Reset selected day
        init(); // Reinitialize everything
        alert('Workout progress and streak have been reset!');
    }

    function handleCompleteDay() {
        if (currentDay === null) {
            alert('Please select a workout day first!');
            return;
        }

        const currentWorkout = appState.days[currentDay];
        const allExercisesCompleted = currentWorkout.exercises.every(ex => ex.completed);

        if (!allExercisesCompleted) {
            alert('Please complete all exercises for the current day before marking as complete!');
            return;
        }

        if (cardioState.selectedEquipment && !cardioState.isCompleted) {
            alert('Please complete your cardio session before marking the day as complete!');
            return;
        }

        if (appState.completedWorkoutDays[currentDay]) {
            alert('This day has already been marked as complete!');
            return;
        }

        markDayAsCompleted(currentDay);
    }

    // --- Cardio Timer Functions ---
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    function updateTimerDisplay() {
        timerDisplay.textContent = formatTime(timeLeft);
    }

    function startTimer() {
        if (isTimerRunning || timeLeft <= 0) return;

        isTimerRunning = true;
        cardioState.isRunning = true;
        cardioState.isCompleted = false; // Reset completed status if starting again
        saveCardioState();

        startTimerBtn.disabled = true;
        pauseTimerBtn.disabled = false;
        resetTimerBtn.disabled = false;
        cardioEquipmentSelect.disabled = true; // Disable selection when timer is running
        updateProgressBars(); // Update progress bar to show cardio in progress

        countdownInterval = setInterval(() => {
            timeLeft--;
            cardioState.timeLeft = timeLeft; // Update state in local storage
            saveCardioState();
            updateTimerDisplay();
            updateProgressBars(); // Update progress bar with ticking timer


            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                isTimerRunning = false;
                cardioState.isRunning = false;
                cardioState.isCompleted = true; // Mark cardio as completed
                saveCardioState();
                timerDisplay.textContent = "00:00"; // Ensure it shows 00:00
                startTimerBtn.disabled = true; // Timer finished, cannot start again
                pauseTimerBtn.disabled = true; // Cannot pause
                resetTimerBtn.disabled = false; // Can reset
                cardioEquipmentSelect.disabled = false; // Re-enable selection
                alert("Cardio session complete! Great job!");
                updateProgressBars(); // Final update after completion
            }
        }, 1000);
    }

    function pauseTimer() {
        clearInterval(countdownInterval);
        isTimerRunning = false;
        cardioState.isRunning = false;
        saveCardioState();
        startTimerBtn.disabled = false;
        pauseTimerBtn.disabled = true;
        resetTimerBtn.disabled = false;
        cardioEquipmentSelect.disabled = false; // Re-enable selection
        updateProgressBars(); // Update progress bar to show cardio paused
    }

    function resetTimer() {
        clearInterval(countdownInterval);
        isTimerRunning = false;
        cardioState.isRunning = false;
        cardioState.isCompleted = false; // Reset completed status
        cardioState.timeLeft = totalTimeInSeconds; // Reset to original time
        cardioState.selectedEquipment = ''; // Clear selected equipment
        cardioState.totalTime = 0;
        saveCardioState();

        timeLeft = 0; // For immediate display update
        totalTimeInSeconds = 0; // Reset total time
        timerDisplay.textContent = "00:00";
        startTimerBtn.disabled = true;
        pauseTimerBtn.disabled = true;
        resetTimerBtn.disabled = true;
        cardioEquipmentSelect.disabled = false; // Re-enable selection
        cardioEquipmentSelect.value = ''; // Reset dropdown
        updateProgressBars(); // Final update after reset
    }

    // Event Listeners for Cardio Timer
    cardioEquipmentSelect.addEventListener('change', (event) => {
        const selected = event.target.value;
        clearInterval(countdownInterval); // Stop any running timer
        isTimerRunning = false;
        cardioState.isRunning = false; // Ensure state is not running on new selection

        if (selected && cardioTimers[selected]) {
            totalTimeInSeconds = cardioTimers[selected];
            timeLeft = totalTimeInSeconds;
            cardioState.selectedEquipment = selected;
            cardioState.timeLeft = timeLeft;
            cardioState.totalTime = totalTimeInSeconds;
            cardioState.isCompleted = false; // New selection means not completed yet
            saveCardioState();

            updateTimerDisplay();
            startTimerBtn.disabled = false;
            pauseTimerBtn.disabled = true;
            resetTimerBtn.disabled = false; // Can reset to new time
        } else {
            totalTimeInSeconds = 0;
            timeLeft = 0;
            cardioState.selectedEquipment = '';
            cardioState.timeLeft = 0;
            cardioState.totalTime = 0;
            cardioState.isCompleted = false;
            saveCardioState();

            timerDisplay.textContent = "00:00";
            startTimerBtn.disabled = true;
            pauseTimerBtn.disabled = true;
            resetTimerBtn.disabled = true;
        }
        updateProgressBars(); // Update progress bar based on new cardio selection
    });

    startTimerBtn.addEventListener('click', startTimer);
    pauseTimerBtn.addEventListener('click', pauseTimer);
    resetTimerBtn.addEventListener('click', resetTimer);

    // --- Celebration Effects ---
    function showCelebration() {
        celebrationPopup.classList.add('show');
        createConfetti();
        // Stop confetti after a few seconds
        setTimeout(() => {
            clearConfetti();
        }, 3000);
    }

    function createConfetti() {
        const colors = ['#00D4AA', '#FFA500', '#FF6B6B', '#E0E0E0', '#B16CEE', '#FFD700']; // Added yellow
        const shapes = ['square', 'circle', 'triangle'];

        for (let i = 0; i < 100; i++) { // Generate 100 pieces of confetti
            const confetti = document.createElement('div');
            confetti.classList.add('confetti', shapes[Math.floor(Math.random() * shapes.length)]);
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

            const startX = Math.random() * window.innerWidth;
            const startY = -20; // Start slightly above the viewport

            confetti.style.left = `${startX}px`;
            confetti.style.top = `${startY}px`;

            const endX = Math.random() * window.innerWidth * 2 - window.innerWidth; // -width to +width
            const endY = window.innerHeight + 20; // End slightly below the viewport

            const duration = 2 + Math.random() * 2; // 2-4 seconds
            const delay = Math.random() * 0.5; // 0-0.5 seconds
            const rotation = Math.random() * 720; // 0-720 degrees

            confetti.style.animation = `fadeOut ${duration}s ${delay}s ease-out forwards`;
            confetti.style.transform = `translate(${endX}px, ${endY}px) rotate(${rotation}deg)`;

            confettiContainer.appendChild(confetti);
        }
    }

    function clearConfetti() {
        confettiContainer.innerHTML = '';
    }

    closePopupBtn.addEventListener('click', () => {
        celebrationPopup.classList.remove('show');
    });

    // --- Initialization ---
    function init() {
        streakCount.textContent = appState.streak;
        renderDaySelector();
        // Check if there's a currentDay in storage from previous session
        const storedAppState = localStorage.getItem(STORAGE_KEY);
        if (storedAppState) {
            const parsedState = JSON.parse(storedAppState);
            if (parsedState.currentDayIndex !== undefined && parsedState.days.length > 0) {
                currentDay = parsedState.currentDayIndex;
                selectDay(currentDay); // Re-select the day to render its content
            }
        }

        // If no day was explicitly selected or loaded, select the first day
        if (currentDay === null && appState.days.length > 0) {
            selectDay(0);
        } else {
            updateProgressBars(); // Ensure bars are updated even if no day is selected initially
        }

        // Initialize Cardio Timer from storage
        if (cardioState.selectedEquipment) {
            cardioEquipmentSelect.value = cardioState.selectedEquipment;
            totalTimeInSeconds = cardioState.totalTime;
            timeLeft = cardioState.timeLeft;
            cardioCompleted = cardioState.isCompleted; // Load completion status
            updateTimerDisplay();
            startTimerBtn.disabled = false;
            resetTimerBtn.disabled = false;

            if (cardioState.isRunning) {
                startTimer(); // Resume timer if it was running
                pauseTimerBtn.disabled = false;
                cardioEquipmentSelect.disabled = true;
            } else {
                pauseTimerBtn.disabled = true;
            }
        }
        updateProgressBars(); // Ensure initial progress bar state reflects loaded cardio status
    }

    // Override selectDay to also save the currentDayIndex to storage
    const originalSelectDay = selectDay;
    selectDay = function(index) {
        originalSelectDay(index);
        appState.currentDayIndex = index; // Store the index of the current day
        saveState(); // Save the state immediately
    };

    // Event Listeners
    resetBtn.addEventListener('click', resetWorkout);
    completeBtn.addEventListener('click', handleCompleteDay);

    init(); // Run initialization
});
