/**
 * steer right
 */
/**
 * steer left
 */
/**
 * accelerator button
 */
input.onButtonPressed(Button.A, function () {
    keyboard.sendString("w")
})
/**
 * brakes
 */
input.onButtonPressed(Button.B, function () {
    keyboard.sendString("s")
})
basic.forever(function () {
    if (input.rotation(Rotation.Roll) > 35) {
        keyboard.sendString("d")
    }
})
basic.forever(function () {
    if (input.rotation(Rotation.Roll) < -35) {
        keyboard.sendString("a")
    }
})
