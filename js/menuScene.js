/* global phaser */

// Copyright (c) 2021 Infinity de Guzman All rights reserved
//
// Created by Infinity de Guzman
// Created on May 2021
// This is the Menu Scene

class MenuScene extends Phaser.Scene {
  constructor () {
    super({key: 'menuScene'})
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Menu Scene')
  }

  create (data) {
  }

  update (time, delta) {
  }
}

export default MenuScene
