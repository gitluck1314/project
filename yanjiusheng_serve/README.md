1. 安装依赖cnpm i
2. 运行程序 npm start
3. 修改了四个文件
    - config/extend.js   添加mongodb扩展
    - config/config.js   配置mongodb地址密码啥的
    - controller/user.js 在这里面写接口
    - model/user.js      在这里面写模型，操作数据库
4. controller里面的xxxxAction就是接口名称，后面的Action会省略掉https://thinkjs.org/zh-cn/doc/3.0/controller.html#toc-bfe