if (window.top === window && !/^\/play(\/.*)?$/.test(window.location.pathname) && window.location.pathname !== '/play.html') {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '10000';

    const message = document.createElement('div');
    message.style.color = 'white';
    message.style.fontSize = '24px';
    message.style.fontFamily = 'Arial, sans-serif';
    message.style.textAlign = 'center';
    message.textContent = '404 Not Found';

    overlay.appendChild(message);
    document.body.appendChild(overlay);
}
