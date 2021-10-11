"use strict";
// @Component
// @Selector
// @useState("")
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// -------------- Factory -------------- //
function Logger(prefix) {
    return function (target) {
        console.log(prefix + " - " + target);
    };
}
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo = __decorate([
        Logger("hello")
    ], Foo);
    return Foo;
}());
// -------------- Class decorator -------------- //
function setAPIVersion(apiVersion) {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.version = apiVersion;
                return _this;
            }
            return class_1;
        }(constructor));
    };
}
var API = /** @class */ (function () {
    function API() {
    }
    API = __decorate([
        setAPIVersion("2.0.0")
    ], API);
    return API;
}()); //decorator - anotar a versão da API
console.log(new API());
// -------------- Property decorator -------------- //
function minLength(length) {
    return function (target, key) {
        var val = target[key];
        var getter = function () { return val; };
        var setter = function (value) {
            if (value.length < length) {
                console.log("Error: voc\u00EA n\u00E3o pode criar " + key + " menor que " + length);
            }
            else {
                val = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}
var Movie = /** @class */ (function () {
    function Movie(t) {
        this.title = t;
    }
    __decorate([
        minLength(50)
    ], Movie.prototype, "title", void 0);
    return Movie;
}());
var movie = new Movie("Interstellar");
console.log(movie.title);
// -------------- Method decorator -------------- //
function delay(ms) {
    return function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Esperando " + ms + "...");
            setTimeout(function () {
                originalMethod.apply(_this, args);
            }, ms);
            return descriptor;
        };
    };
}
var Greeter = /** @class */ (function () {
    function Greeter(g) {
        this.greeting = g;
    }
    Greeter.prototype.greet = function () {
        console.log("Hello! " + this.greeting);
    };
    __decorate([
        delay(2000)
    ], Greeter.prototype, "greet", null);
    return Greeter;
}());
var pessoa = new Greeter("Pessoa!");
pessoa.greet();
