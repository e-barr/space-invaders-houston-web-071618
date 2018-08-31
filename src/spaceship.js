class Spaceship {
  constructor(name, crewMembers, phasersCount, shieldCount) {
    this.name = name
    this.crew = crewMembers
    this.phasers = phasersCount
    this.shields = shieldCount
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.docked = (this.crew.length === 0)
    this.phasersCharge = "uncharged"
    this.changeCrewMembersShip()
  }

  changeCrewMembersShip() {
    this.crew.forEach(crewMember => { crewMember.currentShip = this })
  }

}
