// Modern CV Interactive Functionality

// Theme Toggle
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle i');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeToggle.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    }
}

// Copy to Clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Email copied to clipboard!');
    }).catch(() => {
        showNotification('Unable to copy email');
    });
}

// Save as PDF function
function savePDF() {
    showNotification('Opening print dialog - Choose "Save as PDF" as destination');
    
    // Hide buttons temporarily for clean print
    const buttons = document.querySelectorAll('.theme-toggle, .print-button, .save-pdf-button');
    buttons.forEach(btn => btn.style.display = 'none');
    
    // Add print-specific class for any additional print styling
    document.body.classList.add('saving-pdf');
    
    // Small delay to ensure buttons are hidden before print dialog
    setTimeout(() => {
        // Open print dialog - user can choose "Save as PDF"
        window.print();
        
        // Restore buttons after print dialog is closed
        setTimeout(() => {
            buttons.forEach(btn => btn.style.display = 'flex');
            document.body.classList.remove('saving-pdf');
        }, 1000);
    }, 200);
}

// Show Notification
function showNotification(message) {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #4f46e5;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        z-index: 1001;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.style.opacity = '1', 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.querySelector('.theme-toggle i');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.className = 'fas fa-sun';
    }
    
    // Add animation delays to sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Add hover effects to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Print functionality
    const printButton = document.querySelector('.print-button');
    if (printButton) {
        printButton.addEventListener('click', function() {
            window.print();
        });
    }
    
    // PDF save functionality
    const saveButton = document.querySelector('.save-pdf-button');
    if (saveButton) {
        saveButton.addEventListener('click', savePDF);
    }
});