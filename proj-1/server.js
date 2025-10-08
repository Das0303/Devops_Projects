## under app folder create server.js
_____________________________________

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello from Docker WebServer!'));
app.get('/health', (req, res) => res.send('OK'));

process.on('SIGTERM', () => {
  console.log('SIGTERM received — shutting down gracefully');
  server.close(() => { process.exit(0); });
});

const server = app.listen(PORT, () => console.log('listening', PORT));
