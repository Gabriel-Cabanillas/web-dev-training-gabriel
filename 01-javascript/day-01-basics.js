/* Comando para ejecutar: node 01-javascript/day-01-basics.js */

/* Calcular descuento 

Validaciones:

- Si el precio es menor o igual a 0, regresar `"Precio inválido"`.
- Si el descuento es menor a 0 o mayor a 100, regresar `"Descuento inválido"`.

*/

// Función de calcular descuento
function calculateDiscount(price, discountPercentage) {
    // 1. Validación de seguridad (Edge cases)
    if (discountPercentage < 0 || discountPercentage > 100) {
        return "Descuento inválido";
    }
    
    if (price <= 0) {
        return "Precio inválido";
    }

    // 2. Lógica de negocio
    const discount = (price * discountPercentage) / 100;
    const priceWithDiscount = price - discount;

    // 3. Retorno del valor final
    return priceWithDiscount;
}

// Pruebas de consola
console.log(calculateDiscount(1000, 20));   // 800
console.log(calculateDiscount(100, 10));    // 90
console.log(calculateDiscount(1000, 120));  // Descuento inválido

/* La función se llama calculateDiscount */

/* Se declaran dos variables "price" y "discountPercentage" */

/* Se crea una constante llamada "discount" que es igual al precio por el descuento 
que se desea aplicar y se divide entre 100 para saber el descuento que se le hace */

/* Despues se crea otra constante llamda "priceWhitDiscount" que practicamente va a 
guardar el precio con descuento que es igual al precio menos al descuento de la anterior
constante*/
/* Por ultimo va a retornar el precio con descuento que es la constante "priceWhitDiscount" */






// -----------------------------------------------------------------------------------------------






/* Validar edad

Reglas:

- Menor de 0: `"Edad inválida"`
- Menor de 18: `"Acceso denegado"`
- 18 o más: `"Acceso permitido"`

*/

// Función validar edad
function canAccess(age){

    // 1. Primer if para que de una salida de edad inválida si la edad es menor o igual a 0
    if(age < 0){
        return "Edad inválida"
    };

    // 2. Segundo if para que de una salida de acceso denegado si la edad es menor a 18
    if(age < 18){
        return "Acceso denegado"
    }

    // 3. Tercer if para que de una salida de acceso permitido si edad es igual o mayor a 18
    if(age >= 18){
        return "Acceso permitido"
    }


}


// Pruebas de consola
console.log(canAccess(18)); // Acceso permitido
console.log(canAccess(17)); // Acceso denegado
console.log(canAccess(-2)); // Edad inválida






// -----------------------------------------------------------------------------------------------





/* Calcular mensualidad

Reglas:

- Si `months` es 0, regresar error.
- Si `months` es 1, regresar el total.
- Si `months` es mayor a 1, dividir total entre meses.

*/

function calculateMonthlyPayment(total, months){

    // 1. Validar si months es 0
    if(months === 0){
        return "Meses inválidos"
    }

    // 2. Validar si months es 1
    if(months === 1){
        return total
    }

    // 3. Si no pasó lo anterior, calcular el total / months
    const monthlyPayment = total / months;
    
    return monthlyPayment;
}


// Prueba de consola
console.log(calculateMonthlyPayment(1200, 12)); // debería dar 100
console.log(calculateMonthlyPayment(1200, 1));  // debería dar 1200
console.log(calculateMonthlyPayment(1200, 0));  // debería dar un error/mensaje






// -----------------------------------------------------------------------------------------------





/* Estado de pago

Debe regresar:

- `"Pendiente"` si no ha pagado nada.
- `"Parcial"` si pagó algo pero no todo.
- `"Pagado"` si pagó completo.
- `"Pago excedido"` si pagó más de lo debido.

#### Criterio de aprobación

Puedes avanzar si puedes explicar qué hace cada función, qué pasa si los datos llegan mal y por qué usaste `if` o `switch`.

*/

function getPaymentStatus(amountPaid, totalAmount) {
  // 1. Si no ha pagado nada
  if(amountPaid === 0){
    return "Pendiente"
  }

  // 2. Si pagó algo pero menos del total
  if(amountPaid < totalAmount){
    return "Parcial"
  }

  // 3. Si pagó exactamente el total
  if(amountPaid === totalAmount){
    return "Pagado"
  }

  // 4. Si pagó más del total
  if(amountPaid > totalAmount){
    return "Pago excedido"
  }
}

// Prueba consola
console.log(getPaymentStatus(0, 1000));     // Pendiente
console.log(getPaymentStatus(500, 1000));   // Parcial
console.log(getPaymentStatus(1000, 1000));  // Pagado
console.log(getPaymentStatus(1200, 1000));  // Pago excedido

/* El "amountPaid"  es el importe pagado y el "totalAmount" es el importe total;
entonces en el ejemplo de (0, 1000) 0 es el "amountPaid" y el 1000 es el "totalAmount" */