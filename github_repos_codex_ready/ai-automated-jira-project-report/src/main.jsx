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
        <h1>AI Automated Jira Project Report</h1>
        <p>Reviews completed Jira user stories daily, estimates project completion, summarizes status updates, and highlights remaining work and risks.</p>
      </section>
      <section className="grid">
        <div className="card"><span>Daily story completion review</span></div><div className="card"><span>Completion forecasting</span></div><div className="card"><span>Status summaries for stakeholders</span></div>
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
