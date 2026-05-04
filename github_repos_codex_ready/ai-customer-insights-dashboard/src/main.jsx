import React from 'react';
import { createRoot } from 'react-dom/client';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './style.css';

const data = [
  { name: 'Week 1', value: 35 },
  { name: 'Week 2', value: 48 },
  { name: 'Week 3', value: 64 },
  { name: 'Week 4', value: 82 }
];

function App() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">AI Portfolio Prototype</p>
        <h1>AI Customer Insights Dashboard</h1>
        <p>Analyzes customer feedback, support themes, and behavioral signals to surface actionable product insights.</p>
      </section>
      <section className="grid">
        <div className="card"><span>Sentiment summaries</span></div><div className="card"><span>Theme clustering</span></div><div className="card"><span>Trend snapshots</span></div>
      </section>
      <section className="panel">
        <h2>Performance Snapshot</h2>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
