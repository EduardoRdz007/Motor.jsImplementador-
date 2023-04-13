//Creacion montos minimos y maximos
const MasculinoMin = {
   "A": [100, 400, 900, 100, 600],"B": [1000, 600, 1000, 1000, 1000],"C": [400, 200, 200, 1000, 600],"D": [400, 300, 500, 900, 1000]
}

const FemeninoMin = {
   "A": [800, 800, 800, 600, 200],"B": [800, 700, 100, 600, 700],"C": [200, 900, 700, 800, 100],"D": [500, 1000, 600, 400, 700]
}

const MasculinoMax = {
   "A": [4900, 4700, 4600, 4600, 4500],"B": [4700, 4400, 5000, 4400, 4900],"C": [5000, 4700, 5000, 4200, 4600],"D": [4400, 4700, 4300, 4900, 4300]
}

const FemeninoMax = {
   "A": [4000, 4200, 4100, 4200, 4500],"B": [4700, 4200, 4500, 4300, 4400],"C": [4600, 4900, 4600, 4700, 4000],"D": [5000, 4900, 4700, 5000, 4300]
}

function calculoMotor(tipoNomina, fechaPrimerEmpleo, genero){
   let montoMinimo = 0
   let montoMáximo = 0
   let recomendacionLinea = 0
   
   let fechaActual = new Date()
   
 //Fecha a formato para trabajar
   let fechaSplit = fechaPrimerEmpleo.split(/\//)
   let fechaFormato = [ fechaSplit[1], fechaSplit[0], fechaSplit[2] ].join('/')
   let fechaPrimer = new Date(fechaFormato)
   
   let Meses = monthDiff(fechaPrimer, fechaActual)
   let TablaMeses
   if (Meses <= 26){
      TablaMeses = 0
   }else if (Meses == 27){
      TablaMeses = 1
   }else if (Meses == 28){
      TablaMeses = 2
   }else if (Meses == 29){
      TablaMeses = 3
   }else{
      TablaMeses = 4
   }
   
   function resultado(montoMinimoRes, montoMáximoRes){
      let p1
      let p2
      p1 = montoMinimoRes + (Math.sqrt(montoMáximoRes - montoMinimoRes))
      p2 = montoMinimoRes + (0.0175 * (montoMáximoRes - montoMinimoRes))
      return `Monto mínimo de crédito: $${montoMinimoRes} \nMonto máximo de crédito; $${montoMáximoRes} \nLinea de crédito optima: $${Math.max(p1, p2)} \n***********`
   }

   //Determinar creditos minimos y maximos 
   if(genero == "f"){
      if(tipoNomina == "A"){
         return resultado(FemeninoMin.A[TablaMeses], FemeninoMax.A[TablaMeses])
      }else if(tipoNomina == "B"){
         return resultado(FemeninoMin.B[TablaMeses], FemeninoMax.B[TablaMeses])
      }else if(tipoNomina == "C"){
         return resultado(FemeninoMin.C[TablaMeses], FemeninoMax.C[TablaMeses])
      }else{
         return resultado(FemeninoMin.D[TablaMeses], FemeninoMax.D[TablaMeses])
      }
   }else{
      if(tipoNomina == "A"){
         return resultado(MasculinoMin.A[TablaMeses], MasculinoMax.A[TablaMeses])
      }else if(tipoNomina == "B"){
         return resultado(MasculinoMin.B[TablaMeses], MasculinoMax.B[TablaMeses])
      }else if(tipoNomina == "C"){
         return resultado(MasculinoMin.C[TablaMeses], MasculinoMax.C[TablaMeses])
      }else{ 
         return resultado(MasculinoMin.D[TablaMeses], MasculinoMax.D[TablaMeses])
      }
   }
}


function monthDiff(mes1, mes2) {
   let months;
   months = (mes2.getFullYear() - mes1.getFullYear()) * 12;
   months -= mes1.getMonth();
   months += mes2.getMonth();
   return months <= 0 ? 0 : months;
}

console.log(calculoMotor("A", "19/01/2021", "m"))
console.log(calculoMotor("B", "20/11/1983", "f"))
console.log(calculoMotor("A", "19/09/2020", "m"))
console.log(calculoMotor("D", "12/01/2011", "m"))