import { ChartT } from "../Interfaces";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#35cbdc", "#FFBB28", "#FF8042", "#a3a4a9"];

function RoundPieChart({ data }: Partial<ChartT>) {
  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={data}
          cx={290}
          cy={75}
          innerRadius={40}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data?.map((entry, index) => (
            <Cell
              key={`cell-${index} ${entry}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          verticalAlign="middle"
          align="right"
          width={380}
          layout="vertical"
          iconSize={10}
          iconType="circle"
          fontSize={80}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default RoundPieChart;
