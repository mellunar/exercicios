window.addEventListener("load", () => {
    function loop(){
        let dcron = document.getElementById("cronometro");
        let dverde = document.getElementById("verde");
        let damarelo = document.getElementById("amarelo");
        let dvermelho = document.getElementById("vermelho");
    function verde(){
    let tempo = 15;
    setInterval(function(){
        if (tempo > -1){
            dcron.innerHTML = tempo;
            dcron.style.backgroundColor = "#496914";
            dcron.style.color = "#fff";
            dverde.innerHTML = "Boa Viagem";
            dverde.style.backgroundColor = "#496914";
            damarelo.innerHTML = "";
            damarelo.style.backgroundColor = "#333";
            dvermelho.innerHTML = "";
            dvermelho.style.backgroundColor = "#333";
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
                    dcron.innerHTML = tempo;
                    dcron.style.backgroundColor = "#d1b60d";
                    dcron.style.color = "#000";
                    damarelo.innerHTML = "Atenção";
                    damarelo.style.backgroundColor = "#d1b60d";
                    dverde.innerHTML = "";
                    dverde.style.backgroundColor = "#333";
                    dvermelho.innerHTML = "";
                    dvermelho.style.backgroundColor = "#333";
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
                    dcron.innerHTML = tempo;
                    dcron.style.backgroundColor = "#9e0b0f";
                    dcron.style.color = "#fff";
                    dvermelho.innerHTML = "Pare";
                    dvermelho.style.backgroundColor = "#9e0b0f";
                    damarelo.innerHTML = "";
                    damarelo.style.backgroundColor = "#333";
                    dverde.innerHTML = "";
                    dverde.style.backgroundColor = "#333";
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