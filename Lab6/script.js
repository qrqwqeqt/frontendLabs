document.addEventListener("DOMContentLoaded", () => {
    const fetchButton = document.getElementById("fetchButton");
    const userDataContainer = document.getElementById("userDataContainer");

    const fieldsToDisplay = ["picture", "city", "country", "postcode", "email"];

    fetchButton.addEventListener("click", async () => {
        try {
            const response = await fetch("https://randomuser.me/api/");
            if (!response.ok) {
                throw new Error("Помилка завантаження даних");
            }
            const data = await response.json();
            displayUserData(data.results[0]);
        } catch (error) {
            console.error(error);
            userDataContainer.innerHTML = `<p style="color: red;">Не вдалося завантажити дані. Спробуйте ще раз.</p>`;
        }
    });

    function displayUserData(user) {
        userDataContainer.innerHTML = "";

        const userCard = document.createElement("div");
        userCard.className = "userCard";

        const userImage = document.createElement("img");
        userImage.src = user.picture.large;
        userImage.alt = "Фото користувача";
        userCard.appendChild(userImage);

        const userInfo = document.createElement("div");
        userInfo.className = "userInfo";

        if (fieldsToDisplay.includes("city")) {
            const city = document.createElement("p");
            city.textContent = `Місто: ${user.location.city}`;
            userInfo.appendChild(city);
        }

        if (fieldsToDisplay.includes("country")) {
            const country = document.createElement("p");
            country.textContent = `Країна: ${user.location.country}`;
            userInfo.appendChild(country);
        }

        if (fieldsToDisplay.includes("postcode")) {
            const postcode = document.createElement("p");
            postcode.textContent = `Поштовий код: ${user.location.postcode}`;
            userInfo.appendChild(postcode);
        }

        if (fieldsToDisplay.includes("email")) {
            const email = document.createElement("p");
            email.textContent = `Email: ${user.email}`;
            userInfo.appendChild(email);
        }

        userCard.appendChild(userInfo);
        userDataContainer.appendChild(userCard);
    }
});
