// Section Navigation
function showSection(sectionId) {
    document.querySelectorAll('.activity').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Mouse Gradient Hover Effect
const button = document.querySelector('.gradient-button');

if (button) {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        button.style.setProperty('--x', `${x}px`);
        button.style.setProperty('--y', `${y}px`);
    });
}
