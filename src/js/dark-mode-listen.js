window.addEventListener("load", () => { DarkModeListen(); });

const DarkModeListen = () => {
  if (localStorage.getItem("darkSwitch")) { //comprueva si hay datos
    document.body.setAttribute("data-theme", "dark");
  } else {
    document.body.removeAttribute("data-theme");
  }
}