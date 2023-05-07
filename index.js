const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/api/v1/test-data', (req, res) => {
  const user = "Muhammad Arbaz Dogar";
  return res.status(200).json({
    success: true,
    message:
      'This a test route because I deploy it on cyclic server just for testing.',
    data: user,
  });
});

app.listen(PORT, () => console.log(`Server Is Running On ${PORT}`));
