'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
   // in browser and metamask installed 
   web3 = new _web2.default(window.web3.currentProvider);
} else {
   var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/d6ee36fd757d49268f3a09d0b6ba3332');
   web3 = new _web2.default(provider);
}
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aFxcd2ViMy5qcyJdLCJuYW1lcyI6WyJXZWIzIiwid2ViMyIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7OztBQUNBLElBQUksWUFBSjtBQUNBLElBQUcsT0FBTyxBQUFQLFdBQWlCLEFBQWpCLGVBQWdDLE9BQU8sT0FBTyxBQUFkLFNBQXVCLEFBQTFELGFBQ0EsQUFDSTtBQUNIO1VBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDQTtBQUpELE9BS0ksQUFDRDtPQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUFnQyxBQUFoQyxBQUFqQixBQUNBO1VBQU8sQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBUCxBQUNGO0FBQ0Q7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0hQL0RvY3VtZW50cy9raWNrc3RhcnQifQ==