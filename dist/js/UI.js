let main = document.querySelector("main");

class UI {
  clearProfile = () => {
    main.style.display = "none";
  };

  setProfile = profile => {
    main.className = "show";
    let avatar = document.querySelector("div#image");
    let login = document.querySelector("p#name");
    let websiteUrl = document.querySelector("a#website");
    let company = document.querySelector("div#company p");
    let location = document.querySelector("div#location p");
    let createdAt = document.querySelector("div#joined p");
    let repos = document.querySelector("div#repos");
    let user = profile.data.user;
    // Populate profile details
    avatar.style.backgroundImage = `url(${user.avatarUrl})`;
    login.innerHTML = user.login;
    websiteUrl.innerHTML = user.websiteUrl;
    company.innerHTML = user.company;
    location.innerHTML = user.location;
    createdAt.innerHTML = user.createdAt;
    // Populate repo information
    let content = "<h2>Latest Repos</h2>";
    user.repositories.edges.forEach(edge => {
      content += `
      <div class="repo">
        <a href="${edge.node.url}" target="_blank">${edge.node.name}</a>
      </div>`;
    });
    repos.innerHTML = content;
  };
}
