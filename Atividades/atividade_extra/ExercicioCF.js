function confirmarCurso() {
    var select = document.getElementById("cursoSelect");
    var cursoSelecionado = select.value;
    var cursoTexto = select.options[select.selectedIndex].text;

    if (cursoSelecionado) {
        var confirmar = window.confirm("Deseja realmente abrir a janela para o curso " + cursoTexto + "?");

        if (confirmar) {
            var largura = 600;
            var altura = 300;
            var esquerda = (window.innerWidth - largura) / 2;
            var topo = (window.innerHeight - altura) / 2;
            var url = "cursos/" + cursoSelecionado + ".html";
            window.open(url, "_blank", `width=${largura},height=${altura},top=${topo},left=${esquerda}`);
        } else {
            select.value = "";
        }
    }
}
