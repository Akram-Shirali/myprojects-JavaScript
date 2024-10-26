const containerEl = document.querySelector('.container');

const careers = ["YouTuber","Freelancer","Instructor","Web Developer"];

let careerIndex = 0;
let charactorIndex = 0;

updateText();
function updateText() {
    charactorIndex++
    containerEl.innerHTML = `<h1>I am ${careers[careerIndex].slice(0,1) === 'I' ? 'an' : 'a'} ${careers[careerIndex].slice(0,charactorIndex)}</h1>`;
    
    if (charactorIndex === careers[careerIndex].length)
        {careerIndex++
        charactorIndex = 0;
    }

    if
        (careerIndex === careers.length) {
            careerIndex = 0;
        }

        setTimeout(updateText , 400);
    }
    


