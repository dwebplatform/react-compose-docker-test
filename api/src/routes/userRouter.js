
const userRouter = async (req,res)=>{
  const {db} = req.app.locals;
  try{
    const users = await db.select('name','age').from('users');
    return res.json({
      status: 'ok',
      users
    });
  } catch(e) {
    console.log(e)
    return res.status(400).json({
      status:'error'
    });
  }
}

module.exports = {
  userRouter
}