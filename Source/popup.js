function configureReplacement() {
 let opts = document.getElementById("replacement"), blackBile, phlegm, blood, yellowBile
 switch (opts) {
  case "tmnt":
   blackBile = "Leonardo"
   phlegm = "Donatello"
   blood = "Raphael"
   yellowBile = "Michelangelo"
   break
  case "sex-city":
   blackBile = "Charlotte"
   phlegm = "Carrie"
   blood = "Miranda"
   yellowBile = "Samantha"
   break
  case "humors":
   blackBile = "Black Bile"
   phlegm = "Phlegm"
   blood = "Blood"
   yellowBile = "Yellow Bile"
   break
  case "adjectives":
   blackBile = "Melancholic"
   phlegm = "Phlegmatic"
   blood = "Sanguine"
   yellowBile = "Choleric"
 }
 export default {blackBile}
 export default {phlegm}
 export default {blood}
 export default {yellowBile}

}