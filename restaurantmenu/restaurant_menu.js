const breakfastMenu = ['Pancakes', 'Eggs Toast', 'Oatmeal', 'Frenchtoast','Buns and Tea','Masala Tea','Cold coffee','Hot Chocolate with milk'];
const mainCourseMenu = ['Chicken curry', 'Pasta', 'Burger', 'Rice','Egg curry','DiamondFishfry'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad','Limesoda'];
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
