function changeNickName(){
    const updatedUser = {
        name: "John Doe",
        job: "Developer",
      };
      fetch("https://reqres.in/api/users/2", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log("Erro:", error);
        });
}
function createNewFrind(){
    const newUser = {
        id: 15,
        email: "jorge@gmail.com",
        first_name: "Jorge",
        last_name: "Gomes",
        avatar: "https://reqres.in/img/faces/1-image.jpg",
      };
      
      fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log("Erro:", error);
        });
}