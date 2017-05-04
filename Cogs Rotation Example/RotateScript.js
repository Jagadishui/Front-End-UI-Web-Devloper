
function RotateClass() {
    this.n = 0;
    this.Rotate = function (id, dic) {

        if (dic == "ccw") {
            this.n++;
        }
        else {
            this.n--;
        }
        if (this.n == -360 || this.n == 360) {
            this.n = 0;
        }


        var ref = document.getElementById(id);
        ref.style.transform = "rotate(" + this.n + "deg)";

        var fucRef = this;
        //setInterval
        setTimeout(function () {
            fucRef.Rotate(id, dic);
        }, 15);
    }
}

var obj1 = new RotateClass();
var obj2 = new RotateClass();
var obj3 = new RotateClass();

obj1.Rotate("cog1", "ccw");
obj2.Rotate("cog2", "accw");
obj3.Rotate("cog3", "ccw");
