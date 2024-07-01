"use strict";
const repeatString = (text, repeat) => {
    let finalText = '';
    for (let i = 0; i < repeat; i++) {
        finalText += text;
    }
    console.log(finalText);
};
repeatString('Hello!', 3);
