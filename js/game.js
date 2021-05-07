/* global phaser */

// Copyright (c) 2021 Infinity de Guzman All rights reserved
//
// Created by Infinity de Guzman
// Created on April 2021
// This is the Phaser3 configuration file

import SplashScene from './splashScene.js'
import TitleScene from './titleScene.js'

// Our Game Scene
const splashScene = new SplashScene()
const titleScene = new TitleScene()

//* Game Scene */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  // Set backgroundColor
  backgroundColor: 0xffffff,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)

// Load scenes
// NOTE: remember any "key" is global and CANNOT be reused!
game.scene.add('splashScene', splashScene)
game.scene.add('titleScene', titleScene)

// Start title
game.scene.start('splashScene')
