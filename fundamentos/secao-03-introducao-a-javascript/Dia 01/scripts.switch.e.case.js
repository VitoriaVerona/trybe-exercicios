let trafficLight = "vermelho";

switch (trafficLight){
    case "vermelho":
        console.log("pare");
        break; /* se o case for true, acaba o switch */

    case "amarelo":
        console.log("atenção");
        break;

    case "verde":
        console.log("siga");
        break;

        default: /* se nenhum case for true */
            console.log("valor não identificado");
}
