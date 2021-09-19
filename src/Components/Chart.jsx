import { Bar } from 'react-chartjs-2';

export const Chart = ({ chartData }) => {
    return (
    <div>
        <Bar
            data={chartData}
            options={{
                plugins: {
                    title: {
                        display: false,
                    },
                    legend: {
                        display: true,
                        position: "top"
                    }
                }
            }}
        />
    </div>
    );
};