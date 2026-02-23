import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Build', success: 45, failed: 5 },
  { name: 'Test', success: 48, failed: 2 },
  { name: 'Deploy', success: 50, failed: 0 },
]

export default function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>CI/CD Pipeline Dashboard</h1>
      <p>Build success/failure metrics (sample data)</p>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="success" fill="#22c55e" name="Success" />
            <Bar dataKey="failed" fill="#ef4444" name="Failed" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
