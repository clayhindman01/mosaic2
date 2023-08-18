import { Image } from "react-native"

export const getUser = () => {
    fetch(`http://10.0.0.68:3000/api/v1/mosaic/users/Clay`)
        .then(response => response.json())
        .then(users => {console.log(users)
            // console.log(users.json)
        })
}

export const getTile = (tileId) => {
    fetch(`http://192.168.48.68:3000/api/v1/mosaic/tile/${tileId}`)
        .then(response => response.json())
        .then(tile => {console.log(tile)})
}

export const createTiles = (photoURL) => {
    var { mosaicWidth, mosaicHeight } = 0 
    Image.getSize(
        "file:///C:/gitrepos/mosaic2/assets/testProfile.jpg",
        (width, height) => {
            mosaicWidth = width
            mosaicHeight = height
        },
        (error) => console.warn(error)
    )
    console.log("Width: ", mosaicWidth, " Height: ", mosaicHeight)
}