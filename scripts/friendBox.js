const profileBox = document.getElementById("profileBox");

let countOfFriendsPerPage;
fetch("https://reqres.in/api/users?page=2", {
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((processedData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(processedData);
      }, 1200);
    });
  })
  .then((processedData) => {
    countOfFriendsPerPage = 1;
    setTimeout(() => {
      while (countOfFriendsPerPage < 7) {
        const profilePicutre = document.createElement("img");
        let imageUrl = processedData.data[countOfFriendsPerPage - 1].avatar;
        setImageUrl(profilePicutre, imageUrl);
        const friendName = document.createElement("p");
        setFriendName(friendName, processedData);
        const friendId = document.createElement("p");
        console.log(friendId.textContent);
        setFriendId(friendId, processedData);
        const friendBox = document.createElement("section");
        createSection(
          friendBox,
          profilePicutre,
          friendName,
          processedData.data[countOfFriendsPerPage - 1].id,
          friendId
        );
        countOfFriendsPerPage++;
      }
    }, 120);
    countOfFriendsPerPage = 1;
  })
  .catch((error) => {
    console.log("Erro:", error);
  });

fetch("https://reqres.in/api/users?page=1", {
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((processedData) => {
    countOfFriendsPerPage = 1;
    console.log(processedData.data[1].avatar);
    setTimeout(() => {
      while (countOfFriendsPerPage < 7) {
        const profilePicutre = document.createElement("img");
        let imageUrl = processedData.data[countOfFriendsPerPage - 1].avatar;
        setImageUrl(profilePicutre, imageUrl);
        const friendName = document.createElement("p");
        setFriendName(friendName, processedData);
        const friendId = document.createElement("p");
        console.log(friendId.textContent);
        setFriendId(friendId, processedData);
        const friendBox = document.createElement("section");
        createSection(
          friendBox,
          profilePicutre,
          friendName,
          processedData.data[countOfFriendsPerPage - 1].id,
          friendId
        );
        countOfFriendsPerPage++;
      }
    }, 120);
  })
  .catch((error) => {
    console.log("Erro:", error);
  });

function setFriendId(friendId, processedData) {
  friendId.textContent = `ID:${
    processedData.data[countOfFriendsPerPage - 1].id
  } `;
}

function setFriendName(friendName, processedData) {
  friendName.textContent = `${
    processedData.data[countOfFriendsPerPage - 1].first_name
  } ${processedData.data[countOfFriendsPerPage - 1].last_name}`;
}
function setImageUrl(profilePicture, imageUrl) {
  profilePicture.src = imageUrl;
}
function createSection(friendBox, profilePicutre, friendName, id, friendId) {
  friendBox.className = "friend container-fluid  col-lg-3 col-md-6 col-sm-6 ";
  friendBox.id = `friendBox-${id}`;
  profileBox.appendChild(friendBox);

  friendBox.appendChild(profilePicutre);
  friendBox.appendChild(friendName);
  friendBox.appendChild(friendId);
}
