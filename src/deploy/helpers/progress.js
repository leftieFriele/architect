/**
 * its a progress..indicator
 */
let chalk = require('chalk')
let _log = require('log-update')

module.exports = function _progress(params, callback) {
  
  let running = false
  let text = ''

  function log(txt) {
    text = txt
    let frames = [
    "⢹",
    "⢺",
    "⢼",
    "⣸",
    "⣇",
    "⡧",
    "⡗",
    "⡏",
    "⠈",
    "⠉",
    "⠋",
    "⠓",
    "⠒",
    "⠐",
    "⠐",
    "⠒",
    "⠖",
    "⠦",
    "⠤",
    "⠠",
    "⠠",
    "⠤",
    "⠦",
    "⠖",
    "⠒",
    "⠐",
    "⠐",
    "⠒",
    "⠓",
    "⠋",
    "⠉",
    "⠈"
    ]
    let i = 0
    if (!running) {
      running = setInterval(function() {
        _log(`${chalk.cyan(frames[i = ++i % frames.length])} ${text}`)
      }, 80)
    }
  }

  /**
   * pretty print stuff to stdout
   */
  function stop() {
    _log('')
    clearInterval(running)
  }

  let {name, total} = params
  let count = 0
  return {
    tick(msg) {
      count += 1
      var msg = chalk.cyan(msg.token)
      log(`${chalk.grey(name)} ${msg}`)
      if (count===total) stop()
    }
  }
}
