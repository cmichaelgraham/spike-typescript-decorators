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
    inject(A, B, "some key");
    var C = (function () {
        function C(a, b) {
        }
        C.injectMe = [];
        return C;
    })();
    function inject() {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i - 0] = arguments[_i];
        }
        return function (target) {
            target["inject"] = rest;
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
