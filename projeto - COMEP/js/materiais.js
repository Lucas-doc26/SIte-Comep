document.addEventListener('DOMContentLoaded', function() {
    var dados = [
        {
            id: 1,
            titulo: "Título 1",
            tipo: "metal",
            texto: "Lorem ipsum dolor sit amet consectetdipisicing elit. Hic, amet"
        },
        {
            id: 2,
            titulo: "Título 2",
            tipo: "madeira",
            texto: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit est, veritatis quibusdam labore dolore officiis!"
        },
        {
            id: 1,
            titulo: "Título 3",
            tipo: "aço",
            texto: "Lorem ipsum dolor sit amet consectetdipisicing elit. Hic, amet"
        },
        {
            id: 2,
            titulo: "Título 4",
            tipo: "inox",
            texto: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit est, veritatis quibusdam labore dolore officiis!"
        },
        {
            id: 1,
            titulo: "Título 5",
            tipo: "ouro",
            texto: "Lorem ipsum dolor sit amet consectetdipisicing elit. Hic, amet"
        },
        {
            id: 2,
            titulo: "Título 6",
            tipo: "vidro",
            texto: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit est, veritatis quibusdam labore dolore officiis!"
        },
    ];

    // Função para baixar
    function baixar(id) {
        alert(`Baixando o material com ID ${id}`);
    }

    // Criando os elementos HTML
    var flexBox = document.getElementById('flexbox_tipos_materiais');
    flexBox.innerHTML = '';

    dados.forEach(function(materiais, index) {
        var conteudo = `
        <div class="card_materiais">
                    <div class="card_azul">
                        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
                            <rect width="75" height="75" rx="15" fill="#1C6DB1"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26 15C23.7909 15 22 16.7909 22 19V55C22 57.2091 23.7909 59 26 59H50C52.2091 59 54 57.2091 54 55V23L45 15H26Z" fill="white"/>
                            <path d="M45 23V15L54 23H45Z" fill="#00315B"/>
                            <rect x="37" y="29" width="2" height="17" rx="1" fill="#00315B"/>
                            <rect x="42.6567" y="39" width="2" height="8" rx="1" transform="rotate(45 42.6567 39)" fill="#00315B"/>
                            <rect x="32" y="40.4142" width="2" height="8" rx="1" transform="rotate(-45 32 40.4142)" fill="#00315B"/>
                        </svg>
                    </div>
                <div class="infos">
                        <h3>${materiais.titulo}</h3>
                        <span>${materiais.tipo}</span>
                        <p>${materiais.texto}</p>
                    </div>
                    <button id="botao_baixar_${index}" onclick="baixar(${materiais.id})">Baixar</button>
                </div>
        `;
        flexBox.innerHTML += conteudo;
    });
});