fetch("lists")
  .then((response) => response.text())
  .then((data) => {
    let wbList = data.split(",");
    let content = "";
    for (let i = 0; i < wbList.length; i++) {
      content += `<li><a href="#!${wbList[i]}" onclick="getText('list/${
        wbList[i]
      }')">${wbList[i].toUpperCase()}</a></li>`;
    }
    document.getElementById("list").innerHTML = content;
  })
  .catch(() => (document.getElementById("list").innerHTML = "Error"));

function getText(name) {
  fetch(name) //name = url : 자료가 있는 위치 또는 주소
    .then((response) => response.text()) //response = 자료내용이 있는 객체를 변수로 지정. text() method를 이용하여 텍스트로 만든 후 이 값을 리턴해줌.
    .then((data) => (document.getElementById("arti").innerHTML = data)) // data = 위에서 리턴한 값을 변수로 지정. 문서에 랜더함.
    .catch(() => (document.getElementById("arti").innerHTML = "Error"));
}

if (location.hash) {
  getText("list/" + location.hash.substring(2));
} else {
  getText("list/welcome");
}
