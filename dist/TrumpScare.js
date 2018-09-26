var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TrumpScare.css';

var TrumpScare = function (_Component) {
  _inherits(TrumpScare, _Component);

  function TrumpScare() {
    _classCallCheck(this, TrumpScare);

    return _possibleConstructorReturn(this, (TrumpScare.__proto__ || Object.getPrototypeOf(TrumpScare)).apply(this, arguments));
  }

  _createClass(TrumpScare, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.trigger === 'reload') {
        this.trumpScareOnReload();
      } else if (this.props.trigger === 'scroll') {
        this.trumpScareOnScroll();
      } else if (this.props.trigger === 'random') {
        this.trumpScareRandomly();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'trumpScareOnReload',
    value: function trumpScareOnReload() {
      if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD) {
        this.trumpScare();
      }
    }
  }, {
    key: 'trumpScareOnScroll',
    value: function trumpScareOnScroll() {
      var _this2 = this;

      window.onscroll = function (e) {
        return _this2.trumpScare();
      };
    }
  }, {
    key: 'trumpScareRandomly',
    value: function trumpScareRandomly() {
      setInterval(this.trumpScare.bind(this), 7000);
    }
  }, {
    key: 'trumpScare',
    value: function trumpScare() {
      var _this3 = this;

      // Only trump-scare sometimes.
      var threshold = this.props.trigger === 'scroll' ? 95 : 75;
      if (Math.round(Math.random() * 100) <= threshold) return;

      this.image.style.display = 'block';
      setTimeout(function () {
        return _this3.image.style.display = 'none';
      }, 50);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return React.createElement('img', {
        className: 'trump-scare',
        ref: function ref(e) {
          return _this4.image = e;
        },
        src: this.props.image,
        alt: ''
      });
    }
  }]);

  return TrumpScare;
}(Component);

TrumpScare.propTypes = {
  image: PropTypes.string,
  trigger: PropTypes.oneOf(['scroll', 'reload', 'random'])
};
TrumpScare.defaultProps = {
  image: 'data:image/jpeg;base64,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',
  trigger: 'reload'
};


export default TrumpScare;