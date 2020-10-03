'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _factory = require('../eth/factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\HP\\Documents\\kickstart\\pages\\index.js?entry';

var campaginIndex = function (_Component) {
    (0, _inherits3.default)(campaginIndex, _Component);

    function campaginIndex() {
        (0, _classCallCheck3.default)(this, campaginIndex);

        return (0, _possibleConstructorReturn3.default)(this, (campaginIndex.__proto__ || (0, _getPrototypeOf2.default)(campaginIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(campaginIndex, [{
        key: 'renderCampaigns',
        value: function renderCampaigns() {
            var items = this.props.campaigns.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 15
                        }
                    }, 'View Campaigns'),
                    fluid: true
                };
            });
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            });
        }

        /* async componentDidMount(){
               const campaigns = await factory.methods.get_deployed_campagins().call();
               console.log(campaigns);
           }
           */

    }, {
        key: 'render',
        value: function render() {
            //return <div>{this.props.campaigns[0]} </div>;
            return _react2.default.createElement('layout', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, this.renderCampaigns(), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, 'OPEN CAMPAIGNS'), _react2.default.createElement(_semanticUiReact.Button, {
                content: 'create campaign',
                icon: 'add circle',
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            })));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.get_deployed_campaigns().call();

                            case 2:
                                campaigns = _context.sent;
                                return _context.abrupt('return', { campaigns: campaigns });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return campaginIndex;
}(_react.Component);

exports.default = campaginIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJDYXJkIiwiQnV0dG9uIiwibGF5b3V0IiwiY2FtcGFnaW5JbmRleCIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckNhbXBhaWducyIsIm1ldGhvZHMiLCJnZXRfZGVwbG95ZWRfY2FtcGFpZ25zIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFLOztBQUNkLEFBQU8sQUFBWTs7Ozs7Ozs7SSxBQUNiOzs7Ozs7Ozs7OzswQ0FLZSxBQUNiO2dCQUFNLGFBQU0sQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLG1CQUFTLEFBQzFDOzs0QkFBTyxBQUNLLEFBQ1I7aURBQVksY0FBQTs7c0NBQUE7d0NBQUE7QUFBQTtBQUFBLHFCQUFBLEVBRlQsQUFFUyxBQUNaOzJCQUhKLEFBQU8sQUFHRyxBQUViO0FBTFUsQUFDSDtBQUZSLEFBQVksQUFPWixhQVBZO2lEQU9MLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7QUFHZDs7Ozs7Ozs7OztpQ0FLVyxBQUNKO0FBQ0E7bUNBQ0EsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFNO0FBQU47QUFBQSxvQkFBQSxBQUFNLEFBQUssQUFDUCxtQ0FBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsbUNBQUEsQUFBQzt5QkFBRCxBQUNTLEFBQ1I7c0JBRkQsQUFFTSxBQUNMO3lCQUhELEFBR1U7OzhCQUhWO2dDQUpSLEFBQ0EsQUFDSSxBQUVJLEFBU1g7QUFUVztBQUNDOzs7Ozs7Ozs7Ozs7dUNBMUJlLGtCQUFBLEFBQVEsUUFBUixBQUFnQix5QixBQUFoQixBQUF5Qzs7aUNBQTNEO0E7aUVBQ0MsRUFBQyxXLEFBQUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQ2YsQSxBQXhDNEI7O2tCQXdDNUIsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9IUC9Eb2N1bWVudHMva2lja3N0YXJ0In0=