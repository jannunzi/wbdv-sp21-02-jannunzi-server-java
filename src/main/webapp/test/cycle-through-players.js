(function(){
  const main = () => {
    runTest()
  }
  $(main)

  const runTest = () => {
    let wait = 0
    setTimeout(() => {
      click("#attract")
      cycleThroughPlayers()
    }, 2000)
  }

  const cycleThroughPlayers = () => {
    const players = $(".q4-player-box")
    console.log(players)
    for(let p=0; p<players.length; p++) {
      const player = players[p]
      setTimeout(() => {
        click(player)
      }, p * 1000)
    }
  }

  const click = (selector) => {
    domElement = $(selector)[0]

    if(document.createEvent) {
      const event = document.createEvent("MouseEvents");
      event.initMouseEvent(
        "click",
        true, true,
        window,
        0, 0,0, 0, 0,
        false, false, false, false, 0, null);
      try {
        const allowDefault = domElement.dispatchEvent(event);
      } catch (e) {
        console.log(e)
      }
    }
  }
})()
