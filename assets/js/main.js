const allData = [
    { session: "01", date: "04-08-2023", quantity: 3, link: "./link-01" },
    { session: "02", date: "04-08-2023", quantity: 1, link: "./link-02" },
    { session: "03", date: "04-08-2023", quantity: 3, link: "./link-03" },
    { session: "04", date: "04-08-2023", quantity: 1, link: "./link-04" },
    { session: "05", date: "04-08-2023", quantity: 4, link: "./link-05" },
    { session: "06", date: "04-08-2023", quantity: 1, link: "./link-06" },
    { session: "07", date: "04-08-2023", quantity: 1, link: "./link-06" },
    { session: "08", date: "04-08-2023", quantity: 1, link: "./link-06" },
    { session: "09", date: "04-08-2023", quantity: 1, link: "./link-06" },
    { session: "10", date: "04-08-2023", quantity: 1, link: "./link-06" },
    { session: "11", date: "04-08-2023", quantity: 1, link: "./link-06" },
    { session: "12", date: "04-08-2023", quantity: 1, link: "./link-06" },
];

const itemsPerPage = 10;
let currentPage = 1;

function displayTableData(pageNumber) {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = allData.slice(startIndex, endIndex);

    for (const item of itemsToShow) {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${item.session}</td>
        <td>${item.date}</td>
        <td>${item.quantity}</td>
        <td><a href=${item.link} data-page="${pageNumber}" target="_blank">View</a></td>
      `;
        tableBody.appendChild(row);
    }

    markActiveLink(pageNumber);
}

function generatePaginationLinks(totalPages) {
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const link = document.createElement("a");
        link.href = `javascript:void(0);`;
        link.textContent = i;
        link.addEventListener("click", () => {
            currentPage = i;
            displayTableData(currentPage);
        });
        paginationContainer.appendChild(link);
    }

    markActiveLink(currentPage);
}

function markActiveLink(activePage) {
    const paginationLinks = document.querySelectorAll("#pagination a");
    paginationLinks.forEach((link, index) => {
        if (index + 1 === activePage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

function init() {
    const totalItems = allData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    displayTableData(currentPage);
    generatePaginationLinks(totalPages);
}

init();
