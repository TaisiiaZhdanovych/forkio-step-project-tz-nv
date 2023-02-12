// // Перевірка підтримки webp, додавання класу webp або no-webp для HTML
// export function isWebp(callback){
//     // Перевірка підтримки webp
//     let webP = new Image();
//     webP.onload = webP.onerror = function () {
//         callback(webP.height == 2);
//     };
//     webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// }
// // Додавання класу webp або no-webp для HTML
//     isWebp(function(support){
//         let className = support === true ? 'webp' : "no-webp";
//         document.documentElement.classList.add(className);
//     })