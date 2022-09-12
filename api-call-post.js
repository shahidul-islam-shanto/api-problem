//API json to data convert
 /**const user = {id: 4551, name: "jaker"};
 //string
   const userPro = JSON.stringify(user);
   console.log(userPro);
   //receive 
   const userNext = JSON.parse(userPro);
   console.log(userNext);
*/


//API call method
/**fetch('https://jsonplaceholder.typicode.com/users')
 //fetch('https://jsonplaceholder.typicode.com/peoples')
  .then(response => response.json())
  .then(json => userData(json))
  //.catch(error => console.log(error)); 

  function userData(users){
    const userName = users.map(user => user.username);
    const totalNa = document.getElementById("user-ditel");
    
    for(let i = 0; i< userName.length; i++){
        const use = userName[i];
        const li = document.createElement("li");
        li.innerText = use;
        totalNa.appendChild(li);
    }
  }
*/


//API post method
/**document.getElementById("submit").addEventListener('click', function(){
   const title = document.getElementById("title").value;
   const postContain = document.getElementById("post-contain").value; 
   const post = {title: title, body: postContain}
   nowPostToServer(post);
})

function nowPostToServer(postInfo){
      fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(postInfo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  .then(response => response.json())
  .then(data => console.log(data));
}
*/


//(***v.v.i) async
async function lodeData(){
  const responseData = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await responseData.json();
  //userData(data);
  return data;
}
//lodeData();
lodeData().then(data =>{
   userData(data);
});

function userData(data){
  const totalNa = document.getElementById("user-data");
  for(let i = 0; i< data.length; i++){
      const user = data[i];
      const item = document.createElement("li");
      item.innerText = user.email;
      totalNa.appendChild(item);
      
  }
}
