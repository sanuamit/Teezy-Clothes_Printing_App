// server/controllers/authController.js
export const registerUser = (req, res) => {
  const { username, email, password } = req.body;

  // Simulated logic
  console.log("📥 Register data:", req.body);

  res.status(201).json({ message: "User registered successfully" });
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;

  // Simulated logic
  console.log("📥 Login data:", req.body);

  res.status(200).json({ message: "User logged in successfully" });
};
