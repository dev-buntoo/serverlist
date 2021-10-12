$(document).ready(function () {
    $('#deathMatchTable').dataTable({
        searching: false,
        paging: false,
        info: false
    });
    $('#mgeTable').dataTable({
        searching: false,
        paging: false,
        info: false
    });
    $('#jumpServerTable').dataTable({
        searching: false,
        paging: false,
        info: false
    });
    $('#casualTable').dataTable({
        searching: false,
        paging: false,
        info: false
    });
    $(document).on('change', '#region', function (event) {
        const val = $(this).val();
        if (val === 'all') {
            displayAll();
        } else if (val === 'america') {
            americaOnly();
        } else if (val === 'europe') {
            europeOnly();
        } else if (val === "australia") {
            australiaOnly();
        } else if (val === "asia") {
            asiaOnly();
        }
    })
    const displayAll = () => {
        let america = $("[region=america]");
        let europe = $("[region=europe]");
        let australia = $("[region=australia]");
        let asia = $("[region=asia]");
        for (i = 0; i < europe.length; i++) {
            europe[i].style.display = "";
        }
        for (i = 0; i < australia.length; i++) {
            australia[i].style.display = "";
        }
        for (i = 0; i < asia.length; i++) {
            asia[i].style.display = "";
        }
        for (i = 0; i < america.length; i++) {
            america[i].style.display = "";
        }
    }
    const americaOnly = () => {
        let america = $("[region=america]");
        let europe = $("[region=europe]");
        let australia = $("[region=australia]");
        let asia = $("[region=asia]");
        for (i = 0; i < europe.length; i++) {
            europe[i].style.display = "none";
        }
        for (i = 0; i < australia.length; i++) {
            australia[i].style.display = "none";
        }
        for (i = 0; i < asia.length; i++) {
            asia[i].style.display = "none";
        }
        for (i = 0; i < america.length; i++) {
            america[i].style.display = "";
        }
    }
    const europeOnly = () => {
        let america = $("[region=america]");
        let europe = $("[region=europe]");
        let australia = $("[region=australia]");
        let asia = $("[region=asia]");
        for (i = 0; i < europe.length; i++) {
            europe[i].style.display = "";
        }
        for (i = 0; i < australia.length; i++) {
            australia[i].style.display = "none";
        }
        for (i = 0; i < asia.length; i++) {
            asia[i].style.display = "none";
        }
        for (i = 0; i < america.length; i++) {
            america[i].style.display = "none";
        }
    }
    const australiaOnly = () => {
        let america = $("[region=america]");
        let europe = $("[region=europe]");
        let australia = $("[region=australia]");
        let asia = $("[region=asia]");
        for (i = 0; i < europe.length; i++) {
            europe[i].style.display = "none";
        }
        for (i = 0; i < australia.length; i++) {
            australia[i].style.display = "";
        }
        for (i = 0; i < asia.length; i++) {
            asia[i].style.display = "none";
        }
        for (i = 0; i < america.length; i++) {
            america[i].style.display = "none";
        }
    }
    const asiaOnly = () => {
        let america = $("[region=america]");
        let europe = $("[region=europe]");
        let australia = $("[region=australia]");
        let asia = $("[region=asia]");
        for (i = 0; i < europe.length; i++) {
            europe[i].style.display = "none";
        }
        for (i = 0; i < australia.length; i++) {
            australia[i].style.display = "none";
        }
        for (i = 0; i < asia.length; i++) {
            asia[i].style.display = "";
        }
        for (i = 0; i < america.length; i++) {
            america[i].style.display = "none";
        }
    }
});
/* Optional Javascript to close the radio button version by clicking it again */
var myRadios = document.getElementsByName('tabs2');
var setCheck;
var x = 0;
for (x = 0; x < myRadios.length; x++) {
    myRadios[x].onclick = function () {
        if (setCheck != this) {
            setCheck = this;
        } else {
            this.checked = false;
            setCheck = null;
        }
    };
}
var theme, prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersDarkScheme.matches)
    theme = document.body.classList.contains("light-mode") ? "light" : "dark";
else
    theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
localStorage.setItem("theme", theme);

function toggle() {
    var currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark")
        document.body.classList.toggle("light-mode");
    else if (currentTheme == "light")
        document.body.classList.toggle("dark-mode");
}