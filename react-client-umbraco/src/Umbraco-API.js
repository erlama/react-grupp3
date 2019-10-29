

export const getAccessToke = () => {
    var username = 'w.tamim@hotmail.com', password = '1234567890';
    const postData = {
      grant_type: 'password',
      username,
      password
    };
  
    const authUrl = 'http://localhost:65022/umbraco/oauth/token';
  
  return new Promise((resolve, reject) => {
    return fetch(authUrl, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: encodePostData(postData)
    }).then((response) => {
      return response.json();
    }).then((data) => {
      return resolve(data.access_token);
    });
  });
  
  }
  
  export const encodePostData = (postData) => {
    if(!postData) throw new Error('No post data');
    return Object.keys(postData).map((key) => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(postData[key])}`;
    }).join('&');
  }