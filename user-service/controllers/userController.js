exports.register = (req, res) => {
  const { username, password } = req.body;
  res.status(201).json({ message: "User registered successfully" });
};