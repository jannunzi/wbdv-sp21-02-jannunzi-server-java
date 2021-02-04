const states = [
  {selector: "#attract", wait: 5, title: "Start Listening"},
    {selector: ".ARC.player.HTplayer.q4-player .q4-player-box", wait: 2, title: "Player 1"},
    {selector: ".areaVideoBack", wait: 2, title: "Go Back Player 1"},
    // {selector: ".q4-players-sliding-wrapper .BEAM.player.HTplayer.q4-player:nth-child(2)", wait: 2, title: "Player 1"},
    // {selector: ".areaVideoBack", wait: 2, title: "Go Back"},
//  {selector: ".q2-top-menu-item.q2-top-menu-listen", wait: 2, title: "Listen"},
  {selector: ".q2-top-menu-item.q2-top-menu-about", wait: 2, title: "About Sonos"},
    {selector: ".q2-about-menu-item:nth-child(2)", wait: 1, title: "Easy to use"},
    {selector: ".q2-about-menu-item:nth-child(3)", wait: 1, title: "Listen your way"},
    {selector: ".q2-about-menu-item:nth-child(4)", wait: 1, title: "Brilliant sound"},
    {selector: ".q2-about-menu-item:nth-child(1)", wait: 1, title: "Why Sonos"},
  {selector: ".q2-top-menu-item.q2-top-menu-features",  wait: 1, title: "Features"},
    {selector: ".q2-catalog-right-scroll.q2-features.q2-features-view",  wait: 1, title: "Scroll Right 1"},
    {selector: ".q2-catalog-right-scroll.q2-features.q2-features-view",  wait: 1, title: "Scroll Right 2"},
    {selector: ".q2-catalog-right-scroll.q2-features.q2-features-view",  wait: 1, title: "Scroll Right 3"},
    {selector: ".q2-catalog-right-scroll.q2-features.q2-features-view",  wait: 1, title: "Scroll Right 4"},
  {selector: ".q2-top-menu-item.q2-top-menu-listen", wait: 1, title: "Listen"},
    {selector: ".BEAM.player.HTplayer.q4-player .q4-player-box", wait: 2, title: "Player 2"},
    {selector: ".areaVideoBack", wait: 2, title: "Go Back Player 2"},
    // {selector: ".q4-players-sliding-wrapper .player.q4-player:nth-child(2) .q4-player-box", wait: 2, title: "Player 1"},
    // {selector: ".areaVideoBack", wait: 2, title: "Go Back"},
]
let rules = []
let $report = $(`
<textarea id="test-report" style='z-index:1000; position: fixed; left:0px; top:0px; width: 200px; height: 200px; opacity: 70%'></textarea>
<div id="table-report" style='z-index:1000; position: fixed; left:200px; top:0px; bottom: 0px; width: 500px; overflow-y: scroll; background-color: white; opacity: 70%'>
  <table>
      <tbody id="table-body"></tbody>
  </table>
</div>
`)
let $tableBody
const main = () => {
  $("body").append($report)
  $tableBody = $("#table-body")
  // fetch("test/field-day.json")
  fetch("http://wd-sp21-02-java.herokuapp.com/test/field-day.json")
    .then(response => response.json())
    .then(rls => {
      rules = rls
    })
  runTest()
  // $("body").on("click", handleClick)
}
$(main)

const renderReport = (report) => {
  const reportTable = []
  let maxScore = 0
  Object.keys(report).forEach(rule => {
    const score = report[rule]
    reportTable.push({rule: rule, score: score})
    maxScore = maxScore > score ? maxScore : score
  })
  reportTable.sort((a, b) => b.score - a.score)
  // console.log(reportTable)
  $tableBody.empty()
  reportTable.forEach(row => {
    const percentScore = row.score*100.0/maxScore
    const $row = $(`
      <tr style="border-bottom: white; border-bottom-width: 1px; border-bottom-style: solid">
          <td>${row.rule}</td>
          <td width="200px">
              <div style="width: ${percentScore}%; background-color: red">
                  ${row.score}
              </div>
          </td>
      </tr>`)
    $tableBody.append($row)
  })
}

let report = {}
const runTest = () => {
  let wait = 0
  states.forEach((state, ndx) => {
    wait += state.wait
    setTimeout(() => {
      $report.append(`${state.title}\n`)
      click(state)
      rules.forEach(rule => {
        const length = $(rule).length
        if(!report[rule]) {
          report[rule] = 0
        }
        if(length !== 0) {
          // $report.append(`  ${rule}\n`)
          report[rule]++
        }
      })
      console.log("=========")
      renderReport(report)
    }, ndx * 4000)
  // }, wait * 1000)
  })
}

const handleClick = (e) => {
  console.log(e)
  console.log(e.target)
}

const click = (state) => {
  $(state.selector).css({
    "box-shadow": "0 4px 8px 0 lightgrey",
    "background-color": "#aaaaaa"
  })
  domElement = $(state.selector)[0]

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
        console.log(state)
        console.log($(state.selector))
        console.log(e)
      }
  }
}
