const express = require('express');
const { GPTx } = require('@ruingl/gptx');

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

// Initialize GPTx
const gptx = new GPTx({ provider: 'Nextway', model: 'gemini-pro' });

// Define a route to handle API requests
app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;

  try {
    // Use the GPTx instance to generate a response
    const response = await gptx.ChatCompletion(messages);
    res.json(response);  // Send the GPTx response as JSON
  } catch (error) {
    console.error('Error with GPTx:', error);
    res.status(500).json({ error: 'Failed to process request' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
