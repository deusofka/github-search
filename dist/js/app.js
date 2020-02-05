inputDom = document.querySelector("#search input");

inputDom.addEventListener("keyup", e => {
  new EasyHttp()
    .getProfile("https://api.github.com/graphql", e.target.value)
    .then(profile => {
      new UI().setProfile(profile);
    })
    .catch(err => {
      console.log(err);
    });
});
