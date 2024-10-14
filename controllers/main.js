const login = async (req, res) => {
  res.send("login");
};

const dashboard = async (req, res) => {
  res.status(200).json({ msg: "Dashboard", secret: "my current secret" });
};

module.exports = {
  login,
  dashboard,
};
