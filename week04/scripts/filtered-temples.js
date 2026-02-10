document.addEventListener("DOMContentLoaded", () => {
    // Footer
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    // Hamburger toggle
    const menuButton = document.getElementById("menuButton");
    const navMenu = document.getElementById("navMenu");

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        menuButton.textContent = navMenu.classList.contains("open") ? "✖" : "≡";
    });

    // Temple data
    const temples = [
        {
            templeName: "Recife Brazil Temple",
            location: "Recife, Brazil",
            dedicated: "2000-12-15",
            area: 25500,
            imageUrl: "week04/images/temple1.jpg"
        },
        {
            templeName: "Brasília Brazil Temple",
            location: "Brasília, Brazil",
            dedicated: "2023-09-17",
            area: 25000,
            imageUrl: "week04/images/temple2.jpg"
        },
        {
            templeName: "Rio de Janeiro Brazil Temple",
            location: "Rio de Janeiro, Brazil",
            dedicated: "2022-05-08",
            area: 29600,
            imageUrl: "week04/images/temple3.jpg"
        },
        {
            templeName: "São Paulo Brazil Temple",
            location: "São Paulo, Brazil",
            dedicated: "1978-10-30",
            area: 59246,
            imageUrl: "week04/images/temple4.jpg"
        },
        {
            templeName: "Curitiba Brazil Temple",
            location: "Curitiba, Brazil",
            dedicated: "2008-06-01",
            area: 21500,
            imageUrl: "week04/images/temple5.jpg"
        },
        {
            templeName: "Campinas Brazil Temple",
            location: "Campinas, Brazil",
            dedicated: "2002-05-17",
            area: 48100,
            imageUrl: "week04/images/temple6.jpg"
        },
        {
            templeName: "Fortaleza Brazil Temple",
            location: "Fortaleza, Brazil",
            dedicated: "2019-06-02",
            area: 36000,
            imageUrl: "week04/images/temple7.jpg"
        },
        {
            templeName: "Manaus Brazil Temple",
            location: "Manaus, Brazil",
            dedicated: "2012-06-10",
            area: 32000,
            imageUrl: "week04/images/temple8.jpg"
        },
        {
            templeName: "Belém Brazil Temple",
            location: "Belém, Brazil",
            dedicated: "2022-11-20",
            area: 28000,
            imageUrl: "week04/images/temple9.jpg"
        },
        {
            templeName: "Salt Lake Temple",
            location: "Salt Lake City, Utah",
            dedicated: "1893-04-06",
            area: 253015,
            imageUrl: "week04/images/temple10.jpg"
        }
    ];

    function displayTemples(filteredTemples) {
        const container = document.getElementById("temples");
        container.innerHTML = "";
        filteredTemples.forEach(t => {
            const card = document.createElement("section");
            card.innerHTML = `
        <h2>${t.templeName}</h2>
        <p><strong>Location:</strong> ${t.location}</p>
        <p><strong>Dedicated:</strong> ${t.dedicated}</p>
        <p><strong>Size:</strong> ${t.area.toLocaleString()} sq ft</p>
        <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
      `;
            container.appendChild(card);
        });
    }

    // Initial display
    displayTemples(temples);

    // Filters
    document.getElementById("home").addEventListener("click", e => {
        e.preventDefault();
        displayTemples(temples);
    });

    document.getElementById("old").addEventListener("click", e => {
        e.preventDefault();
        displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
    });

    document.getElementById("new").addEventListener("click", e => {
        e.preventDefault();
        displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
    });

    document.getElementById("large").addEventListener("click", e => {
        e.preventDefault();
        displayTemples(temples.filter(t => t.area > 90000));
    });

    document.getElementById("small").addEventListener("click", e => {
        e.preventDefault();
        displayTemples(temples.filter(t => t.area < 10000));
    });
});