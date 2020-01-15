// doors
class CentralDoor {

    openDoor(rotation) {
        console.log("Central door is now open.")
        if (rotation.currentAngle !== 120) {
            console.log("Door is not usable, you are met by a brick wall.")
        } else {
            console.log("Door is usable.")
        }
    }

    useDoor() {
        // function to travel through levels
    }
}

class OuterDoor {

    openDoor(rotation) {
        console.log("Outer door is open")
        if (rotation.currentAngle !== rotation.correctAngle) {
            console.log("You can see a field of grass.")
        } else {
            console.log("You can see a field of grass lit underneath the moon.")
        }
    }

}

class TrapDoor {

    openDoor() {
        console.log("Trap door is open")
    }

}

module.exports = {
    CentralDoor: CentralDoor,
    OuterDoor: OuterDoor,
    TrapDoor: TrapDoor
}