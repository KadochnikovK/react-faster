var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HelloWorld = function (_React$Component) {
    _inherits(HelloWorld, _React$Component);

    function HelloWorld() {
        _classCallCheck(this, HelloWorld);

        return _possibleConstructorReturn(this, (HelloWorld.__proto__ || Object.getPrototypeOf(HelloWorld)).apply(this, arguments));
    }

    _createClass(HelloWorld, [{
        key: 'getUrl',
        value: function getUrl() {
            return 'https://vk.com/kadochnikov_k';
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    '\u041C\u043E\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0432 \u0432\u043A:'
                ),
                React.createElement(
                    'a',
                    { href: this.getUrl() },
                    this.getUrl()
                )
            );
        }
    }]);

    return HelloWorld;
}(React.Component);

ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(HelloWorld, { id: '1', title: 'Hi', text: 'Hello World ' }),
    React.createElement(HelloWorld, { id: '2', title: 'Hi All', text: 'Hate You' })
), document.getElementById('content'));