import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from'chart.js';

import { Pie } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

const PieChart = ({tees,pant,hoodies}) => {
// passing data from Dashboard

    const data = {
        labels: [ 'Super Hoodies', 'custom short pants', 'Basic Tees'],
        datasets: [
            {
                data: [hoodies,pant,tees],
                backgroundColor:['#f25c54','#f8e16c', '#90be6d']
            }
        ]
    };
    const options = {

    }
  return <div>
<div>
    <Pie 
    data = {data}
    options={options}>  </Pie>
</div>
  </div>;
};

export default PieChart;
