// obj.forEach((e) => {
//   e.addEventListener("click", () => {
//     obj.forEach((e) => {
//       if (e.classList.contains("anim")) {
//         e.classList.remove("anim");
//       }
//     });
//     e.classList.add("anim")
//   });
// });
// function toBinary(num = 12) {
//   let result = [];
//   while (num >= 1) {
//     if (num % 2 === 0) {
//       result.push(0);
//     } else {
//       result.push(1);
//     }

//     num = Math.floor(num / 2);
//     return result.reverse().join("");
//   }
// }

const items = document.querySelectorAll("#field td");
let gamers = ["X", "O"];
start(items);

function start(items) {
  let i = 0;

  for (let item of items) {
    item.addEventListener("click", function step() {
      this.textContent = ["X", "O"][i % 2];
      this.removeEventListener("click", step);

      if (isVictory(items)) {
        alert(`${this.textContent}  скопируйте ссылку уважаемый победитель https://youtu.be/dQw4w9WgXcQ `);
      } else if (i == 8) {
        alert("пиздец,ничья");
      }

      i++;
    });
  }
}
function isVictory(items) {
  let combs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let comb of combs) {
    if (
      items[comb[0]].textContent == items[comb[1]].textContent &&
      items[comb[1]].textContent == items[comb[2]].textContent &&
      items[comb[0]].textContent != ""
    ) {
      return true;
    }
  }

  return false;
}
