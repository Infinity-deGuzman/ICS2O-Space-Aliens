/* global phaser */

// Copyright (c) 2021 Infinity de Guzman All rights reserved
//
// Created by Infinity de Guzman
// Created on May 2021
// This is the Game Scene

class GameScene extends Phaser.Scene {

  // create an alien
  createAlien () {
    const alienLocation = Math.floor(Math.random() * 1920) + 1 // random number generator for alien's location
    let alienXVelocity = Math.floor(Math.random() * 50) + 1 // can now move left and right while going down
    alienXVelocity *= Math.round(Math.random()) ? 1 : -1 // probability of going left or right is 50/50
    const anAlien = this.physics.add.sprite(alienLocation, -100, 'alien')
    anAlien.body.velocity.y = 200
    anAlien.body.velocity.x = alienXVelocity
    this.alienGroup.add(anAlien)
  }

  constructor () {
    super({key: 'gameScene'})

    this.backgroundImage = null
    this.ship = null
		this.fireMissile = false
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Game Scene')

    // images
    this.load.image('starBackground', 'assets/starBackground.png')
    this.load.image('ship', 'assets/spaceShip.png')
    this.load.image('missile', 'assets/missile.png')
    this.load.image('alien', 'assets/alien.png')
		// sound files
		this.load.audio('laser', 'assets/laser1.wav')
		this.load.audio('explosion', 'assets/barrelExploding.wav')
  }

  create (data) {
    this.background = this.add.image(0, 0, 'starBackground').setScale(2.0)
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, 'ship')

		// create a group for the missiles
		this.missileGroup = this.physics.add.group()

    // create a group for the missiles
    this.alienGroup = this.add.group()
    this.createAlien()

		// collision between missiles and aliens
		this.physics.add.collider(this.missileGroup, this.alienGroup, function(missileCollide, alienCollide) {
			alienCollide.destroy()
			missileCollide.destroy()
			this.sound.play('explosion')
			this.createAlien()
			this.createAlien()
		}.bind (this))
  }

  update (time, delta) {
    // called 60x a second
    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    const keyRightObj = this.input.keyboard.addKey('RIGHT')
		const keySpaceObj = this.input.keyboard.addKey('SPACE')

    if (keyLeftObj.isDown === true) {
      this.ship.x = this.ship.x -= 15
      if (this.ship.x < 0){
        this.ship.x = 0
      }
    }

    if (keyRightObj.isDown === true) {
      this.ship.x = this.ship.x += 15
      if (this.ship.x > 1920){
        this.ship.x = 1920
      }
    }

		if (keySpaceObj.isDown === true) {
			if (this.fireMissile === false) {
				// fire missile
				this.fireMissile = true
				const aNewMissile = this.physics.add.sprite(this.ship.x, this.ship.y, 'missile')
				this.missileGroup.add(aNewMissile)
				this.sound.play('laser')
			}
		}

		if (keySpaceObj.isUp === true) {
			this.fireMissile = false
		}

		this.missileGroup.children.each(function (item) {
			item.y = item.y - 15
			if (item.y < 0) {
				item.destroy()
			}
		})
  }
}

export default GameScene
