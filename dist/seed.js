"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Post = require("./entity/Post");

var _dataSource = require("./data-source");

// AppDataSource已经是实例了，不是对象了。
_dataSource.AppDataSource.initialize().then( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(dataSource) {
    var mockData;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mockData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (item) {
              return new _Post.Post({
                title: "\u7B2C".concat(item, "\u7BC7\u6587\u7AE0"),
                content: '那就这样吧，再学下去就不礼貌了！'
              });
            });
            console.log(mockData, 'mockData');
            _context.next = 4;
            return _dataSource.AppDataSource.manager.save(mockData);

          case 4:
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