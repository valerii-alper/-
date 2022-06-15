vegetablesList = ['cabbage','avocado','tomato'];
fruitsList = ['grapes','raspberry','coconut'];
vegetablesPriceList = [8, 30, 10]; 
fruitPriceList = [20, 25, 50];  

do{
    timeOfYear = prompt("Выберите пору года (winter / summer) ?").replaceAll(" ", ""); 
} while(timeOfYear.toLowerCase() !== "summer" && timeOfYear.toLowerCase() !== "winter");

console.log(timeOfYear.toLowerCase());

if(timeOfYear === "summer"){
    koef = 0.8
} else koef = 2

console.log(koef)

// Запрашиваем у пользователя категорию, с которой он будет далeе выбирать товар: vegetables или fruits.
// Важно: 
// Продолжаем запрашивать у пользователя название категории до тех пор, пока не будет введено слово ‘vegetables’ либо ‘fruits’.
// Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до/внутри слова. 

do{
    category = prompt("Выберите товар (vegetables / fruits) ?").replaceAll(" ", ""); 
} while(category.toLowerCase() !== "vegetables" && category.toLowerCase() !== "fruits");

console.log(category)


// Запрашиваем у пользователя товар в зависимости от выбранной ранее категории.
// Для категории vegetables пользователь может ввести название товара cabbage или avocado или tomato.
// Для категории fruits пользователь может ввести название товара grapes или raspberry или coconut.
// Важно: 
// Продолжаем запрашивать у пользователя название товара до тех пор, пока не будет введено название одного из трех допустимых товаров.
// Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до/внутри слова.


switch (category) {
    case 'vegetables':
        do {
            vegetables = prompt(`Choose products from category vegetables: cabbage, avocado or tomato`, 'tomato').trim().replaceAll(` `, ``).toLowerCase();
            vegetableKey = vegetablesList.indexOf(vegetables)
            productPrice = vegetablesPriceList[vegetableKey];
        } while(vegetablesList.indexOf(vegetables)<0)
        // console.log(vegetables);
        break;
    case 'fruits':
        do {
            fruits = prompt(`Choose products from category fruits: grapes, raspberry or coconut`, 'raspberry').trim().replaceAll(` `, ``).toLowerCase();
            productPrice = fruitPriceList[fruitsList.indexOf(fruits)];
        } while(fruitsList.indexOf(fruits)===-1)
        // console.log(fruits);
        break;
    }

    do{
        amount = prompt("Введите количество товара ?").replaceAll(" ", ""); 
    } while(amount < 1 ) ;
    
    console.log(amount)

    finalPrice = productPrice * koef * amount

    console.log(finalPrice)

    if (category == 'vegetables'){
        document.write(`
          <div class="product" align="center">
          <img src="img/vegetables/${vegetables}.svg" alt="${vegetables}" width="100" height="100">
          <p>Selected product: <b>${vegetables}</b></p>
          <p>Count of ${vegetables}: <b>${amount}</b></p>
          <p>Selected period: <b>${timeOfYear}</b></p>
          <p>Selected category: <b>${category}</b></p>
          <p>Final sum: <b>${finalPrice} UAH</b></p>
        </div>
            `);} else 
            document.write(`
            <div class="product" align="center">
            <img src="img/fruits/${fruits}.svg" alt="${fruits}" width="100" height="100">
            <p>Selected product: <b>${fruits}</b></p>
            <p>Count of ${fruits}: <b>${amount}</b></p>
            <p>Selected period: <b>${timeOfYear}</b></p>
            <p>Selected category: <b>${category}</b></p>
            <p>Final sum: <b>${finalPrice} UAH</b></p>
          </div>`);
        













 