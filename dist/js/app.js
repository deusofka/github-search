inputDom = document.querySelector("#search input");
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
