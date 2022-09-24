//const fs = require('fs');

function incCount() {
    var pages = document.getElementById('pages');
    pages.textContent = parseInt(pages.textContent) += 1;
}

function getCurrentTime() {
    var time = document.getElementById('time');
    var date, day, month, year, hour, min, sec;

    date = new Date();
    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();
    hour = date.getHours();
    min = getDate(date.getMinutes());
    sec = getDate(date.getSeconds());

    time.textContent = day + "." + month + "." + year + " " + hour + ":" + min; // + ":" + sec;
    setInterval(getCurrentTime, 1000);
}

function getDate(number) {
    var datetime = number <= 9 ? datetime = '0' + number : datetime = number;
    return datetime;
}

function selectTextHTML(HTMLElement, text) {
    document.getElementById(HTMLElement).innerHTML = text;
}

function checkPagelog() {
    const path = 'page_log';

    var xhr = new XMLHttpRequest();
    xhr.open('GET', path);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            pagelog.textContent = "File found";
            console.log(this.responseText);
        } else {
            console.log(xhr.responseText);
            pagelog.textContent = "File not found";
        }
    }
    xhr.send();
}