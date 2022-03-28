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
  fetch(name)
    .then((response) => response.text())
    .then((data) => (document.getElementById("arti").innerHTML = data))
    .catch(() => (document.getElementById("arti").innerHTML = "Error"));
}

if (location.hash) {
  getText("list/" + location.hash.substring(2));
} else {
  getText("list/welcome");
}
