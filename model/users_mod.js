class users_mod extends require("./model") {
  static loginUser(username, password, type) {
    type = Number(type);
    return new Promise((resolve, reject) => {
      try {
        let sql =
          "select * from user where binary username='"+username +"' and password='" +password +"'and type = " +type;
        console.log(sql);
        this.queruy(sql)
          .then((result) => {
            console.log(result, 'result');
            resolve(result);
          })
          .catch((err) => {
            reject(err, "登录失败");
          });
      } catch (err) {
          console.log(err)
      }
    });
  }
}
module.exports = users_mod;
