const profileBox = document.getElementById("profileBox");

let countOfFriendsPerPage = 1;
fetch("https://reqres.in/api/users?page=1", {
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((processedData) => {
    setTimeout(() => {
      while (countOfFriendsPerPage < 7) {
        const profilePicutre = document.createElement("img");
        let imageUrl = processedData.data[countOfFriendsPerPage - 1].avatar;
        setImageUrl(profilePicutre, imageUrl);
        const friendName=document.createElement('p');
        setFriendName(friendName,processedData);
        const friendBox = document.createElement("section");
        createSection(friendBox, profilePicutre,friendName);
        countOfFriendsPerPage++;
      }
    }, 120);
  })
  .catch((error) => {
    console.log("Erro:", error);
  });

  function setFriendName(friendName,processedData){
      friendName.textContent=`${processedData.data[countOfFriendsPerPage - 1].first_name} ${processedData.data[countOfFriendsPerPage - 1].last_name}`
  }
  function setImageUrl(profilePicture, imageUrl) {
  profilePicture.src = imageUrl;
}
function createSection(friendBox, profilePicutre,friendName) {
  friendBox.className = "friend";
  friendBox.id = `friendBox-${countOfFriendsPerPage}`;
  profileBox.appendChild(friendBox);
  friendBox.appendChild(profilePicutre);
  friendBox.appendChild(friendName);
  
}
