import React from 'react'
import { PieChart, ResponsiveContainer, Pie, Tooltip, Cell } from 'recharts'

const data = [
    { name: "Group A", value: 2400 },
    { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 },
    { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 },
    { name: 'Group F', value: 4800 },
]

const COLORS = ['#E9967A', '#FFA07A', '#F08080', '#CD5C5C', '#f48fb1', '#d500f9']

const SimplePieCharts = () => {
  return (
    <div style={{ width: '100%', height: 400}}>
        <ResponsiveContainer>
            <PieChart>
                <Pie
                    dataKey="value" 
                    data={data}
                    innerRadius={80}
                    outerRadius={150}
                    fill="#82ca9d"
                >
                   {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                   ))}     
                </Pie>
                <Tooltip />
            </PieChart>

        </ResponsiveContainer>
    </div>
  )
}

export default SimplePieCharts