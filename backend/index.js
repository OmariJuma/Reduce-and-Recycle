const app = require("express")();
require("dotenv").config();
app.listen(process.env.PORT || 8000, () => console.log(`Server running on port ${process.env.PORT||8000}`));