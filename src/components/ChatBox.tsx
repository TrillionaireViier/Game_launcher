'use client';
import { useState, useRef, useEffect } from 'react';

export default function ChatBox({ friend, onClose }: { friend: string | null, onClose: () => void }) {
  const [messages, setMessages] = useState<{sender: string, text: string}[]>([
    { sender: 'them', text: 'Hey, are we playing today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!friend) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages([...messages, { sender: 'me', text: input }]);
    setInput('');
    
    // Simulate reply
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'them', text: 'Yeah for sure! Let me finish this match.' }]);
    }, 1500);
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '300px',
      height: '400px',
      background: 'var(--bg-card)',
      border: '1px solid var(--border-color, #333)',
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
      zIndex: 1000
    }}>
      {/* Header */}
      <div style={{ 
        padding: '1rem', 
        borderBottom: '1px solid var(--border-color, #333)', 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'var(--bg-panel)',
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }}></div>
          <span style={{ fontWeight: 'bold' }}>{friend}</span>
        </div>
        <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>✕</button>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ 
            alignSelf: msg.sender === 'me' ? 'flex-end' : 'flex-start',
            background: msg.sender === 'me' ? 'var(--accent-primary)' : 'var(--bg-panel)',
            padding: '0.5rem 1rem',
            borderRadius: '16px',
            maxWidth: '80%',
            wordBreak: 'break-word'
          }}>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSend} style={{ padding: '0.5rem', borderTop: '1px solid var(--border-color, #333)' }}>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message ${friend}...`}
          style={{
            width: '100%',
            padding: '0.5rem',
            borderRadius: '20px',
            border: '1px solid var(--border-color, #333)',
            background: 'var(--bg-base)',
            color: 'white',
            outline: 'none'
          }}
        />
      </form>
    </div>
  );
}
