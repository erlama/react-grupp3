export const getDataFromUmbraco = async (id, ifChildren) => {
  const accessToken = localStorage.getItem("accessToken");
  let fetchUrl;
  if (ifChildren) {
    fetchUrl =
      //"http://localhost:65022/umbraco/rest/v1/content/" + id + "/children";
      " ";
  } else {
    fetchUrl = " "; //"http://localhost:65022/umbraco/rest/v1/content/" + id + "/";
  }
  let rawData = await fetch(
    // Notice that this URL gets a list of children
    fetchUrl,
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
