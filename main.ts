input.onButtonPressed(Button.A, function () {
    if (false) {
        radio.sendString("")
        radio.setGroup(1)
    } else {
        while (true) {
            radio.sendValue("name", 0)
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
    }
})
music.playMelody("- - - - - - - - ", 120)
led.unplot(0, 0)
basic.forever(function () {
    led.unplot(0, 0)
})
