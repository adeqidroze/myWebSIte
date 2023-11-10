import Chart from 'chart.js/auto';

// Within your component or script

// Assuming 'data' contains your chart data
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Example Data',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
    }]
};

const config = {
    type: 'line',
    data: data,
};

// Render the chart onto a canvas element
const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, config);