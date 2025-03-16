function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    const buttons = document.querySelectorAll('.tab-btn');
    
    sections.forEach(section => section.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(sectionId).classList.add('active');
    document.querySelector(`button[onclick="showSection('${sectionId}')"]`).classList.add('active');
}

// Show 'Education' by default on load
document.getElementById('education').classList.add('active');