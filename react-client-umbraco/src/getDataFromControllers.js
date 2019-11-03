export const getDataFromControllers = async controllerName => {
  // Notice that controllerName should be like ControllerName/Method;
  let fetchUrl = 'https://localhost:44328/umbraco/api/' + controllerName;

  let rawData = await fetch(fetchUrl);

  let data = await rawData.json();
  return data;
};
