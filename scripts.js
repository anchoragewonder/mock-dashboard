$(document).ready(function () {
    $('#dismiss').on('click', function () {
        $('#sidebar').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

document.addEventListener('DOMContentLoaded', () => {

    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        themeToggle.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
        cardStyleToggle();
    });

    if (currentTheme === 'dark') {
        document.body.classList.add('dark');
        themeToggle.classList.add('dark');
        cardStyleToggle();
    }
})

function cardStyleToggle() {
    document.querySelectorAll('.card').forEach(item => {
        item.classList.toggle('bg-light')
        item.classList.toggle('bg-secondary')
        item.classList.toggle('text-dark')
        item.classList.toggle('text-light')
    })

};

new Chart(document.getElementById('salesData'), {
    type: 'line',
    data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [
            {
                label: "Trash",
                borderColor: "rgba(145, 78, 206, 1)",
                backgroundColor: "rgba(145, 78, 206, .1)",
                data: [340, 300, 250, 450, 250, 340, 300],
            },
            {
                label: "Recycling",
                borderColor: "rgba(88, 188, 116, 1)",
                backgroundColor: "rgba(20, 75, 35, .3)",
                data: [190, 170, 210, 360, 220, 250, 200]
            },
            {
                label: "Split Truck",
                borderColor: "rgba(0, 20, 240, 1)",
                backgroundColor: "rgba(0, 0, 206, .3)",
                data: [100, 140, 110, 260, 200, 90, 140]
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Weight in Ton's",
                    padding: 10
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

