document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("main_form");
    const pibField = document.getElementById("pib_field");
    const phoneField = document.getElementById("phone_field");
    const idCardField = document.getElementById("idCard_field");
    const facultyField = document.getElementById("faculty_field");
    const birthField = document.getElementById("birth_field");

    const confirmButton = document.getElementById("confirm_button");

    confirmButton.addEventListener("click", (event) => {
        event.preventDefault(); // Зупиняє стандартну поведінку кнопки

        // Очистити помилки
        clearErrors();

        let isValid = true;

        // Перевірка полів
        if (!/^[А-Яа-яІіЇїЄєҐґ' ]{2,}\s[А-Яа-яІіЇїЄєҐґ]\.[А-Яа-яІіЇїЄєҐґ]\.$/.test(pibField.value.trim())) {
            showError(pibField);
            isValid = false;
        }
        if (!/^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/.test(phoneField.value.trim())) {
            showError(phoneField);
            isValid = false;
        }
        if (!/^[А-ЯA-Z]{2}\s№\d{6}$/.test(idCardField.value.trim())) {
            showError(idCardField);
            isValid = false;
        }
        if (!/^[А-Яа-яІіЇїЄєҐґ' ]+$/.test(facultyField.value.trim())) {
            showError(facultyField);
            isValid = false;
        }
        if (!/^\d{2}\.\d{2}\.\d{4}$/.test(birthField.value.trim())) {
            showError(birthField);
            isValid = false;
        }

        if (isValid) {
            try {
                // Спробуйте відкрити нове вікно
                const newWindow = window.open("", "_blank", "width=400,height=400");
                if (newWindow) {
                    newWindow.document.write(`
                        <html>
                        <head>
                            <title>Перевірена інформація</title>
                            <style>
                                body {
                                    font-family: Arial, sans-serif;
                                    margin: 20px;
                                    line-height: 1.6;
                                }
                                h1 {
                                    color: #007bff;
                                }
                                p {
                                    margin: 5px 0;
                                }
                            </style>
                        </head>
                        <body>
                            <h1>Введена інформація</h1>
                            <p><strong>ПІБ:</strong> ${pibField.value.trim()}</p>
                            <p><strong>Телефон:</strong> ${phoneField.value.trim()}</p>
                            <p><strong>ID-карта:</strong> ${idCardField.value.trim()}</p>
                            <p><strong>Факультет:</strong> ${facultyField.value.trim()}</p>
                            <p><strong>Дата народження:</strong> ${birthField.value.trim()}</p>
                        </body>
                        </html>
                    `);
                    newWindow.document.close();
                } else {
                    alert("Ваш браузер заблокував спливаюче вікно. Дозвольте спливаючі вікна для цього сайту.");
                }
            } catch (error) {
                console.error("Помилка при відкритті вікна:", error);
            }
        }
    });

    function showError(field) {
        field.classList.add("error");
    }

    function clearErrors() {
        const fields = document.querySelectorAll(".fields input");
        fields.forEach((field) => {
            field.classList.remove("error");
        });
    }
});
