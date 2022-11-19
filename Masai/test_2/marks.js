var stud = {

    grade: "V",
    students: [
        { name: "Shivam", marks: [20, 30, 60] },
        { name: "Singh", marks: [20, 30, 40] }
    ],

    grade: "VI",
    students: [
        { name: "Saurabh", marks: [10, 60, 30] },
        { name: "Sundarm", marks: [20, 30, 40] }
    ],
    grade: "VII",
    students: [
        { name: "Ravi", marks: [90, 20, 30] },
        { name: "Manish", marks: [20, 80, 40] }
    ],

    highMarks: function () {
        var hig = this.students[0];
        for (var i = 0; i < this.students.length; i++) {
            var curr_sub = this.students[i];
            if (curr_sub.students > hig.students) {
                hig = curr_sub;
            }
        }
        return hig
    },

    total: function () {
        var sum = 0;
        for (var i = 0; i < this.students.length; i++) {
            var sum =this.students[i];
            return sum
        }
    }
}
console.log(stud.total());
console.log(stud.highMarks());









