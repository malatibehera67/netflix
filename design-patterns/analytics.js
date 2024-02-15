async function analytics(event) {
  let items = [];
  let res = await stub(event);
  console.log(res);
}
function stub(event) {
  let count = 0;
  return (function () {
    count++;
    const res = new Promise((res, rej) => {
      setTimeout(() => {
        if (count % 10 === 0) {
          return "erro";
        } else {
          return "success";
        }
      }, 500);
    });
  })();
}

analytics("1");
analytics("2");
analytics("3");
analytics("4");
analytics("5");
analytics("6");
analytics("7");
analytics("8");
analytics("9");
analytics("10");
analytics("11");
