const singleton = (function () {
  let instance;
  function createInstance() {
    instance = new Object("I am object");
    return instance;
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const obj1 = singleton.getInstance();
const obj2 = singleton.getInstance();
console.log("obj1 obj2 ", obj1, obj2);
console.log(" createInstance ", singleton);
