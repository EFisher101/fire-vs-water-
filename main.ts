controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 3 3 3 3 3 . . . . . . . . 
        3 3 3 3 3 3 . . 3 . . . . . . . 
        3 . . 3 3 3 3 . . 3 . . . . . . 
        3 3 3 3 . . 3 3 3 3 . . . . . . 
        3 . . 3 3 3 3 3 3 . . . . . . . 
        3 3 3 3 3 3 3 . . . . . . . . . 
        . . . . 3 . . 3 3 3 3 3 . . . . 
        . . . . . 3 3 . . . . 3 . . . . 
        . . . . . . . 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, person, 0, -140)
    projectile.startEffect(effects.coolRadial, 100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    projectile.destroy(effects.spray, 500)
    projectile.startEffect(effects.spray, 500)
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let person: Sprite = null
let cake = [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 5 . . . . . . 
    . . . . . . f f 5 5 . . . . . . 
    . . . . f f 3 5 f 5 f f f f . . 
    . . . . f 3 3 f f f 3 . . . f . 
    . . . f 5 . 5 f . 5 f . . . . f 
    . . . f 5 5 f f 5 5 f . . . . f 
    . . . f 3 5 f 5 5 . f . . . . f 
    . . . f 5 . f 3 . f f . . . f f 
    . . . . f f . f f f 3 3 f f . . 
    . . . . 5 f f f f f f f . . . . 
    . . . . 5 5 5 5 5 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . f f . . . . f . . . . . . 
    . . . f . . . . . . f . . . . . 
    . . f . . f f 3 . . . f . . . . 
    . . f . f 3 3 3 3 . . . f . . . 
    . . f . f 3 3 . . 3 . . f . . . 
    . . f . f 3 3 . . 3 . . f . . . 
    . . f . f 3 3 . . 3 . . f . . . 
    . . . f 3 f 3 3 3 3 3 f f . . . 
    . . . f f . f f f f f f f 3 3 . 
    . . . . . f f f f f f f 3 3 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . f f f f . . . . 
    . . . . . . . f . 3 3 . f 3 . . 
    . . . . . . f 3 3 . . . f 3 . . 
    . . . . . f f f f . . . f . 3 . 
    . . . . f f 3 f f f f f f 3 . . 
    . . . . f f f . 3 . . . f f . . 
    . . . . f f . . . . . f . 3 f . 
    . . . . f . f . . . . f 3 . . f 
    . . . . . f . f . . f . 3 . . f 
    . . . . . f f . f f 3 3 . . . f 
    . . . . . . f f f f . . . f f . 
    . . . . . . . . . . f f f . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f . . . . . . . . 
    . . . . f . . . f . . . . . . . 
    . . . f . . . . . f . . . . . . 
    . . . f . 3 3 3 3 3 f . . . . . 
    . . . f . f f 3 3 . f . . . . . 
    . . . f . f . f . 3 3 f . . . . 
    . . . f . f . . . . . f . . . . 
    . . . . f f 3 . . . f 3 . . . . 
    . . . . . f . 3 . . f 3 . . f f 
    . . . . . f f . 3 3 f f f f . . 
    . . . . . f . f f f f . . . . . 
    . . . . . f . . f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . 3 3 3 f . . . . . . . . . 
    . . . 3 . . f 3 f f f f f . . . 
    . . . 3 . f . f . 3 . . . f . . 
    . . . . 3 f 3 f 3 3 3 . . f . . 
    . . . . 3 f f . . . . 3 . . f . 
    . . . . 3 f f . . . . 3 . . f . 
    . . . . . f f 3 . . . 3 . . f . 
    . . . . . 3 f f 3 . . 3 . f . . 
    . . . . . . 3 3 f f 3 3 . f f . 
    . . . . . . . . . f f f f 3 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . 3 3 3 . . . . . 
    . . . . . . . . 3 . 3 . . . . . 
    . . . . . . . 3 . f f f . . . . 
    3 . . . . . f f f . . 3 f . . . 
    3 3 3 . f f f . . f . 3 f . . . 
    . 3 . f . f 3 3 3 f . 3 . f . . 
    . . f 3 3 f 3 3 3 f 3 3 . f . . 
    . . f . 3 f 3 3 . . 3 . f . . . 
    . . f f f f f f f f f 3 f . . . 
    . . f 3 . f . . . 3 . f f . . . 
    . . f f . 3 f . . 3 f 3 f . . . 
    . f . 3 f f f f f f f f f . . . 
    . f . 3 . . . 3 3 3 3 f . . . . 
    f f f f f f f f f f f 3 . . . . 
    . . . 3 . . . . . . . . . . . . 
    . . . 3 3 . . . . . . . . . . . 
    `
]
person = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f 4 4 4 4 f f . . . . 
    . . . f 4 4 4 f f 4 4 4 f . . . 
    . . f f f f f 5 5 f f f f f . . 
    . . f f 4 5 4 5 5 4 5 4 f f . . 
    . . f 4 5 f 5 f f 5 f 5 4 f . . 
    . . f f f 5 5 4 4 5 5 f f f . . 
    . f f 4 f 5 f 4 4 f 5 f 4 f f . 
    . f 4 4 f f 4 4 4 4 f 4 4 4 f . 
    . . f 4 4 4 4 4 4 4 4 4 4 f . . 
    . . . f 4 4 4 4 4 4 4 4 f . . . 
    . . 8 d f f f f f f f f d 8 . . 
    . . d 4 f 8 8 8 8 8 8 f 4 d . . 
    . . d d f 9 9 9 9 9 9 f d d . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(person, 100, 100)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(person)
person.setStayInScreen(true)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(cake[randint(0, cake.length - 1)], 0, 75)
    projectile.setKind(SpriteKind.Enemy)
    projectile.x = randint(10, 150)
})
