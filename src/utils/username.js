const ADJECTIVES = [
    'imminent',
    'adaptable',
    'venomous',
    'shaggy',
    'robust',
    'oceanic',
    'invincible',
]

const OBJECTS = [
    'stickynote',
    'boombox',
    'book',
    'sodacan',
    'charger',
    'headphones',
    'tomato'
]

function genRandomUsername() {
    const adj = ADJECTIVES[Math.floor(Math.random() * 7)]
    const obj = OBJECTS[Math.floor(Math.random() * 7)]

    return `${adj}-${obj}`
}

module.exports = {
    genRandomUsername
}