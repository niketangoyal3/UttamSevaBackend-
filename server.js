const app = require('./app');
const connectDB = require('./config/dbConfig');

const PORT = process.env.PORT || 5000;

// Connect to Database
// connectDB();

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
