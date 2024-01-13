/*
Back-end > API > Fetch > Json/XML.. > 
Json.prasse > javascript type > render ra giao diện. 
*/

var postAPI = "https://jsonplaceholder.typicode.com/posts";
//stream
fetch(postAPI)
  .then(function (response) {
    //json.parse : json > javascript type
    console.log(response);
    return response.json();
  })
  .then(function (posts) {
    var htmls = posts.map(function (post) {
      return `<li>
      <h2>${post.title}</h2>
      <P>${post.body}</P>
      </li>`;
    });

    var html = htmls.join("");
    document.getElementById("post-block").innerHTML = html;
  })
  .catch(function (err) {
    console.log(err);
  });
