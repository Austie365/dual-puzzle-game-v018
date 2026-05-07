// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "StationGeneralLayout":
            case "StationGeneralLayout1":return tiles.createTilemap(hex`0a000800020404040404040404080105050505050505050301050505050505050503010505050505050505030105050505050505050301050505050505050503070606060606060606090a0a0a0a0a0a0a0a0a0a`, img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile1,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "baseTransparency16":
            case "transparency16":return transparency16;
            case "WallLeft":
            case "tile2":return tile2;
            case "CornerTopLeft":
            case "tile3":return tile3;
            case "WallRight":
            case "tile4":return tile4;
            case "WallTop":
            case "tile5":return tile5;
            case "WallBottom":
            case "tile6":return tile6;
            case "FloorTile":
            case "tile1":return tile1;
            case "CornerBottomLeft":
            case "tile7":return tile7;
            case "CornerTopRight":
            case "tile8":return tile8;
            case "CornerBottomRight":
            case "tile9":return tile9;
            case "Space":
            case "tile10":return tile10;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
