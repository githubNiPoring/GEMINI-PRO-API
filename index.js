const { GPTx } = require('@ruingl/gptx'); 
const gptx = new GPTx({ provider: 'Nextway', model: 'gemini-pro' });

const main = async () => {
  const messages = [
    { role: 'user', content: 'hello!' }
  ];

  const response = await gptx.ChatCompletion(messages);
  console.log(response);
};

main();