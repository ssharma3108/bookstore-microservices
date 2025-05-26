exports.login = (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    res.json({ token: "mocked-jwt-token" });
  } else {
    res.status(400).json({ error: "Username and password required" });
  }
};