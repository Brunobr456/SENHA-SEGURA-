const senha = document.getElementById("senha");
const progresso = document.getElementById("progresso");
const nivel = document.getElementById("nivel");
const pontuacao = document.getElementById("pontuacao");
const pontuacao= document.getElementById("pontuacao");

function analisarSenha() {

    let valor = senha.value;

    let pontos = 0;

    // Critério 1 - Tamanho
    if (valor.length >= 8) {
        pontos += 20;
        document.getElementById("c1").innerHTML = "✅ Pelo menos 8 caracteres";
    } else {
        document.getElementById("c1").innerHTML = "❌ Pelo menos 8 caracteres";
    }

    // Critério 2 - Maiúscula
    if (/[A-Z]/.test(valor)) {
        pontos += 20;
        document.getElementById("c2").innerHTML = "✅ Letra maiúscula";
    } else {
        document.getElementById("c2").innerHTML = "❌ Letra maiúscula";
    }

    // Critério 3 - Minúscula
    if (/[a-z]/.test(valor)) {
        pontos += 20;
        document.getElementById("c3").innerHTML = "✅ Letra minúscula";
    } else {
        document.getElementById("c3").innerHTML = "❌ Letra minúscula";
    }

    // Critério 4 - Número
    if (/[0-9]/.test(valor)) {
        pontos += 20;
        document.getElementById("c4").innerHTML = "✅ Número";
    } else {
        document.getElementById("c4").innerHTML = "❌ Número";
    }

    // Critério 5 - Símbolo
    if (/[^A-Za-z0-9]/.test(valor)) {
        pontos += 20;
        document.getElementById("c5").innerHTML = "✅ Símbolo especial";
    } else {
        document.getElementById("c5").innerHTML = "❌ Símbolo especial";
    }

    progresso.style.width = pontos + "%";
    pontuacao.innerHTML = "Pontuação: " + pontos + " / 100";

    if (pontos <= 20) {
        progresso.style.background = "#ef4444";
        nivel.innerHTML = "🔴 Muito Fraca";
    }

    else if (pontos <= 40) {
        progresso.style.background = "#f97316";
        nivel.innerHTML = "🟠 Fraca";
    }

    else if (pontos <= 60) {
        progresso.style.background = "#eab308";
        nivel.innerHTML = "🟡 Média";
    }

    else if (pontos <= 80) {
        progresso.style.background = "#22c55e";
        nivel.innerHTML = "🟢 Forte";
    }

    else {
        progresso.style.background = "#16a34a";
        nivel.innerHTML = "🟢 Muito Forte";
    }

}

function mostrarSenha() {

    if (senha.type == "password") {
        senha.type = "text";
    } else {
        senha.type = "password";
    }

}

function gerarSenha() {

    const caracteres =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*?";

    let novaSenha = "";

    for (let i = 0; i < 14; i++) {

        let indice = Math.floor(Math.random() * caracteres.length);

        novaSenha += caracteres[indice];

    }

    senha.value = novaSenha;

    analisarSenha();

}
