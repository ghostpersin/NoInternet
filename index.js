function theThing() {
    let array = ['rock', 'paper', 'scissor'];
    randomThing = Math.floor(Math.random() * 3);

    choice = array.at(randomThing);
    console.log(choice);

    document.getElementById('choice').innerHTML = choice;
}

