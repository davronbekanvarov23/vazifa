const heading = document.querySelector("h1");
const date = document.querySelector("h2");
const body = document.querySelector("body");

setInterval(() => {
  heading.textContent = new Date().toLocaleTimeString();
}, 1000);

let bungungiSan = new Date();
let yil = bungungiSan.getFullYear();
let oy = bungungiSan.getMonth() + 1;
let kun = bungungiSan.getDate();

let sanStr = kun + "." + oy + "." + yil;

date.textContent = sanStr;

heading.style.margin = "auto";
date.style.margin = "auto";
heading.style.fontSize = "100px  ";
date.style.fontSize = "50px  ";
heading.style.width = "100px";
date.style.width = "100px";
// body.style.backgroundImage = "";
let hozirgiVaqt = new Date();

let soat = hozirgiVaqt.getHours();
let minut = hozirgiVaqt.getMinutes();
if (soat <= 23 && minut <= 59 && soat >= 22) {
  body.style.background =
    "url(https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat  center  ";
  heading.style.color = "white";
  date.style.color = "springgreen";
} else if (soat >= 18) {
  body.style.background =
    "url(https://media.istockphoto.com/id/1556257202/photo/an-agricultural-field-of-wheat-ready-to-be-harvested-by-the-farmer-during-a-sunset-on-a-warm.jpg?s=2048x2048&w=is&k=20&c=xBddWwCSPIbF0K2s494HEgfKTPBcBMxX69kyJYMja48=) no-repeat  center  ";
  heading.style.color = "white";
  date.style.color = "springgreen";
} else if (soat >= 16) {
  body.style.background =
    "url(https://media.istockphoto.com/id/1556257202/photo/an-agricultural-field-of-wheat-ready-to-be-harvested-by-the-farmer-during-a-sunset-on-a-warm.jpg?s=2048x2048&w=is&k=20&c=xBddWwCSPIbF0K2s494HEgfKTPBcBMxX69kyJYMja48=) no-repeat  center  ";
  heading.style.color = "white";
  date.style.color = "springgreen";
} else if (soat >= 14) {
  body.style.background =
    "url(https://plus.unsplash.com/premium_photo-1678559034015-a487448e473b?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat  center  ";
  heading.style.color = "green";
  date.style.color = "orange";
} else if (soat >= 12) {
  body.style.background =
    "url(https://media.istockphoto.com/id/934187398/vector/sunny-background-blue-sky-clouds-and-sun.jpg?s=2048x2048&w=is&k=20&c=BAhtqHYxEmg2Is_eHGBM4svhjKZkKwQfzZY8XIbFg4s=)no-repeat  center  ";
  heading.style.color = "yellow";
  date.style.color = "yellow";
} else if (soat >= 10) {
  body.style.background =
    "url(https://images.unsplash.com/photo-1504064860048-974c8788c612?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  ";
  heading.style.color = "orchid";
  date.style.color = "salmon";
} else if (soat >= 8) {
  body.style.background =
    "url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat  center  ";
  heading.style.color = "lightgreen";
  date.style.color = "azure";
} else if (soat >= 6) {
  body.style.background =
    "url(https://images.unsplash.com/photo-1470803233534-acd0cc85f275?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat  center  ";
  heading.style.color = "yellow";
  date.style.color = "red";
} else {
  body.style.background =
    "url(https://media.istockphoto.com/id/1293492392/photo/lanterns-on-the-street-of-the-night-city-in-the-fog.jpg?s=1024x1024&w=is&k=20&c=a4Wvr7dIksww_w6YFLOi3eZvVrmELM6Vu6RMZGcFlmE=) no-repeat  center  ";
  heading.style.color = "springgreen";
  date.style.color = "springgreen";
}
