module decorators {
  class A {
    public message = "identity: class A";
  }

  class B {
    public message = "identity: class B";
  }

  @decoTest
  class C {
    static metadata:Array<Function> = [];
    constructor(a: A, b: B) {
    }
  }

  function decoTest<T>(target: T) {
    target["metadata"].push(A, B); // how do i get this based on constructor ???
    return target;
  }

  describe("decorators", function() {
    it("should inject constructor types", function() {
      var c = new C(new A(), new B());
      expect(C.metadata.length).toBe(2);
    });
  });
}
