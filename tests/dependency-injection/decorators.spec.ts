
class A {
  public message = "identity: class A";
}

class B {
  public message = "identity: class B";
}

@decoTest
class D {
  static metadata:Array<Function> = [];
  constructor(a: A, b: B) {
  }
}
describe("decorators", function() {
  it("should inject constructor types", function() {
    var d = new D(new A(), new B());
    expect(D.metadata.length).toBe(2);
  });
});


function decoTest<T>(target: T, ...rest) {
  target["metadata"].push(A, B); // how do i get this based on constructor ???
  return target;
}
