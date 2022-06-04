"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = require("./entity/User");

var _Post = require("./entity/Post");

var _dataSource = require("./data-source");

var _Comment = require("./entity/Comment");

// AppDataSource已经是实例了，不是对象了。
_dataSource.AppDataSource.initialize().then( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(dataSource) {
    var manager, u1, p1, c1;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            manager = _dataSource.AppDataSource.manager;
            u1 = new _User.User();
            u1.username = "rongerZhang";
            u1.passwordDigest = "zrj";
            _context.next = 6;
            return manager.save(u1);

          case 6:
            console.log('成功创建user');
            p1 = new _Post.Post();
            p1.title = "我的第一篇文章";
            p1.content = "打的一拳开，免得百拳来";
            p1.author = u1;
            _context.next = 13;
            return manager.save(p1);

          case 13:
            console.log('成功创建post');
            c1 = new _Comment.Comment();
            c1.user = u1;
            c1.post = p1;
            c1.content = "文章很棒！";
            _context.next = 20;
            return manager.save(c1);

          case 20:
            console.log('成功创建comment');

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}(), function (error) {
  return console.log("Cannot connect: ", error.stack ? error.stack : error);
});