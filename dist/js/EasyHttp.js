handleError = res => {
  if (!res.ok) throw new Error("Error occured" + res.status);
};

setupConnection = name => {
  return {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "bearer d23d3a9abfdf595b5eed17ef37d6659a9be943a0"
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
