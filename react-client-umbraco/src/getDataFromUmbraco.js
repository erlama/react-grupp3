export const getDataFromUmbraco = async () => {
  const accessToken = localStorage.getItem("accessToken");

  let rawData = await fetch(
    "http://localhost:65022/umbraco/rest/v1/content/1089/children",
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
