const users = [];

const registerUser = async (req, res) => {
    const { username, password } = req.body;
    try{
        const user = { username, password };
        if (users.find((u) => u.username === username)) {
            return res.status(400).json({ message: 'User already exists'});
        }
        users.push(user);
        res.status(201).json({ message: 'User registered, hello ' + username}, user);
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: 'Internal server error'});
    }
}

const loginUser = async (req, res) => {
    const { username, password } = req.body;

  try {
    const user = users.find(user => user.username === username&& user.password === password);
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    res.json({ message: 'Login successful, hello' + username, user });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
    registerUser,
    loginUser
}