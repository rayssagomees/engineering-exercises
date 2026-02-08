// Database de matérias e exercícios
const materias = [
    {
        id: 1,
        nome: 'Resistência dos Materiais',
        icon: '<i class="fi fi-rr-crane"></i>',
        descricao: 'Estudo das tensões e deformações em estruturas',
        exercicios: 3
    },
    {
        id: 2,
        nome: 'Mecânica dos Solos',
        icon: '<i class="fi fi-rr-rocks"></i>',
        descricao: 'Análise das propriedades e comportamento dos solos',
        exercicios: 1
    },
    {
        id: 3,
        nome: 'Estruturas de Concreto Armado',
        icon: '<i class="fi fi-rr-building-foundation"></i>',
        descricao: 'Dimensionamento e análise de estruturas de concreto armado',
        exercicios: 2
    },
    {
        id: 4,
        nome: 'Saneamento',
        icon: '<i class="fi fi-rr-raindrops"></i>',
        descricao: 'Projeto e cálculo de estruturas de aço',
        exercicios: 0
    },
    {
        id: 5,
        nome: 'Ações e Segurança em Estruturas',
        icon: '<i class="fi fi-sr-wind"></i>',
        descricao: 'Estudo do movimento dos fluidos e suas aplicações',
        exercicios: 0
    },
];

const exercicios = {
    1: [ // Resistência dos Materiais
        {
            id: 101,
            titulo: 'Tensão Normal em Barra Tracionada',
            preview: 'Uma barra de aço com seção transversal de 400 mm² é submetida a uma força de tração...',
            dificuldade: 'facil',
            enunciado: 'Uma barra de aço com seção transversal de 400 mm² é submetida a uma força de tração de 80 kN. Calcule a tensão normal atuante na barra e verifique se ela está dentro do limite de segurança, sabendo que a tensão admissível do aço é de 250 MPa.',
            solucao: [
                {
                    texto: 'Identificar os dados do problema:',
                    detalhes: 'Área da seção transversal (A) = 400 mm²<br>Força de tração (F) = 80 kN = 80.000 N<br>Tensão admissível (σadm) = 250 MPa'
                },
                {
                    texto: 'Aplicar a fórmula da tensão normal:',
                    detalhes: 'σ = F / A<br>σ = 80.000 N / 400 mm²<br>σ = 200 N/mm² = 200 MPa'
                },
                {
                    texto: 'Verificar a segurança:',
                    detalhes: 'Como σ = 200 MPa < σadm = 250 MPa, a barra está dentro do limite de segurança.<br><br><strong>Resposta:</strong> A tensão normal atuante é de 200 MPa e a barra está segura.'
                }
            ]
        },
        {
            id: 102,
            titulo: 'Deformação em Barra de Concreto',
            preview: 'Um pilar de concreto com 3 metros de altura e módulo de elasticidade de 25 GPa...',
            dificuldade: 'medio',
            enunciado: 'Um pilar de concreto com 3 metros de altura e módulo de elasticidade de 25 GPa é comprimido por uma carga que gera uma tensão de 8 MPa. Determine o encurtamento total do pilar.',
            solucao: [
                {
                    texto: 'Dados fornecidos:',
                    detalhes: 'Altura do pilar (L) = 3 m = 3000 mm<br>Módulo de elasticidade (E) = 25 GPa = 25.000 MPa<br>Tensão de compressão (σ) = 8 MPa'
                },
                {
                    texto: 'Calcular a deformação específica:',
                    detalhes: 'ε = σ / E<br>ε = 8 MPa / 25.000 MPa<br>ε = 0,00032 (ou 0,032%)'
                },
                {
                    texto: 'Calcular o encurtamento total:',
                    detalhes: 'ΔL = ε × L<br>ΔL = 0,00032 × 3000 mm<br>ΔL = 0,96 mm<br><br><strong>Resposta:</strong> O pilar sofrerá um encurtamento de 0,96 mm.'
                }
            ]
        },
        {
            id: 103,
            titulo: 'Cisalhamento em Pino Duplo',
            preview: 'Um pino de aço com 20 mm de diâmetro conecta duas chapas e está sujeito a cisalhamento duplo...',
            dificuldade: 'medio',
            enunciado: 'Um pino de aço com 20 mm de diâmetro conecta duas chapas e está sujeito a cisalhamento duplo por uma força de 50 kN. Sabendo que a tensão de cisalhamento admissível é de 100 MPa, verifique se o pino é adequado.',
            solucao: [
                {
                    texto: 'Calcular a área de cisalhamento:',
                    detalhes: 'Diâmetro (d) = 20 mm<br>Área de uma seção (A) = π × d² / 4<br>A = π × 20² / 4 = 314,16 mm²<br>Como é cisalhamento duplo: A_total = 2 × 314,16 = 628,32 mm²'
                },
                {
                    texto: 'Calcular a tensão de cisalhamento atuante:',
                    detalhes: 'τ = F / A_total<br>τ = 50.000 N / 628,32 mm²<br>τ = 79,6 MPa'
                },
                {
                    texto: 'Verificação:',
                    detalhes: 'Como τ = 79,6 MPa < τadm = 100 MPa, o pino é adequado.<br><br><strong>Resposta:</strong> O pino suporta com segurança a carga aplicada.'
                }
            ]
        }
    ],
    2: [ // Estruturas de Concreto
        {
            id: 201,
            titulo: 'Dimensionamento de Viga à Flexão',
            preview: 'Dimensionar uma viga simplesmente apoiada de concreto armado com vão de 5 metros...',
            dificuldade: 'dificil',
            enunciado: 'Dimensionar uma viga simplesmente apoiada de concreto armado com vão de 5 metros, submetida a uma carga uniformemente distribuída de 20 kN/m (incluindo peso próprio). Dados: fck = 30 MPa, fyk = 500 MPa, bw = 20 cm.',
            solucao: [
                {
                    texto: 'Calcular o momento fletor máximo:',
                    detalhes: 'Para viga simplesmente apoiada com carga uniformemente distribuída:<br>M_max = q × L² / 8<br>M_max = 20 × 5² / 8<br>M_max = 62,5 kN.m'
                },
                {
                    texto: 'Calcular o momento fletor de cálculo:',
                    detalhes: 'M_d = γf × M_max<br>M_d = 1,4 × 62,5 = 87,5 kN.m'
                },
                {
                    texto: 'Determinar a altura útil necessária:',
                    detalhes: 'Usando K_c = 0,8 × b_w × d² × f_cd<br>Assumindo armadura simples: d = √(M_d / (0,295 × b_w × f_cd))<br>f_cd = 30/1,4 = 21,4 MPa<br>d = √(8750000 / (0,295 × 200 × 21,4))<br>d ≈ 36,8 cm<br><br>Adotando d = 40 cm e cobrimento de 3 cm:<br>h = 43 cm<br><br><strong>Resposta:</strong> Viga com seção 20 x 45 cm (altura arredondada).'
                }
            ]
        },
        {
            id: 202,
            titulo: 'Cisalhamento em Viga',
            preview: 'Verificar a necessidade de armadura transversal em uma viga com cortante de 80 kN...',
            dificuldade: 'medio',
            enunciado: 'Uma viga de concreto (fck = 25 MPa) com seção 20x50 cm e d = 45 cm está submetida a uma força cortante de projeto de 80 kN. Verificar se é necessária armadura transversal.',
            solucao: [
                {
                    texto: 'Calcular a tensão de cisalhamento:',
                    detalhes: 'τ_wd = V_d / (b_w × d)<br>τ_wd = 80.000 / (200 × 450)<br>τ_wd = 0,89 MPa'
                },
                {
                    texto: 'Determinar a resistência do concreto ao cisalhamento:',
                    detalhes: 'τ_Rd1 = 0,25 × f_ctd<br>f_ctd = 0,15 × f_ck^(2/3) / 1,4<br>f_ctd = 0,15 × 25^(2/3) / 1,4 ≈ 0,96 MPa<br>τ_Rd1 = 0,25 × 0,96 = 0,24 MPa'
                },
                {
                    texto: 'Conclusão:',
                    detalhes: 'Como τ_wd = 0,89 MPa > τ_Rd1 = 0,24 MPa, é necessária armadura transversal (estribos).<br><br><strong>Resposta:</strong> Sim, a viga necessita de armadura transversal.'
                }
            ]
        }
    ],
    4: [ // Mecânica dos Solos
        {
            id: 401,
            titulo: 'Índice de Vazios e Porosidade',
            preview: 'Um solo possui massa específica seca de 1,6 g/cm³ e densidade relativa dos grãos de 2,65...',
            dificuldade: 'facil',
            enunciado: 'Um solo possui massa específica seca de 1,6 g/cm³ e densidade relativa dos grãos de 2,65. Calcule o índice de vazios e a porosidade do solo.',
            solucao: [
                {
                    texto: 'Dados do problema:',
                    detalhes: 'ρ_d = 1,6 g/cm³<br>G_s = 2,65<br>ρ_w = 1,0 g/cm³ (água)'
                },
                {
                    texto: 'Calcular o índice de vazios:',
                    detalhes: 'e = (G_s × ρ_w / ρ_d) - 1<br>e = (2,65 × 1,0 / 1,6) - 1<br>e = 1,656 - 1<br>e = 0,656'
                },
                {
                    texto: 'Calcular a porosidade:',
                    detalhes: 'n = e / (1 + e)<br>n = 0,656 / (1 + 0,656)<br>n = 0,656 / 1,656<br>n = 0,396 ou 39,6%<br><br><strong>Resposta:</strong> Índice de vazios = 0,656 e porosidade = 39,6%.'
                }
            ]
        }
    ]
};

let currentMateria = null;
let currentDifficulty = 'todos';

// Carregar matérias
function loadMaterias() {
    const grid = document.getElementById('materiasGrid');
    grid.innerHTML = '';
    
    materias.forEach(materia => {
        const card = document.createElement('div');
        card.className = 'materia-card';
        card.onclick = () => showExercicios(materia.id);
        card.innerHTML = `
            <div class="materia-icon">${materia.icon}</div>
            <h3>${materia.nome}</h3>
            <p>${materia.descricao}</p>
            <span class="exercicios-count">${materia.exercicios} exercícios disponíveis</span>
        `;
        grid.appendChild(card);
    });
}

// Mostrar exercícios de uma matéria
function showExercicios(materiaId) {
    currentMateria = materiaId;
    const lista = document.getElementById('exerciciosList');
    const questionDetail = document.getElementById('questionDetail');
    
    questionDetail.classList.remove('active');
    lista.innerHTML = '';
    
    const materia = materias.find(m => m.id === materiaId);
    const exs = exercicios[materiaId] || [];
    
    if (exs.length === 0) {
        lista.innerHTML = '<p style="text-align: center; color: #7f8c8d;">Em breve novos exercícios!</p>';
    } else {
        const titulo = document.createElement('h2');
        titulo.className = 'section-title';
        titulo.textContent = materia.nome;
        lista.appendChild(titulo);
        
        exs.forEach(ex => {
            if (currentDifficulty === 'todos' || ex.dificuldade === currentDifficulty) {
                const item = document.createElement('div');
                item.className = 'exercicio-item';
                item.onclick = () => showQuestionDetail(materiaId, ex.id);
                item.innerHTML = `
                    <div class="exercicio-header">
                        <span class="exercicio-titulo">${ex.titulo}</span>
                        <span class="dificuldade ${ex.dificuldade}">${ex.dificuldade.charAt(0).toUpperCase() + ex.dificuldade.slice(1)}</span>
                    </div>
                    <p class="exercicio-preview">${ex.preview}</p>
                `;
                lista.appendChild(item);
            }
        });
    }
    
    lista.classList.add('active');
    lista.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Mostrar detalhes da questão
function showQuestionDetail(materiaId, exercicioId) {
    const exs = exercicios[materiaId] || [];
    const exercicio = exs.find(e => e.id === exercicioId);
    
    if (!exercicio) return;
    
    const detail = document.getElementById('questionDetail');
    const lista = document.getElementById('exerciciosList');
    
    lista.classList.remove('active');
    
    let solucoesHTML = '';
    exercicio.solucao.forEach((step, index) => {
        solucoesHTML += `
            <div class="solution-step">
                <p><span class="step-number">${index + 1}</span><strong>${step.texto}</strong></p>
                <p>${step.detalhes}</p>
            </div>
        `;
    });
    
    detail.innerHTML = `
        <button class="back-button" onclick="backToList()">← Voltar para lista</button>
        <h2 class="question-title">${exercicio.titulo}</h2>
        <div class="question-content">
            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">📝 Enunciado</h3>
            <p>${exercicio.enunciado}</p>
        </div>
        <div class="solution-section">
            <h3 class="solution-title">✅ Resolução Completa</h3>
            <div class="solution-content">
                ${solucoesHTML}
            </div>
        </div>
    `;
    
    detail.classList.add('active');
    detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Voltar para lista
function backToList() {
    const detail = document.getElementById('questionDetail');
    const lista = document.getElementById('exerciciosList');
    
    detail.classList.remove('active');
    lista.classList.add('active');
    lista.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Filtrar por dificuldade
function filterByDifficulty(difficulty) {
    currentDifficulty = difficulty;
    
    // Atualizar botões
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Recarregar exercícios se houver matéria selecionada
    if (currentMateria) {
        showExercicios(currentMateria);
    }
}

// Buscar exercícios
function searchExercicios() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (!searchTerm) return;
    
    const lista = document.getElementById('exerciciosList');
    const questionDetail = document.getElementById('questionDetail');
    questionDetail.classList.remove('active');
    lista.innerHTML = '';
    
    const titulo = document.createElement('h2');
    titulo.className = 'section-title';
    titulo.textContent = 'Resultados da Busca';
    lista.appendChild(titulo);
    
    let found = false;
    Object.keys(exercicios).forEach(materiaId => {
        exercicios[materiaId].forEach(ex => {
            if (ex.titulo.toLowerCase().includes(searchTerm) || 
                ex.preview.toLowerCase().includes(searchTerm) ||
                ex.enunciado.toLowerCase().includes(searchTerm)) {
                found = true;
                const item = document.createElement('div');
                item.className = 'exercicio-item';
                item.onclick = () => showQuestionDetail(parseInt(materiaId), ex.id);
                item.innerHTML = `
                    <div class="exercicio-header">
                        <span class="exercicio-titulo">${ex.titulo}</span>
                        <span class="dificuldade ${ex.dificuldade}">${ex.dificuldade.charAt(0).toUpperCase() + ex.dificuldade.slice(1)}</span>
                    </div>
                    <p class="exercicio-preview">${ex.preview}</p>
                `;
                lista.appendChild(item);
            }
        });
    });
    
    if (!found) {
        lista.innerHTML += '<p style="text-align: center; color: #7f8c8d;">Nenhum resultado encontrado.</p>';
    }
    
    lista.classList.add('active');
    lista.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Buscar ao pressionar Enter
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchExercicios();
    }
});

// Inicializar
loadMaterias();