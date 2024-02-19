const bfObject = {
    value: 42,
    gfFunction: function () {
        setTimeout(function () { console.log("Result: ", this.value); }, 1000);
    },
}
bfObject.gfFunction;
console.log(" bfObject.gfFunction ", bfObject.gfFunction());