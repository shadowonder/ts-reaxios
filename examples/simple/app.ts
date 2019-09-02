import myaxios from "../../src/index"

myaxios({
  method:"get",
  url:"/simple/get",
  params:{
    a:1,
    b:2
  }
});
