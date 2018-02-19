// 配置文件
const fileCache = require('think-cache-file');
const nunjucks = require('think-view-nunjucks');
const fileSession = require('think-session-file');
const mysql = require('think-model-mysql');
const path = require('path');
const isDev = think.env === 'development';

/**
 * cache adapter config
 * @type {Object}
 */
exports.cache = {
  type: 'file',
  common: {
    timeout: 24 * 60 * 60 * 1000 // millisecond
  },
  file: {
    handle: fileCache,
    cachePath: path.join(think.ROOT_PATH, 'runtime/cache'), // absoulte path is necessarily required
    pathDepth: 1,
    gcInterval: 24 * 60 * 60 * 1000 // gc interval
  }
};

/**
 * model adapter config
 * @type {Object}
 */
// exports.model = {
//   type: 'mysql',
//   common: {
//     logConnect: isDev,
//     logSql: isDev,
//     logger: msg => think.logger.info(msg)
//   },
//   mysql: {
//     handle: mysql,
//     database: '',
//     prefix: 'think_',
//     encoding: 'utf8',
//     host: '127.0.0.1',
//     port: '',
//     user: 'root',
//     password: 'root',
//     dateStrings: true
//   }
// };

//这里把mysql注释掉，换成mongo
exports.model = {
  type: 'mongo', // 默认使用的类型，调用时可以指定参数切换
  common: { // 通用配置
    logConnect: true, // 是否打印数据库连接信息
    logger: msg => think.logger.info(msg) // 打印信息的 logger
  },
  mongo: {
    host: 'localhost',
    port: 27017,
    user: '',
    password: '',
    database: 'wugeek', // 数据库名称
    options: ''
  }
};

/**
 * session adapter config
 * @type {Object}
 */
exports.session = {
  type: 'file',
  common: {
    cookie: {
      name: 'thinkjs'
        // keys: ['werwer', 'werwer'],
        // signed: true
    }
  },
  file: {
    handle: fileSession,
    sessionPath: path.join(think.ROOT_PATH, 'runtime/session')
  }
};

/**
 * view adapter config
 * @type {Object}
 */
exports.view = {
  type: 'nunjucks',
  common: {
    viewPath: path.join(think.ROOT_PATH, 'view'),
    sep: '_',
    extname: '.html'
  },
  nunjucks: {
    handle: nunjucks
  }
};