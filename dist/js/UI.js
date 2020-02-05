let main = document.querySelector("main");

class UI {
  clearProfile = () => {
    main.className = "hide";
  };

  setProfile = profile => {
    console.log(profile);
    main.className = "show";
    let avatar = document.querySelector("div#image");
    let login = document.querySelector("p#name");
    let websiteUrl = document.querySelector("a#website");
    let company = document.querySelector("div#company p");
    let location = document.querySelector("div#location p");
    let createdAt = document.querySelector("div#joined p");
    let repos = document.querySelector("div#repos");
    // Populate profile details
    let user = profile.profile;
    avatar.style.backgroundImage = `url(${user.avatar_url})`;
    login.innerHTML = user.login;
    websiteUrl.innerHTML = user.blog;
    company.innerHTML = user.company;
    location.innerHTML = user.location;
    createdAt.innerHTML = user.created_at;
    // Populate repo information
    let content = "<h2>Latest Repos</h2>";
    profile.repos.forEach(repo => {
      content += `
      <div class="repo">
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
      </div>`;
    });
    repos.innerHTML = content;
  };
}
