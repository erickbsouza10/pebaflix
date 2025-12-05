// ========================
// ELEMENTOS DA TELA
// ========================
const profilesContainer = document.querySelector(".profiles");
const containerPerfis = document.querySelector(".container");
const mainContent = document.querySelector(".main-content");
const nomePerfilTela = document.querySelector("#profileName");

// Modal do Filme
const modal = document.getElementById("modalFilme");
const modalTitulo = document.querySelector(".modal-titulo");
const modalCapa = document.querySelector(".modal-capa");
const modalDescricao = document.querySelector(".modal-descricao");
const fecharModal = document.querySelector(".close-modal");
const btnAddLista = document.querySelector(".btn-add-lista");

// Minha Lista
const linkMinhaLista = document.getElementById("linkMinhaLista");
const listaRow = document.getElementById("listaRow");
const secaoLista = document.getElementById("minhaLista");

// Banco local Minha Lista
let minhaLista = JSON.parse(localStorage.getItem("minhaLista")) || [];
let filmeAtual = null;


// ========================
// PERFIL
// ========================
function enterProfile(nome) {
    nomePerfilTela.textContent = nome;

    containerPerfis.classList.add("fade-out");

    setTimeout(() => {
        containerPerfis.classList.add("hidden");
        containerPerfis.classList.remove("fade-out");

        mainContent.classList.remove("hidden");
        renderCatalogo();
    }, 600);
}

function renderPerfis() {
    profilesContainer.innerHTML = "";

    perfis.forEach(perfil => {
        const card = document.createElement("div");
        card.classList.add("profile");

        card.innerHTML = `<img src="${perfil.img}"><span>${perfil.nome}</span>`;
        card.addEventListener("click", () => enterProfile(perfil.nome));

        profilesContainer.appendChild(card);
    });
}


// ========================
// CATÁLOGO
// ========================
function renderCatalogo() {
    if (mainContent.dataset.loaded) return;
    mainContent.dataset.loaded = true;

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
            capa.addEventListener("click", () => abrirModal(item));
            row.appendChild(capa);
        });

        section.appendChild(row);
        mainContent.appendChild(section);
    });
}


// ========================
// MODAL FILME
// ========================
function abrirModal(filme) {
    filmeAtual = filme;
    modalTitulo.textContent = filme.titulo;
    modalDescricao.textContent = filme.descricao;
    modalCapa.src = filme.capa;
    modal.classList.remove("hidden");

    const existe = minhaLista.some(f => f.id === filme.id);
    btnAddLista.textContent = existe ? "✔ Adicionado" : "➕ Minha Lista";
}

function fecharModalFilme() {
    modal.classList.add("hidden");
}

fecharModal.addEventListener("click", fecharModalFilme);


// ========================
// MINHA LISTA
// ========================
function salvarLista() {
    localStorage.setItem("minhaLista", JSON.stringify(minhaLista));
}

function atualizarMinhaLista() {
    listaRow.innerHTML = "";

    if (minhaLista.length === 0) {
        listaRow.innerHTML = `<p style="padding:20px;font-size:18px;">Sua lista está vazia 😢</p>`;
        return;
    }

    minhaLista.forEach(filme => {
        const capa = document.createElement("img");
        capa.src = filme.capa;
        capa.classList.add("carousel-item");
        capa.addEventListener("click", () => abrirModal(filme));
        listaRow.appendChild(capa);
    });
}

btnAddLista.addEventListener("click", () => {
    if (!filmeAtual) return;

    const existe = minhaLista.some(f => f.id === filmeAtual.id);

    if (existe) {
        minhaLista = minhaLista.filter(f => f.id !== filmeAtual.id);
        btnAddLista.textContent = "➕ Minha Lista";
    } else {
        minhaLista.push(filmeAtual);
        btnAddLista.textContent = "✔ Adicionado";
    }

    salvarLista();
    atualizarMinhaLista();
});

linkMinhaLista.addEventListener("click", () => {
    document.querySelectorAll("section.carousel").forEach(sec => sec.classList.add("hidden"));
    secaoLista.classList.remove("hidden");
    atualizarMinhaLista();
});
let linkInicio = document.getElementById("linkInicio");

linkInicio.addEventListener("click", () => {
    document.querySelectorAll("section.carousel").forEach(sec => sec.classList.remove("hidden"));
    secaoLista.classList.add("hidden");
});


// ========================
// INICIAR
// ========================
document.addEventListener("DOMContentLoaded", renderPerfis);