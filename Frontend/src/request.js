// import axios from "axios";

// const baseUrl = "http://localhost:7777";
// const url = "http://localhost:7777/users/register";


// axios.post(url, udata)
//         .then(res => {
//           res = JSON.parse(JSON.stringify(res));
//           if (res.data === "Invalid Credentials") {
//             alert(res.data);
//           }
//           else {
//             // alert(res.data.token);
//             localStorage.setItem("token", res.data);
//             localStorage.setItem("usertype", user);
//             localStorage.setItem("username",udata.email);
//             localStorage.setItem("cart", JSON.stringify([]));
//             if (user === "customer") {
//               window.location.href = `/home/${user}`;
//             } else if(user === "kitchenemployee"){
//               window.location.href = `/home/${user}/pending`;
//             } else if(user === "deliverypersonnel"){
//               window.location.href = `/home/${user}/pending`;
//             }
//           }
//         })
//         .catch(err => {
//           alert(err);
//         })


// const getUrl = (endpoint) =>  {
//     switch(endpoint){
//         case 'order':
//             return baseUrl+'/order';
//         case 'products3':
//             return baseUrl+'/products3';
//         case 'products':
//             return baseUrl+'/products';
//         case 'register':
//             return baseUrl+'/users/register';    
//         default:
//             return baseUrl;            
//     }
// }

// const getRequest = async (endPoint) => {
//     return await axios.get(getUrl(endpoint));
// }



// const postRequest = async (endPoint, data) => {
//     return axios.post(getUrl(endPoint),data)
// .then((res)=>{
//   alert("Form Submitted");
//   window.location.href=`/login${data.type}`;
// })
// .catch((err)=>{
//   console.log(err);
// })
// }