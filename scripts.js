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
        item.classList.toggle('bg-dark')
        item.classList.toggle('text-dark')
        item.classList.toggle('text-light')
    })

};

// Chart JS Creation of Mock Data 
new Chart(document.getElementById('myChart'), {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


new Chart(document.getElementById("doughnut"), {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [100, 20, 30],
            backgroundColor: [
                '#3c8dbc',
                '#f56954',
                '#f39c12',
            ],
        }],
        labels: [
            'Page Visits',
            'Click Through',
            'Errors'
        ]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            position: 'bottom',
            labels: {
                boxWidth: 12
            }
        }
    }
});

new Chart(document.getElementById("lines"), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: '# of Users',
            data: [20, 39, 43, 50, 62],
            borderColor: ['#3c8dbc'],
            pointBackgroundColor: ['#FF0000', '#00FF00', '#FFFF00', '#00FFFF', '#FF00FF'],
            fill: false
        }]
    },
    options: {
        maintainAspectRatio: true,
        title: {
            display: true,
            text: 'People Using Our Product (in millions)'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
            {
                label: "Users ",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: [478, 1867, 734, 784, 1433]
            }
        ]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: 'User Traffic by Country'
        }
    }
});
