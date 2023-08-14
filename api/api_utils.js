export const getUser = (userName) => {
    fetch(`http://192.168.48.68:3000/api/v1/mosaic/users/Clay`)
        .then(response => response.json())
        .then(users => console.log(users))
}

export const getTile = (tileId) => {
    fetch(`http://192.168.48.68:3000/api/v1/mosaic/tile/${tileId}`)
        .then(response => response.json())
        .then(tile => {console.log(tile)})
}
