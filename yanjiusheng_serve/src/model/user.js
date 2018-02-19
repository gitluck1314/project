module.exports = class extends think.Mongo {
  //添加用户的函数，被controller调用
  async addUser(user) {
    const data = await this.model('user').add(user); //这一步，实际操作数据库。this.model('user)的意思就是拿到数据库里的user表，然后add(user).就是往用户表加一条数据
    return data
  };
  //获取一个
  async getUser(userID) {
    //获取一条数据，用find()
    //多条数据用select()
    return await this.model('user').where({ _id: userID }).find();
  };
  //获取所有
  async getUsers() {
    return await this.model('user').select();
  };
  //删除一个用户
  async deleteUser(userID) {
    return await this.model('user').where({ _id: userID }).delete();
  };
  //更新一个用户
  async updateUser(userID, user) {
    return await this.model('user').where({ _id: userID }).update(user)
  }
}