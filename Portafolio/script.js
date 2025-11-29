const API_BASE = "https://portfolio-api-three-black.vercel.app/api/v1";

// --- Obtener proyectos públicos ---
async function getPublicProjects(itsonId) {
    const res = await fetch(`${API_BASE}/publicProjects/${itsonId}`);
    if (!res.ok) throw new Error("Error al obtener proyectos");
    return res.json();
}

function renderProjectById(divId, project) {
    const container = document.getElementById(divId);

    if (!container) return;

    if (!project) {
        container.innerHTML = "<p>No hay proyecto disponible.</p>";
        return;
    }

    container.innerHTML = `
        <div class="project-card">
            <h2>${project.title}</h2>
            <p>${project.description || "Sin descripción"}</p>

            <p><strong>Tecnologías:</strong></p>
            <ul>
                ${project.technologies
                    .map(t => `<li>${t}</li>`)
                    .join("")}
            </ul>
            
        </div>
    `;
}


async function loadProjects() {
    try {
        const projects = await getPublicProjects("252007");

  
        renderProjectById("projectGrid",  projects[0]);
        renderProjectById("projectGrid2", projects[1]);
        renderProjectById("projectGrid3", projects[2]);

    } catch (err) {
        console.error("Error cargando proyectos:", err);
    }
}


loadProjects();
