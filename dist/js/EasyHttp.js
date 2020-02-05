handleError = res => {
  if (!res.ok) throw new Error("Error occured" + res.status);
};

setupConnection = name => {
  return {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "bearer b6ffc3d89b3dc52241858db8a9dadb0db4064cf5"
    },
    body: JSON.stringify({
      query: `
      query { 
        user(login: \"${name}\") { 
          avatarUrl,
          login,
          websiteUrl,
          company, 
          location,
          createdAt,
          repositories(first:6, orderBy: {field: CREATED_AT, direction: DESC}) {
            edges {
              node {
                name,
                url,
                createdAt
              }
            }
          }
        }
      }`
    })
  };
};

class EasyHttp {
  getProfile = async (url, name) => {
    let res = await fetch(url, setupConnection(name));
    handleError(res);
    return res.json();
  };
}
