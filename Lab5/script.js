document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("main_form");
    const pibField = document.getElementById("pib_field");
    const phoneField = document.getElementById("phone_field");
    const idCardField = document.getElementById("idCard_field");
    const facultyField = document.getElementById("faculty_field");
    const birthField = document.getElementById("birth_field");
    const confirmButton = document.getElementById("confirm_button");
    const table = document.getElementById("color_table");
    const colorPicker = document.getElementById("color_picker");

    const variantNumber = 3; // Номер варіанту

    confirmButton.addEventListener("click", (event) => {
        event.preventDefault();
        clearErrors();

        let isValid = true;

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
        document.querySelectorAll(".fields input").forEach(field => {
            field.classList.remove("error");
        });
    }

    // Таблиця 6x6
    let counter = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 6; j++) {
            const cell = document.createElement("td");
            cell.textContent = counter;

            if (counter === variantNumber) {
                cell.addEventListener("mouseenter", () => {
                    cell.style.backgroundColor = getRandomColor();
                });

                cell.addEventListener("click", () => {
                    cell.style.backgroundColor = colorPicker.value;
                });

                cell.addEventListener("dblclick", () => {
                    const tableCells = document.querySelectorAll("#color_table td");
                    tableCells.forEach((diagCell, index) => {
                        if (index % 7 === 0) {
                            diagCell.style.backgroundColor = colorPicker.value;
                        }
                    });
                });
            }

            row.appendChild(cell);
            counter++;
        }
        table.appendChild(row);
    }

    function getRandomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
});
