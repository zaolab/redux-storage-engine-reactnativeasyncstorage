'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _asyncStorage = require('@react-native-community/async-storage');

var _asyncStorage2 = _interopRequireDefault(_asyncStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (key) {
    return {
        load: function load() {
            return _asyncStorage2['default'].getItem(key).then(function (jsonState) {
                return JSON.parse(jsonState) || {};
            });
        },
        save: function save(state) {
            var jsonState = JSON.stringify(state);
            return _asyncStorage2['default'].setItem(key, jsonState);
        }
    };
};