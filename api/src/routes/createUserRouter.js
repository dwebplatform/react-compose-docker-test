const userCreateRouter = async (req,res)=>{
  const { db } = req.app.locals;
  const { name, age} = req.body;
  const newUserData = {
    name,
    age
  }
  try {
    const user = await db('users').insert(newUserData);
    return res.json({
      status:'ok',
      user
    });
  } catch(e){
    return res.status(400).json({
      status:'error',
      msg:'Не удалось создать нового пользователя'
    });
  }

}

module.exports ={userCreateRouter}