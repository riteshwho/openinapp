import { Line } from "react-chartjs-2";
import {
  Chart as Chartjs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js/auto";

Chartjs.register(LineElement, CategoryScale, LinearScale, PointElement);

function LineChart({data1,data2}) {
    const data = {
        labels: ['Weak 1', 'Weak 2', 'Weak 3' , 'Weak 4'],
        datasets: [{
            label: 'Guest',
            data: data1,
            backgroundColor: '#ffa69e',
            borderColor: '#ffa69e',
            tension: 0.4
        },
        {
            label: 'User',
            data: data2,
            backgroundColor: '#90be6d',
            borderColor: '#90be6d',
            tension: 0.4
        }]

    }
    const options = {
        plugins: {
            legend:true
        },
        scales:{
           x:{
            grid:{
                display: false
            }
           },
           y:{
            min:100,
            max:500,
            ticks:{
                stepSize:100,
            }
           }
        }
    }
  return( <>
 <div style={{width: '800px' ,marginLeft: '100px', backgroundColor: "white" , borderRadius: "10px" , marginTop: '20px'}}>
    <div style={{fontWeight: "bolder", color: 'black'}}>Activities<br/>
        <span style={{fontWeight: '200', color: "gray"}}>July-August 2022</span>
    </div>
     <Line data={data} options={options}></Line></div>
 

  
  </>
  )
}
export default LineChart;
