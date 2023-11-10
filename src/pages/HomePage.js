import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import '../styles/graphStyles.css'

const HomePage = () => {
    const [bitcoinData, setBitcoinData] = useState({});

    useEffect(() => {
        // Replace 'API_KEY' with your CoinMarketCap API key
        const apiKey = 'b87ebebd-f10c-410f-a5ff-a99469ee1ebc';
        const apiUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/historical';
        const symbol = 'BTC'; // Bitcoin symbol
        const currency = 'USD'; // Display prices in USD
        const timeStart = '2023-01-01T00:00:00Z'; // Start time
        const timeEnd = '2023-09-01T00:00:00Z'; // End time

        fetch(`${apiUrl}?symbol=${symbol}&time_start=${timeStart}&time_end=${timeEnd}&convert=${currency}`, {
            headers: {
                'X-CMC_PRO_API_KEY': apiKey,
            }
        })
            .then(response => response.json())
            .then(data => {
                setBitcoinData(data);
            })
            .catch(error => {
                console.error('Error fetching Bitcoin data:', error);
            });
    }, []);

    useEffect(() => {
        if (Object.keys(bitcoinData).length !== 0) {
            // Assuming your data structure matches Chart.js requirements
            const labels = Object.keys(bitcoinData.data.quote.USD).sort();
            const prices = labels.map(label => bitcoinData.data.quote.USD[label].price);

            const ctx = document.getElementById('bitcoinChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Bitcoin Price',
                        data: prices,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                },
                options: {
                    // Add your chart options here
                }
            });
        }
    }, [bitcoinData]);

    return (
        <div class="chart-container">
            <h2 class="chart-title">Bitcoin Price Chart</h2>
            <canvas id="bitcoinChart" class="chart-canvas"></canvas>
        </div>
    );
};

export default HomePage;