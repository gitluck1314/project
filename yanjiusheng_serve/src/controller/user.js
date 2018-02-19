const Base = require('./base.js');

module.exports = class extends Base {
  //添加一个用户的接口/user/addUser
  //async 和 await代表一个异步操作
  async addUserAction() {
    const user = this.post(); //获取post的数据
    const userDB = this.mongo('user'); //实例化一个用户模型，实际上这个文件在model里的user.js里。这两个文件名称一定要一样
    const data = await userDB.addUser(user); //调用model里的user.js里的addUser函数
    this.success(data); //直接返回数据
    //也可以简写成下面的一句话
    // this.success(await this.mongo('user').addUser(this.post()));
  };
  /**
   * 获取用户根据ID
   * /user/getUser?userID=xxxxxx
   */
  async getUserAction() {
      this.success(await this.mongo('user').getUser(this.get('userID')));
    };
    /**
     * 获取所有用户
     * /user/getUsers
     */
  async getUsersAction() {
    this.success(await this.mongo('user').getUsers());
  };
  /**
   * 删除一个用户
   * /user/deleteUser?userID=xxxxxx
   */
  async deleteUserAction() {
    this.success(await this.mongo('user').deleteUser(this.get('userID')));
  };
  /**
   * 更新用户
   * /user/updateUser?userID=xxxxx
   */
  async updateUserAction() {
    this.success(await this.mongo('user').updateUser(this.get('userID'), this.post()))
  }
};