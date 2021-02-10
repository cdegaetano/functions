input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.No)
    basic.pause(5)
    stepDown()
})
function stepDown () {
    for (let index = 0; index <= 4; index++) {
        music.playTone(index * 500 + 500, 100)
        basic.pause(100)
    }
}
music.setBuiltInSpeakerEnabled(true)
