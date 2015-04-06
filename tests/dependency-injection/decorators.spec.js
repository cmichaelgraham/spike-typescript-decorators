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
var decorators;
(function (decorators) {
    var A = (function () {
        function A() {
            this.message = "identity: class A";
        }
        return A;
    })();
    var B = (function () {
        function B() {
            this.message = "identity: class B";
        }
        return B;
    })();
    var C = (function () {
        function C(a, b) {
        }
        C.metadata = [];
        C = __decorate([decoTest], C);
        return C;
    })();
    function decoTest(target) {
        target["metadata"].push(A, B); // how do i get this based on constructor ???
        return target;
    }
    describe("decorators", function () {
        it("should inject constructor types", function () {
            var c = new C(new A(), new B());
            expect(C.metadata.length).toBe(2);
        });
    });
})(decorators || (decorators = {}));
