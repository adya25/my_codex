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
        <h1>AI Document Intelligence Tool</h1>
        <p>Extracts, summarizes, and organizes key information from business documents for faster review and decision-making.</p>
      </section>
      <section className="grid">
        <div className="card"><span>Document summary</span></div><div className="card"><span>Key term extraction</span></div><div className="card"><span>Action item detection</span></div>
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
