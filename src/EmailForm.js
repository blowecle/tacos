import React, { useState } from 'react'

export default function EmailForm() {
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
      };

      return (
        <form onSubmit={handleSubmit} netlify>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Your email"
            required
          />
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Your message"
            required
          />
          <button type="submit">Send</button>
        </form>
      );
}
