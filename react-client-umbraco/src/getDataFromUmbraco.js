export const getDataFromUmbraco = async id => {
  const accessToken = localStorage.getItem("accessToken");

  let rawData = await fetch(
    // Notice that this URL gets a list of children
    "http://localhost:65022/umbraco/rest/v1/content/" + id + "/children",
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }
  );
  let data = await rawData.json();
  return data;
};
