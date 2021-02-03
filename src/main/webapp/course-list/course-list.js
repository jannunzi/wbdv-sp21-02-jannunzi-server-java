// alert("Welcome to JavaScript!")
// console.log("Welcome to the JavaScript console!!!")
var myHeader = jQuery("h1")
// myHeader.remove()
// jQuery("h1")
myHeader
  .html("Course List Editor!!!!")
  .append(" - add/remove courses")
  .prepend("Welcome to the ")
  .css("background-color", "blue")
  .click(function (event) {
    // alert("Header was clicked!!!")
    console.log(event.target)
    var h1 = jQuery(event.target)
    h1.css("background-color", "green")
  })
//
var tableRows = jQuery("#table-rows")
// tableRows.remove()

var courses = [
  {title: "CS4550", section: "02", seats: 23, semester: "Spring"},
  {title: "CS2345", section: "03", seats: 34, semester: "Spring"},
  {title: "CS3456", section: "04", seats: 45, semester: "Spring"},
  {title: "CS5610", section: "05", seats: 56, semester: "Spring"},
  {title: "CS5200", section: "06", seats: 67, semester: "Spring"},
]

function renderCourses(courses) {
  tableRows.empty()
  for(var i=0; i<courses.length; i++) {
    var course = courses[i]
    tableRows
      .prepend(`
      <tr>
          <td>${course.title}</td>
          <td>${course.section}</td>
          <td>${course.seats}</td>
          <td>${course.semester}</td>
          <td>
              <button id="${i}" class="neu-delete-btn">Delete</button>
              <button>Select</button>
          </td>
      </tr>
      `)
  }
  $(".neu-delete-btn").click(function (event) {
    var button = $(event.target)
    var id = button.attr("id")
    console.log(id)
    courses.splice(id, 1)
    renderCourses(courses)
  })
}
renderCourses(courses)

var createBtn = $(".jga-create-btn")
createBtn.click(function () {
  // alert("create course")
  var newCourse = {
    title: "NEW COURSE",
    section: "NEW SECTION",
    seats: 12,
    semester: "SPRING"
  }
  courses.push(newCourse)
  renderCourses(courses)
})
