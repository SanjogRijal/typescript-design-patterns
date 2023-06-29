// The Factory Pattern
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ConcreteProduct = /** @class */ (function () {
    function ConcreteProduct() {
        this.name = '';
    }
    return ConcreteProduct;
}());
var ConcreteProductA = /** @class */ (function (_super) {
    __extends(ConcreteProductA, _super);
    function ConcreteProductA() {
        var _this = _super.call(this) || this;
        _this.name = 'Concrete Product A';
        return _this;
    }
    return ConcreteProductA;
}(ConcreteProduct));
var ConcreteProductB = /** @class */ (function (_super) {
    __extends(ConcreteProductB, _super);
    function ConcreteProductB() {
        var _this = _super.call(this) || this;
        _this.name = 'Concrete Product B';
        return _this;
    }
    return ConcreteProductB;
}(ConcreteProduct));
var ConcreteProductC = /** @class */ (function (_super) {
    __extends(ConcreteProductC, _super);
    function ConcreteProductC() {
        var _this = _super.call(this) || this;
        _this.name = 'Concrete Product C';
        return _this;
    }
    return ConcreteProductC;
}(ConcreteProduct));
var Creator = /** @class */ (function () {
    function Creator() {
    }
    Creator.createObject = function (property) {
        switch (property) {
            case 'Create A':
                return new ConcreteProductA();
            case 'Create B':
                return new ConcreteProductB();
            case 'Create C':
                return new ConcreteProductC();
            default:
                return new ConcreteProductA();
        }
    };
    return Creator;
}());
//THE DEVELOPER
var PRODUCT = Creator.createObject('Create B');
console.log(PRODUCT.name);
