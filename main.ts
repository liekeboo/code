let code = 0
basic.showLeds(`
    . # # # .
    # . . . .
    # . . . .
    # . . . .
    . # # # .
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.pause(200)
        code = 1
        basic.clearScreen()
        basic.pause(500)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.pause(200)
        code = 2
        basic.clearScreen()
        basic.pause(500)
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    }
    if (input.logoIsPressed()) {
        basic.pause(200)
        code = 3
        basic.clearScreen()
        basic.pause(500)
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.pause(200)
        code = 4
        basic.clearScreen()
        basic.pause(500)
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    }
    if (input.logoIsPressed()) {
        basic.pause(200)
        code = 5
        basic.clearScreen()
        basic.pause(500)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # . # #
            # # # # #
            # # # # #
            `)
    }
})
