import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Q1", deals: 65, revenue: 4000 },
  { name: "Q2", deals: 45, revenue: 3000 },
  { name: "Q3", deals: 98, revenue: 7000 },
  { name: "Q4", deals: 76, revenue: 5000 },
];

const DashboardBarChart = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium text-gray-600 mb-4">Quarterly Performance</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666666', fontSize: 12 }}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666666', fontSize: 12 }}
              dx={-10}
            />
            <Tooltip 
              contentStyle={{ 
                background: 'white',
                border: '1px solid #f0f0f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
            />
            <Bar 
              dataKey="deals" 
              fill="#000000" 
              radius={[4, 4, 0, 0]}
              barSize={20}
            />
            <Bar 
              dataKey="revenue" 
              fill="#64748b" 
              radius={[4, 4, 0, 0]}
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default DashboardBarChart;