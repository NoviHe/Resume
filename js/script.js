$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 600) {
        $(".fixed-top").addClass("navbar-light bg-light").removeClass("navbar-dark");
    } else {
        $(".fixed-top").addClass("navbar-dark").removeClass("navbar-light bg-light");
    }
});

function eng() {
    alert("LOL");
}

// DATA SKILL
const skill = [{
        skill: "English",
        persentase: 60
    },
    {
        skill: "HTML5 + CSS3",
        persentase: 80
    },
    // {
    //     skill: "JavaScript ES6",
    //     persentase: 40
    // },
    {
        skill: "Bootstrap 4",
        persentase: 90
    },
    {
        skill: "jQuery",
        persentase: 50
    },
    {
        skill: "PHP Native + MYSQL",
        persentase: 60
    },
    {
        skill: "Laravel",
        persentase: 70
    },
    {
        skill: "GIT",
        persentase: 50
    },
    {
        skill: "Content Write",
        persentase: 50
    },
    {
        skill: "Design",
        persentase: 80
    },
    {
        skill: "Java",
        persentase: 50
    },
    {
        skill: "Softskill",
        persentase: 80
    },
    {
        skill: "Responsible",
        persentase: 90
    },

];

skill.forEach((i) => {
    $("#myskils").append(`
    <div class="col-md-4">
        <div class="progressBar p-2">
        <h4>` + i.skill + `</h4>
        <div class="progressBarContainer">
            <div class="progressBarValue value-` + i.persentase + `">` + i.persentase + `%</div>
        </div>
        </div>
    </div>
    `);
})
// AKHIR