inputDom = document.querySelector("#search input");
subheading = document.querySelector("header h2#subheading");

let http = new EasyHttp();
let ui = new UI();

inputDom.addEventListener("keyup", e => {
  let input = e.target.value;
  if (input == "") {
    ui.clearProfile();
    return;
  }
  http
    .getProfile("https://api.github.com/graphql", input)
    .then(profile => {
      ui.setProfile(profile);
    })
    .catch(err => {
      console.log(err);
    });
});

let resize = () => {
  if (window.innerWidth < 500) {
    subheading.innerHTML = "Fetch a user profile plus repos";
    inputDom.className = "small-mobile";
  } else {
    subheading.innerHTML = "Enter a username to fetch a user profile and repos";
    inputDom.className = "";
  }
};
resize();
window.addEventListener("resize", resize);
