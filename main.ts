let namerana_ciara = 0
basic.forever(function () {
    namerana_ciara = Rover.LineTracking()
    if (namerana_ciara == 0) {
        Rover.MotorRunDual(80, 80)
    }
    if (namerana_ciara == 1) {
        Rover.MotorRunDual(80, -80)
    }
    if (namerana_ciara == 2) {
        Rover.MotorRunDual(100, 100)
    }
    if (namerana_ciara == 3) {
        Rover.MotorRunDual(80, 0)
    }
    if (namerana_ciara == 4) {
        Rover.MotorRunDual(-80, 80)
    }
    if (namerana_ciara == 5) {
        Rover.MotorRunDual(100, 100)
    }
    if (namerana_ciara == 6) {
        Rover.MotorRunDual(0, 80)
    }
    if (namerana_ciara == 7) {
        Rover.MotorRunDual(100, 100)
    }
})
