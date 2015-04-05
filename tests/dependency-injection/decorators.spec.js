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
var D = (function () {
    function D(a, b) {
    }
    D.metadata = [];
    D = __decorate([decoTest], D);
    return D;
})();
describe("decorators", function () {
    it("should inject constructor types", function () {
        var d = new D(new A(), new B());
        expect(D.metadata.length).toBe(2);
    });
});
function decoTest(target) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    target["metadata"].push(A, B); // how do i get this based on constructor ???
    return target;
}
