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
var ConcreteChair = /** @class */ (function () {
    function ConcreteChair() {
        this.chairType = '';
    }
    return ConcreteChair;
}());
var ConcreteSmallChair = /** @class */ (function (_super) {
    __extends(ConcreteSmallChair, _super);
    function ConcreteSmallChair() {
        var _this = _super.call(this) || this;
        _this.chairType = "Small Chair";
        return _this;
    }
    return ConcreteSmallChair;
}(ConcreteChair));
var ConcreteMediumChair = /** @class */ (function (_super) {
    __extends(ConcreteMediumChair, _super);
    function ConcreteMediumChair() {
        var _this = _super.call(this) || this;
        _this.chairType = "Medium Chair";
        return _this;
    }
    return ConcreteMediumChair;
}(ConcreteChair));
var ConcreteLargeChair = /** @class */ (function (_super) {
    __extends(ConcreteLargeChair, _super);
    function ConcreteLargeChair() {
        var _this = _super.call(this) || this;
        _this.chairType = "Large Chair";
        return _this;
    }
    return ConcreteLargeChair;
}(ConcreteChair));
var ChairFactory = /** @class */ (function () {
    function ChairFactory() {
    }
    ChairFactory.createChair = function (chair) {
        switch (chair) {
            case 'Create Small':
                return new ConcreteSmallChair();
            case 'Create Medium':
                return new ConcreteMediumChair();
            case 'Create Large':
                return new ConcreteLargeChair();
            default:
                return new ConcreteSmallChair();
        }
    };
    return ChairFactory;
}());
var myChair = ChairFactory.createChair(process.argv[2]);
console.log(myChair.chairType);
