namespace SpriteKind {
    export const Building = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.destroy(mySprite2, effects.fire, 1)
    DuplicationIndex = 0
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (DuplicationIndex == 0) {
        mySprite2 = sprites.create(assets.image`MainPlayer`, SpriteKind.Player)
        mySprite2.setStayInScreen(true)
        mySprite2.setPosition(136, 55)
        controller.moveSprite(mySprite2, -50, 50)
        DuplicationIndex = 1
    }
})
let DuplicationIndex = 0
let mySprite2: Sprite = null
tiles.setCurrentTilemap(tilemap`StationGeneralLayout`)
let mySprite = sprites.create(assets.image`MainPlayer`, SpriteKind.Player)
let AlienSpawnPoint = sprites.create(assets.image`AlienSpawnPoint`, SpriteKind.Building)
controller.moveSprite(mySprite, 50, 50)
AlienSpawnPoint.setPosition(140, 55)
mySprite.setPosition(24, 55)
mySprite.setStayInScreen(false)
