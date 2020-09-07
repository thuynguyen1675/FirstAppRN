// export const login = (username, password) => {
//     return fetch('https://api.itedu.me/user/login/', {
//         method: 'POST',
//         headers: {
//            Accept: 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             "email": username,
//             "password": password

//         })
//     }).then((response) => response.json())
//         .then((json) => {
//             console.log(json)
//             if (json.message === "OK") {
//                 return {status: 200}
//             }
//             else {
//                 return {status: 404}
//             }
//         }).catch((error) => {
//             console.error(error);
//         })
// }

export const isUser = (username, password) => {
  if (username == 'Ntt' && password == '123') return {status: 200};
  return {status: 404};
};
