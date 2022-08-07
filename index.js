const game = document.getElementById("game")
const scoreDisplay = document.getElementById("score")

const jeopardyCatagories = [
    {
        genre: "WHO",
        questions: [
            {
                questions: "Who wrote Harry Potter",
                answers: ["author", "apples"],
                correct: "author",
                level:"easy",
            },
            {
                questions: "Who wrote the Bible",
                answers: ["author", "authors"],
                correct: "authors",
                level:"medium",
            },
            {
                questions: "Who wrote the phone book",
                answers: ["author", "authors"],
                correct: "authors",
                level:"hard",
            },
        ],
    },

    {
        genre: "WHERE",
        questions: [
            {
                questions: "WHERE IS POOP",
                answers: ["TOILET", "PIE"],
                correct: "TOILET",
                level:"easy",
            },
            {
                questions: "Where are you",
                answers: ["here", "there"],
                correct: "here",
                level:"medium",
            },
            {
                questions: "Where am i",
                answers: ["here", "no"],
                correct: "no",
                level:"hard",
            },
        ],
    },

    {
        genre: "WHEN",
        questions: [
            {
                questions: "WHEN IS MAY",
                answers: ["IN MAY", "IN JUNE"],
                correct: "IN MAY",
                level:"easy",
            },
            {
                questions: "When is june",
                answers: ["june", "2023"],
                correct: "june",
                level:"medium",
            },
            {
                questions: "When is now",
                answers: ["it just was", "it is"],
                correct: "it just was",
                level:"hard",
            },
        ],
    },
    
    
    {
        genre: "WHAT",
        questions: [
            {
                questions: "WHAT IS THIS",
                answers: ["THIS IS THAT", "BEEP"],
                correct: "THIS IS THAT",
                level:"easy",
            },
            {
                questions: "What do you want",
                answers: ["world domination", "the spins"],
                correct: "world domination",
                level:"medium",
            },
            {
                questions: "What is the phone book",
                answers: ["the phone book", "a book phone"],
                correct: "the phone book",
                level:"hard",
            },
        ],
    },
    
    {
        genre: "WHY",
        questions: [
            {
                questions: "WHY IS IT",
                answers: ["BECAUSE", "IS IT THOUGH"],
                correct: "BECAUSE",
                level:"easy",
            },
            {
                questions: "Why tho",
                answers: ["idk", "lol"],
                correct: "idk",
                level:"medium",
            },
            {
                questions: "Why is this being hard coded",
                answers: ["ouch", "practice"],
                correct: "practice",
                level:"hard",
            },
        ],
    },

]

//comment
// so much change