var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Earning from Stock',
            data: [100000, 120000, 90000, 100800, 80000, 150000, 130000, 75000, 85000, 95000, 97000, 92000],
            backgroundColor: [
                'rgba(85,85,85, 1)'
            ],
            borderColor: 'rgb(41, 155, 99)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});