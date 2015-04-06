var __decorate = this.__decorate || function (decorators, target, key, value) {
    var kind = typeof (arguments.length == 2 ? value = target : value);
    for (var i = decorators.length - 1; i >= 0; --i) {
        var decorator = decorators[i];
        switch (kind) {
            case "function": value = decorator(value) || value; break;
            case "number": decorator(target, key, value); break;
            case "undefined": decorator(target, key); break;
            case "object": value = decorator(target, key, value) || value; break;
        }
    }
    return value;
};
var ParameterDecorators;
(function (ParameterDecorators) {
    var A = (function () {
        function A() {
            this.instanceTypeName = "instance: class A";
        }
        A.typeName = "type: class A";
        return A;
    })();
    var B = (function () {
        function B() {
            this.instanceTypeName = "instance: class B";
        }
        B.typeName = "type: class B";
        return B;
    })();
    var C = (function () {
        function C(a, b) {
        }
        C.injectMe = [];
        C = __decorate([injectTest(A, B, "some key")], C);
        return C;
    })();
    function injectTest() {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i - 0] = arguments[_i];
        }
        return function (target) {
            target["injectMe"] = rest;
        };
    }
    describe("decorators", function () {
        it("should inject dependency-injection keys", function () {
            var c = new C(new A(), new B());
            console.log("injectMe:");
            for (var _i = 0, _a = C.injectMe; _i < _a.length; _i++) {
                var parm = _a[_i];
                if (typeof (parm) === "function") {
                    console.log("\t" + parm["typeName"]);
                }
                else {
                    console.log("\t" + parm);
                }
            }
        });
    });
})(ParameterDecorators || (ParameterDecorators = {}));
