module ParameterDecorators {
  class A {
    static typeName:string = "type: class A";
    public instanceTypeName = "instance: class A";
  }

  class B {
    static typeName:string = "type: class B";
    public instanceTypeName = "instance: class B";
  }

  @inject(A, B, "some key")
  class C {
    static injectMe: Array<any> = [];
    constructor(a: A, b: B) {
    }
  }

  function inject(...rest) {
    return function(target): void {
      target["inject"] = rest;
    }
  }

  describe("decorators", function() {
    it("should inject dependency-injection keys", function() {
      var c = new C(new A(), new B());
      console.log("injectMe:");
      for (let parm of C.injectMe) {
        if (typeof(parm) === "function") {
          console.log("\t" + parm["typeName"]);
        } else {
          console.log("\t" + parm)
        }
      }
    });
  });
}
