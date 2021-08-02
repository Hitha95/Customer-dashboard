import React from 'react';
import {GoogleCharts} from 'google-charts'

const OrdersChart = (props) => {
    const {orderFrequency} = props
    const chartData =[['No. of orders', 'Count of customers']]
    for(const key in orderFrequency){
            chartData.push([key, orderFrequency[key]])
        }
    GoogleCharts.load(drawChart);
    function drawChart() {
        const data = GoogleCharts.api.visualization.arrayToDataTable(chartData);
        const options = {
        title: 'Order distribution',
        titleTextStyle: {color: '#173f5f'},
        fontSize: 15,
        colors: ['#081520','#173f5f', '#0f2a3f', '#1b496f', '#225e8e'],
        width: 500,
        height: 400,
        };
        const chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);  
        }
    return(
        <div id='piechart'></div>
    )

}
 
export default OrdersChart;