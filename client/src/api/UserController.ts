export class UserController {
  

  static async getAllUsers(): Promise<any>{
    try{
      const response = await fetch('/api/users');
      const data = await response.json();
      return data;
    }  catch (e:any){
      return {
        status:'error',
        msg: e.message
      };
    } 
  }
  static async  getUsers(): Promise<any>{ 
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data = await response.json();
    return data;
  }

}