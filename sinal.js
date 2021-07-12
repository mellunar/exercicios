window.addEventListener("load", () => {
    function loop(){
        let dcron = document.getElementById("cronometro");
        let dverde = document.getElementById("verde");
        let damarelo = document.getElementById("amarelo");
        let dvermelho = document.getElementById("vermelho");

        function configurar(elemento, texto, bckcolor, cor) {
        elemento != "" || texto != "" ? elemento.innerHTML = texto : ""
        elemento != "" && bckcolor != "" ? elemento.style.backgroundColor = bckcolor : ""
        elemento != "" && cor != "" ? elemento.style.color = cor : ""
        }
        
        function verde(){
        let tempo = 15;
        setInterval(function(){
        if (tempo > -1){
            configurar(dcron,"","#496914", "#fff")
            dcron.innerHTML = tempo;            
            configurar(dverde, "Boa Viagem", "#496914", "#fff")
            configurar(damarelo, "", "#333", "")
            configurar(dvermelho, "", "#333", "")
        }
        tempo--;
        },1000);
        }
    verde();
    setTimeout(amarelo,16000);
    setTimeout(vermelho,20000);
    function amarelo(){
        function cronometro(){
            let tempo = 3;
            setInterval(function(){
                if (tempo > -1){
                    configurar(dcron,"","#d1b60d", "#000")
                    dcron.innerHTML = tempo;            
                    configurar(dverde, "", "#333", "")
                    configurar(damarelo, "Atenção", "#d1b60d", "#000")
                    configurar(dvermelho, "", "#333", "")
                }
                tempo--;
            },1000);
        }
        cronometro();
    }
    function vermelho(){
        function cronometro(){
            let tempo = 15;
            setInterval(function(){
                if (tempo > -1){
                    configurar(dcron,"","#9e0b0f", "#fff")
                    dcron.innerHTML = tempo;            
                    configurar(dverde, "", "#333", "")
                    configurar(damarelo, "", "#333", "")
                    configurar(dvermelho, "Pare", "#9e0b0f", "#fff")
                }
                tempo--;
            },1000);
            
        }
        cronometro();
    }
    }
    loop();
    setInterval(loop, 36000)
});