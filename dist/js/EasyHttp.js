let client_id = "9e687aeb019288c2780d";
let client_secret = "a763ee15172003002f3b26f5124d74b05e12e2b8";
let repos_count = 6;
let repos_sort = "created: asc";

handleError = res => {
  if (!res.ok) throw new Error("Error occured" + res.status);
};

class EasyHttp {
  getProfile = async (name) => {
    let profileRes = await fetch(
      `https://api.github.com/users/${name}?client_id=${client_id}&client_secret=${client_secret}`
    );
    handleError(profileRes);
    let profile = await profileRes.json();
    let reposRes = await fetch(
      `https://api.github.com/users/${name}/repos?per_page=${repos_count}&sort=${repos_sort}&client_id=${client_id}&client_secret=${client_secret}`
    );
    handleError(reposRes);
    let repos = await reposRes.json();
    return {
      profile,
      repos
    };
  };
}
