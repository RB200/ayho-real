const fs = require('fs')

var imageIndex = 0

var galleryDiv = document.getElementsByClassName('gallery')[0]
//galleryDiv.style.background = 'red'
var backwardButton = document.getElementsByClassName('back-button')[0]
var forwardButton = document.getElementsByClassName('next-button')[0]
var imgToShow = document.getElementsByClassName('display-name')[0]
var listOfImgs = []

backwardButton.addEventListener('click',()=>{
    imageIndex -= 1
    console.log(imageIndex)
})

forwardButton.addEventListener('click',()=>{
    imageIndex += 1
    console.log(imageIndex)
})

