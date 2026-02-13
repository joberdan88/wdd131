document.addEventListener("DOMContentLoaded", () => {
    // Footer dynamic year and last modified
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    const lastModified = document.getElementById("lastModified");
    if (lastModified) lastModified.textContent = document.lastModified;

    // Dark Mode toggle
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") document.body.classList.add("dark");

        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark");
            localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
        });
    }

    // Projects data (sem imagens)
    const projects = [
        {
            title: "Store Laravel PHP MySQL",
            description: "Online store with CRUD, authentication, and Blade interface.",
            link: "https://github.com/joberdan88/Store-Laravel-PHP-Mysql"
        },
        {
            title: "Projeto Servlet FullStack",
            description: "Java project integrating JSF front-end with JPA/Hibernate back-end.",
            link: "https://github.com/joberdan88/ProjetoServletFullStack"
        },
        {
            title: "Shopping Cart React",
            description: "React-based shopping cart application.",
            link: "https://github.com/joberdan88/shopping_cart-react"
        }
    ];

    // Render projects dynamically
    const projectList = document.getElementById("project-list");
    if (projectList) {
        projects.forEach(p => {
            const card = document.createElement("section");
            card.innerHTML = `
        <h2>${p.title}</h2>
        <p>${p.description}</p>
        <a href="${p.link}" target="_blank">View on GitHub</a>
      `;
            projectList.appendChild(card);
        });
    }

    // Contact form with localStorage
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", e => {
            e.preventDefault();
            const user = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value
            };

            if (user.name && user.email && user.message) {
                localStorage.setItem("contactData", JSON.stringify(user));
                alert(`Thank you, ${user.name}! Your message has been saved.`);
            } else {
                alert("Please fill in all fields.");
            }
        });
    }
});