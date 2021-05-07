/* global phaser */

// Copyright (c) 2021 Infinity de Guzman All rights reserved
//
// Created by Infinity de Guzman
// Created on April 2021
// This is the Splash Scene

class SplashScene extends Phaser.Scene {
  constructor () {
    super({key: 'splashScene'})
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Splash Scene')
    this.load.image('splashSceneBackground', './assets/splashSceneImage.png')
  }

  create (data) {
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'splashSceneBackground')
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }

  update (time, delta) {
    if (time > 3000) {
      this.scene.switch('titleScene')
    }
  }
}

export default SplashScene
