const buttons = document.querySelectorAll('#btn_modal_open');
const button_close = document.getElementById('btn_modal_close');
const modal = document.getElementById('modal');
const modal_window = document.getElementById('modal_window');

const button_cookie_agree = document.getElementById('btn_cookie_agree');
const cookie_window = document.getElementById('cookie');



checkCookie();

function checkCookie() {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [cookieAgree] = cookie.split('=');
        if (cookieAgree == false) {
            cookie_window.classList.add("active");
            break;
        }
    }
};

if (document.getElementById('btn_cookie_agree') != null) {
    button_cookie_agree.addEventListener('click', function() {
        cookie_window.classList.remove("active");
        cookie_agree();
    });
}

function cookie_agree() {
    let date = new Date();
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = "cookie_agree=true; " + expires + "; path=/";
};


buttons.forEach(button => {
    button.addEventListener('click', function() {
        modal.classList.add("active");
    });
});

modal.addEventListener('click', (event) => {
    if (!modal_window.contains(event.target) || event.target == button_close) {
        modal.classList.remove("active");
    }
});