export const signup = async (req, res) => {
  try {
    const { username, fullName, password, confirmPassword } = req.body;
  } catch (error) {}
};
export const login = (req, res) => {
  res.send("Login Routes");
};
export const logout = (req, res) => {
  res.send("Logout Routes");
};
