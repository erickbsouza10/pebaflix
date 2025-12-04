const catalogo = [{
        categoria: "Séries emocionantes",
        items: [{
                titulo: "Stranger Things",
                capa: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
                descricao: "Em uma pequena cidade, um garoto desaparece e segredos sombrios envolvendo experimentos secretos começam a surgir."
            },
            {
                titulo: "Breaking Bad",
                capa: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
                descricao: "Após ser diagnosticado com câncer, um professor de química começa a produzir metanfetamina para sustentar sua família."
            },
            {
                titulo: "La Casa de Papel",
                capa: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
                descricao: "Um grupo de criminosos realiza o maior assalto da história sob o comando enigmático do Professor."
            },
            {
                titulo: "The Witcher",
                capa: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
                descricao: "Geralt de Rívia, um caçador de monstros, luta para encontrar seu lugar em um mundo onde humanos muitas vezes são piores que bestas."
            },
            {
                titulo: "The Boys",
                capa: "https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1ngjM.jpg",
                descricao: "Um grupo de vigilantes enfrenta super-heróis corruptos que abusam de seus poderes."
            }
        ]
    },

    {
        categoria: "Filmes recomendados",
        items: [{
                titulo: "Avatar 2: O Caminho da Água",
                capa: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
                descricao: "Jake Sully e Neytiri protegem sua família enquanto enfrentam uma nova ameaça em Pandora."
            },
            {
                titulo: "Vingadores: The Avengers",
                capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfySJF6o7nlj1dB3t-9hCQhBeCdnU1JPfWPNd2L8MadGPhw3cwH8d32hsmGc5Xhm7g2QQk2WtspEMBAjs7pZyJhXS7e-v0tOtAc1S-dm3dxw&s=10",
                descricao: "Os maiores heróis da Terra precisam se unir para impedir que Loki domine o planeta."
            },
            {
                titulo: "Interestelar",
                capa: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
                descricao: "Para salvar a humanidade, uma equipe viaja através de um buraco negro em busca de um novo lar."
            },
            {
                titulo: "John Wick 4: Baba Yaga",
                capa: "data:image/webp;base64,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",
                descricao: "John Wick enfrenta novos inimigos em uma batalha global enquanto busca sua liberdade definitiva."
            },
            {
                titulo: "Deadpool",
                capa: "https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
                descricao: "Wade Wilson se torna Deadpool, um anti-herói sarcástico em busca de vingança contra quem destruiu sua vida."
            }
        ]
    }
];