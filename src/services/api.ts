import axios from 'axios';

export const agentAuthed = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://services.dev.bewater.xyz',
  headers: {
    'Content-Type': 'application/json'
  }
}); 