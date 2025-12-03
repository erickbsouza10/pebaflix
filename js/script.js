const profilesContainer = document.querySelector(".profiles");
const containerPerfis = document.querySelector(".container");
const mainContent = document.querySelector(".main-content");
const nomePerfilTela = document.querySelector("#profileName");


function enterProfile(nome) {
    nomePerfilTela.textContent = nome;

    containerPerfis.classList.add("fade-out");

    setTimeout(() => {
        containerPerfis.classList.add("hidden");
        containerPerfis.classList.remove("fade-out");

        mainContent.classList.remove("hidden");
        mainContent.classList.remove("fade-in");
        void mainContent.offsetWidth;
        mainContent.classList.add("fade-in");

        if (!mainContent.dataset.loaded) {
            renderCatalogo();
            mainContent.dataset.loaded = true;
        }

        console.log(`Entrou no perfil: ${nome}`);

    }, 600);
}


function renderPerfis() {
    profilesContainer.innerHTML = "";

    perfis.forEach(perfil => {
        const card = document.createElement("div");
        card.classList.add("profile");

        card.innerHTML = `
            <img src="${perfil.img}">
            <span>${perfil.nome}</span>
        `;

        card.addEventListener("click", () => enterProfile(perfil.nome));
        profilesContainer.appendChild(card);
    });

    const add = document.createElement("div");
    add.classList.add("profile", "add");
    add.innerHTML = `
        <span class="plus">+</span>
        <span class="text-add">Adicionar perfil</span>
    `;
    add.addEventListener("click", () => alert("Adicionar perfil será implementado"));

    profilesContainer.appendChild(add);
}


function renderCatalogo() {
    console.log("Renderizando catálogo...");

    catalogo.forEach(secao => {
        const section = document.createElement("section");
        section.classList.add("carousel");

        section.innerHTML = `<h2>${secao.categoria}</h2>`;

        const row = document.createElement("div");
        row.classList.add("carousel-row");

        secao.items.forEach(item => {
            const capa = document.createElement("img");
            capa.src = item.capa;
            capa.alt = item.titulo;
            capa.title = item.titulo;

            capa.addEventListener("click", () => abrirModal(item));

            row.appendChild(capa);
        });

        section.appendChild(row);
        mainContent.appendChild(section);
    });
}

const modal = document.getElementById("modalFilme");
const modalTitulo = document.querySelector(".modal-titulo");
const modalCapa = document.querySelector(".modal-capa");
const modalDescricao = document.querySelector(".modal-descricao");
const fecharModal = document.querySelector(".close-modal");

function abrirModal(item) {
    modalCapa.src = item.capa;
    modalTitulo.textContent = item.titulo;
    modalDescricao.textContent = item.descricao || "Sem descrição disponível.";
    modal.classList.remove("hidden");
}

function fecharModalFilme() {
    modal.classList.add("hidden");
}

fecharModal.addEventListener("click", fecharModalFilme);
modal.addEventListener("click", (e) => {
    if (e.target === modal) fecharModalFilme();
});


document.addEventListener("DOMContentLoaded", () => {
    renderPerfis();
});