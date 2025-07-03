const tbody = document.getElementById("user-body");
const errorBox = document.getElementById("error");

function fetchUsers() {
  // Clear previous content
  tbody.innerHTML = "";
  errorBox.textContent = "";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((users) => {
      users.forEach((user) => {
        const row = document.createElement("tr");

        const address = `${user.address.street}, ${user.address.city}`;

        row.innerHTML = `
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${address}</td>
        `;

        tbody.appendChild(row);
      });
    })
    .catch((error) => {
      errorBox.textContent =
        "Failed to load users. Please check your connection.";
      console.error("Error fetching users:", error);
    });
}

// Initial fetch
fetchUsers();
