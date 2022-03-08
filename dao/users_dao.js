/*
 * @Description: 
 * @Version: 1.0.0
 * @Date: 2022-03-06 23:21:52
 * @Author: yzy
 * @LastEditTime: 2022-03-08 22:37:47
 */
 class users_dao extends require('../model/users_mod') {
     static async login(req,resp) {
        let time = new Date()
        console.log(req.body.username)
        let body = req.body;
        let loginData = await this.loginUser(body.username, body.password, body.type)
        console.log(loginData, 'loginData');
        resp.send([loginData, { time: time}])
    }
}
module.exports = users_dao;