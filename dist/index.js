"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Post = require("./entity/Post");

var _dataSource = require("./data-source");

_dataSource.AppDataSource.initialize().then( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var post, posts;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // console.log("Inserting a new user into the database...")
          // const user = new User()
          // user.firstName = "Timber"
          // user.lastName = "Saw"
          // user.age = 25
          // await AppDataSource.manager.save(user)
          // console.log("Saved a new user with id: " + user.id)
          // console.log("Loading users from the database...")
          // const users = await AppDataSource.manager.find(User)
          // console.log("Loaded users: ", users)
          // console.log("Here you can setup and run express / fastify / any other framework.")
          post = new _Post.Post();
          post.title = "第一篇文章";
          post.content = "那就这样吧，再学下去就不礼貌了！";
          _context.next = 5;
          return _dataSource.AppDataSource.manager.save(post);

        case 5:
          _context.next = 7;
          return _dataSource.AppDataSource.manager.find(_Post.Post);

        case 7:
          posts = _context.sent;
          console.log("Here you can setup and run express / fastify / any other framework.");

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})))["catch"](function (error) {
  return console.log(error);
});