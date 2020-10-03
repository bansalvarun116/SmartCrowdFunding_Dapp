'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _factory = require('./build/factory.json');

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_factory2.default.interface), '0xc13098af4F3F254a742A5234dcEdA850A4BB952A');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aFxcZmFjdG9yeS5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiZmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFvQixBQUFwQjs7Ozs7O0FBRUEsSUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUFzQixLQUFLLEFBQUwsTUFBVyxrQkFBUSxBQUFuQixBQUF0QixZQUFvRCxBQUFwRCxBQUFqQixBQUVBOztrQkFBZSxBQUFmIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvSFAvRG9jdW1lbnRzL2tpY2tzdGFydCJ9