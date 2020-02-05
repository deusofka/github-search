handleError = res => {
  if (!res.ok) throw new Error("Error occured" + res.status);
};

setupConnection = name => {
  return {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "bearer 28e47721b8815fec6c7a6884658b6ad1f6ce305b"
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
