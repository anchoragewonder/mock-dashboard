$(document).ready(function () {
    $('#dismiss').on('click', function () {
        $('#sidebar').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('#darkMode').on('click', function () {
        $('.card').removeClass('text-dark bg-light').addClass('text-light bg-dark');
    })

    $("#lightMode").on('click', function () {
        $('.card').removeClass('text-light bg-dark ').addClass('text-dark bg-light');
    })
});

function hideButton(buttonId) {
    document.getElementById(buttonId).style.display = "none";
    console.log(`${buttonId} was hid`);

    if (buttonId == "darkMode") {
        document.getElementById("lightMode").style.display = "block";
        console.log('light button should be visable');
    }
    if (buttonId == "lightMode") {
        document.getElementById("darkMode").style.display = "block";
    }
}