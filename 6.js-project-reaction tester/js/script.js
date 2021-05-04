        var startTime = new Date().getTime();

        function makeShapeAppear(){

            // place the shape in a random place

            var top_ = Math.random()*400;
            var left_ = Math.random()*500;

            document.getElementById("shape").style.top = top_+"px";
            document.getElementById("shape").style.left = left_+"px";


            // give random size

            var width_ = (Math.random()*300)+50;

            document.getElementById("shape").style.width = width_+"px";
            document.getElementById("shape").style.height = width_+"px";

            // shape of the object circle or Rectangle

            if (Math.random() > 0.5){

                var borderRadius_ = width_ * 0.5;
                document.getElementById("shape").style.borderRadius = borderRadius_+"px";

            } else {

                var borderRadius_ = 0 * 0.5;
                document.getElementById("shape").style.borderRadius = borderRadius_+"px";

            }

            // random color

            var color_ = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
            document.getElementById("shape").style.backgroundColor = color_;
            document.getElementById("shape")


             document.getElementById("shape").style.display = "block";

             // update start time when the shape appears

             startTime = new Date().getTime();
        }


        setTimeout(makeShapeAppear, Math.random()*1500);

        // initialize an array that stores all reaxtion times
        var allrxnTimes = [];

        document.getElementById("shape").onclick = function() {

            var endTime = new Date().getTime();
            var reactionTime = (endTime - startTime)/1000;

            allrxnTimes.push(reactionTime);


            // show reaction time on click
            document.getElementById("your-time").innerHTML =Math.floor(reactionTime*100)+"  Sec";

            // fastest time
            //document.getElementById("best-time").innerHTML = Math.min.apply(Math, allrxnTimes)+"Sec";

            document.getElementById("best-time").innerHTML = Math.floor(Math.min(... allrxnTimes)*100)+"  Sec"; // using spread operator ... within Math.min()

            //avg rxn time

            var total=0;
            for(var i in allrxnTimes) { total += allrxnTimes[i]; }

            var averageTime = total / allrxnTimes.length;

            document.getElementById("avg-time").innerHTML = Math.floor(averageTime*100) +"  Sec";

            // remove shape after click
            document.getElementById("shape").style.display = "none";

            setTimeout(makeShapeAppear, Math.random()*1500);
        }
