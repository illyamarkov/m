function saveAchievements() {
    var achievements = {};
    document.querySelectorAll('.achievement').forEach(function(div) {
        achievements[div.id] = div.classList.contains('active');
    });
    document.cookie = "achievements=" + JSON.stringify(achievements);
}

function getCookie(name) {
    var cookies = document.cookie.split('; ');
    for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        if (parts[0] === name) {
            return decodeURIComponent(parts[1]);
        }
    }
}

function loadAchievements() {
var achievements = {};
var cookies = document.cookie.split('; ');
for (var i = 0; i < cookies.length; i++) {
    var parts = cookies[i].split('=');
    if (parts[0] === 'achievements') {
        achievements = JSON.parse(parts[1]);
    }
}
for (var id in achievements) {
    var div = document.getElementById(id);
    if (div) {
        if (achievements[id]) {
            div.classList.add('active');
        } else {
            div.classList.remove('active');
        }
    }
}
}

function toggleAchievement(element) {
    if (!element.classList.contains('active')){
      element.classList.toggle('active');
      saveAchievements();
      loadAchievements();
    }
}

window.addEventListener('load', loadAchievements);
window.addEventListener('beforeunload', saveAchievements);