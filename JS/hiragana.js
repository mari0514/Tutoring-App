const hiragana = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん'];

const romaji = ['a', 'i', 'u', 'e', 'o', 'ka', 'ki', 'ku', 'ke', 'ko', 'sa', 'shi', 'su', 'se', 'so', 'ta', 'chi', 'tsu', 'te', 'to', 'na', 'ni', 'nu', 'ne', 'no', 'ha', 'hi', 'hu', 'he', 'ho', 'ma', 'mi', 'mu', 'me', 'mo', 'ya', 'yu', 'yo', 'ra', 'ri', 'ru', 're', 'ro', 'wa', 'wo', 'nn'];


// function displayCharacter(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }

// console.log(displayCharacter(hiragana));



const hiragabaBtn = document.getElementById('hiraganaBtn');
let counter = 0;
hiragabaBtn.addEventListener('click', () => {
    if (counter > 45) {
        counter = 0;
    }
    // console.log(hiragana[counter]);
    // console.log(romaji[counter]);
    document.getElementById('hiraganaDisplay').innerHTML = hiragana[counter] +　'　 | 　' + romaji[counter];
    counter++;

})


