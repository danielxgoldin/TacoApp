



  // Brendon
  var appKey = "9b50da828a1dfe82773e9e4c27d62609";
  var appId = "50ec7bea";
  var urlID =
    "https://api.edamam.com/search?q=taco&app_id=" + appId + "&app_key=" + appKey;
  var urlID2 = "https://api.edamam.com/search?q=salsa&app_id=" + appId + "&app_key=" + appKey;
  getTaco()
  getSalsa()
  function getTaco() {
    $.ajax({
      url: urlID,
      method: "GET",
      crossDomain: true,
      dataType: "json",
    }).then(function (response) {
      console.log(response.hits.length)   
        for (let i=0;i<response.hits.length;i++)
        {
            console.log("name: "+ response.hits[i].recipe.label)
            console.log(response.hits[i].recipe.source)
            var ul=document.getElementById(receipe)
            var li=document.createElement("li")
            var a=document.createElement("a")
            a.setAttribute("href",response.hits[i].recipe.url)
            var h2=document.createElement("h2")
            response.hits[i].recipe.source
        }

    
    })
  }
  function getSalsa() {
    $.ajax({
      url: urlID2,
      method: "GET",
      crossDomain: true,
      dataType: "json",
    }).then(function (response) {
      console.log(response)
     
 
    })
  }

