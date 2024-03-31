const register = async (req, res) => {
  res.send("Welcome from the register route");
};

const login = async (req, res) => {
  res.send("Welcome from the login route");
};

const updateUser = async (req, res) => {
  res.send("Welcome from the update user route");
};

export { register, login, updateUser };
