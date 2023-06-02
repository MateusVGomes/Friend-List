const removeButton = document.getElementById("removeButton");
let itemToBeRemoved;
removeButton.addEventListener("click", () => {
  itemToBeRemoved = document.getElementById("toBeRemovedInput").value;

  const elementToBeRemoved = document.getElementById(
    `friendBox-${itemToBeRemoved}`
  );
  if (elementToBeRemoved != undefined) {
    elementToBeRemoved.remove();

    fetch(`https://reqres.in/api/users?page=${itemToBeRemoved}`)
      .then((response) => {
        if (response.ok) {
          console.log("Usuário excluído com sucesso");
        } else {
          console.log("Erro ao excluir o usuário");
        }
      })
      .catch((error) => {
        console.log("Erro:", error);
      });
  } else {
    alert("Você não tem nenhum amigo com esta ID");
  }
});
