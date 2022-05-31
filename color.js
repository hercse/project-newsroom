        var color_old ={
          "r": 255,
          "g": 255,
          "b":255
        };
        var color_new = {
          "r": 255,
          "g": 255,
          "b":255
        };
      // get now day
      var today = new Date();
      // turn in to year
      var daetYear = today.getFullYear(0);
      // set start of the year and end, from dateYear.
      var start = new Date(daetYear, 1, 1),
        end = new Date(daetYear, 12, 31);
      // get Percent from (end - start).
      var datePercent = Math.round(((today - start) / (end - start)) * 100);

      if (datePercent <= 25) {
        console.log(datePercent + ' is < 25%');
        // datePercent / 25 166, 191, 143 
        // background: rgba(181, 184, 137, 1);
        var minus = datePercent / 25;
        color_old.r = 166;
        color_old.g = 191;
        color_old.b = 143;
        color_new.r = 181;
        color_new.g = 184;
        color_new.b = 137;
      } else if (datePercent <= 50) {
        console.log(datePercent + ' is < 50%');
        color_old ={
          "r": 181 / 255,
          "g": 184 / 255,
          "b": 137 / 255
        };
        color_new ={
        "r": 188 / 255,
        "g": 181 / 255,
        "b": 141 / 255
        }
        var minus = datePercent / 50;
      }else if (datePercent <= 75) {
        console.log(datePercent + ' is < 50%');
      }else if (datePercent <= 100) {
        console.log(datePercent + ' is < 50%');
      }
      
        document.querySelector(":root").style.setProperty('--minus', minus);
        document.querySelector(":root").style.setProperty('--blend-r', color_old.r);
        document.querySelector(":root").style.setProperty('--blend-g', color_old.g);
        document.querySelector(":root").style.setProperty('--blend-b', color_old.b);
        document.querySelector(":root").style.setProperty('--base-r', color_new.r);
        document.querySelector(":root").style.setProperty('--base-g', color_new.g);
        document.querySelector(":root").style.setProperty('--base-b', color_new.b);