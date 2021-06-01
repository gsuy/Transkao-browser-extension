window.onload = function () {
  var button = document.getElementById("ss");
  button.onclick = test();

  function test() {
    console.log("test bro!");
    // var fs = require("fs");
    var txtFile = "/test.txt";
    var file = new File(txtFile, "write");
    var str = JSON.stringify(JsonExport);

    log("opening file...");
    file.open();
    log("writing file..");
    file.writeline(str);
    file.close();
    // let jsonData = { sss: "aaa" };
    // fs.writeFile("test.txt", jsonData, function (err) {
    //   if (err) {
    //     console.log(err);
    //   }
    // });
  }
};
