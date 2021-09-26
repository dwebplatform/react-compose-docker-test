const { fetch } = require('../utils/node-fetch');
const authUri = process.env.AUTH_URI;
const userInfo = async (req, res) => {

  const response = await fetch(`${authUri}/current-user`);
  const data = await response.json();

  return res.json({
    status: 'ok',
    msg: 'test',
    data
  });
}
module.exports ={userInfo};