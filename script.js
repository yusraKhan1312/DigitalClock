//JavaScript to fetch and update the current date and time every second
function updateClock() {
    // new Date(): creates a new date object representing the current date and time
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; //'0' should be '12';
    // Pad minutes and seconds with leading zeros
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes; // Adds a leading zero if the value is less than 10
    seconds = seconds < 10 ? '0' + seconds : seconds;
    // Display the time in HH:MM:SS AM/PM format
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('clock').innerText = timeString;
    // Display date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);
    document.getElementById('date').innerText = dateString;
}
// Update the clock every second
setInterval(updateClock, 1000);
// Call the function once to initialize the clock immediately
updateClock();
document.getElementById('modeToggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});