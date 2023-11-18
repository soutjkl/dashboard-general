import React from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
    {name: "María", age: 10, weight: 60},
    {name: 'Karina', age: 25, weight: 70},
    {name: 'Susana', age: 15, weight: 65},
    {name: 'Pedro', age: 35, weight: 85},
    {name: 'Felipe', age: 12, weight: 48},
    {name: 'Laura', age: 30, weight: 69},
    {name: 'Adrián', age: 15, weight: 78},
]

const StackedAreaCharts = () => {
  return (
    <ResponsiveContainer width="100%" aspect={1.89}>
        <AreaChart
            width={100}
            height={100}
            data={data}
            margin={{
                top:10,
                right:10,
                left:0,
                bottom:0 
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="age" stackId="1" stroke='#F08080' fill="#FA8072" />
            <Area type="monotone" dataKey="weight" stackId="1" stroke='#FA8072' fill="#fad3cf" />
        </AreaChart>
    </ResponsiveContainer>
  )
}

export default StackedAreaCharts