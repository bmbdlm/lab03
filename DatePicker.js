class DatePicker {
  constructor(id, f) {
    this.id = id;
    this.callback = f;
    this.date = {};
  }
  prevMonth(date) {
    date.setMonth(date.getMonth() - 1);
    this.render(date);
  }
  nextMonth(date) {
    if (date.getMonth() === 11) {
      date.setMonth(0);
      date.setFullYear(date.getFullYear() + 1);
    } else {
      date.setMonth(date.getMonth() + 1);
    }
    date.setDate(1);
    //console.log(date.getDay());
    this.render(date);
  }
  shilj(date, a) {
    let shinewter = new Date(date.getFullYear(), date.getMonth(), a + 1);
    //console.log(shinewter);
    this.render(shinewter);
  }
  render(date) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    this.date.year = date.getFullYear();
    this.date.month = date.getMonth();
    this.date.day = date.getDate();
    let cont = document.getElementById(this.id);
    cont.innerHTML = `<div class="bugs"><i class="arrow"> </i></div><div class="huur"><span >${
      months[date.getMonth()]
    } ${date.getFullYear()}</span></div><div><i class="arrow2"> </i></div>`;
    this.calendar(date);
    var t = cont.firstChild.firstChild;
    t.addEventListener("click", () => this.prevMonth(date));
    var y = cont.firstChild.nextSibling.nextSibling;
    //console.log(y);
    y.addEventListener("click", () => this.nextMonth(date));
    this.callback(this.id, this.date);
  }
  calendar(date) {
    let daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let huuchin = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let shine = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    //shine.setMonth(date.getMonth() + 1);
    huuchin.setMonth(date.getMonth() - 1);
    let r = huuchin.getMonth();
    //console.log(huuchin);
    let div = document.createElement("div");
    div.setAttribute("class", "d");

    for (let i = 0; i < daysOfWeek.length; i++) {
      let d = document.createElement("div");
      d.appendChild(document.createTextNode(daysOfWeek[i]));
      div.appendChild(d);
    }
    let cont = document.getElementById(this.id);
    cont.appendChild(div);
    cont.firstChild.setAttribute("class", "header1");
    let mo = date.getFullYear();
    let mo1 = date.getMonth();
    let moo = 0;
    let rmo = 0;
    if (
      mo1 === 0 ||
      mo1 === 2 ||
      mo1 === 4 ||
      mo1 === 6 ||
      mo1 === 7 ||
      mo1 === 9 ||
      mo1 === 11
    ) {
      moo = 31;
    } else if (mo1 === 3 || mo1 === 5 || mo1 === 8 || mo1 === 10) {
      moo = 30;
    } else {
      if (mo % 4 === 0) {
        moo = 29;
      } else {
        moo = 28;
      }
    }
    if (
      r === 0 ||
      r === 2 ||
      r === 4 ||
      r === 6 ||
      r === 7 ||
      r === 9 ||
      r === 11
    ) {
      rmo = 31;
    } else if (r === 3 || r === 5 || r === 8 || r === 10) {
      rmo = 30;
    } else {
      if (huuchin.getFullYear() % 4 === 0) {
        rmo = 29;
      } else {
        rmo = 28;
      }
    }
    huuchin.setDate(rmo);
    let heddeh = huuchin.getDay();
    let dragin = heddeh;
    let daydiv = document.createElement("div");
    daydiv.setAttribute("class", "days");
    if (heddeh < 6) {
      for (let j = heddeh; j >= 0; j--) {
        let hooson = document.createElement("div");
        hooson.setAttribute("class", "huuchin");
        hooson.appendChild(document.createTextNode(rmo - j));
        daydiv.appendChild(hooson);
      }
    }
    for (let i = 0; i < moo; i++) {
      let d1 = document.createElement("div");
      d1.setAttribute("class", "ursun");
      d1.addEventListener("click", () => this.shilj(date, i));
      d1.appendChild(document.createTextNode(i + 1));
      if (this.date.day === i + 1) {
        d1.setAttribute("class", "active");
      }
      daydiv.appendChild(d1);
    }
    //console.log(moo);
    shine.setDate(moo);
    // console.log(shine.getDay());
    var suul = shine.getDay();
    //console.log(suul);
    if (suul <= 6) {
      for (let k = 1; k <= 6 - suul; k++) {
        let hoosonbish = document.createElement("div");
        hoosonbish.appendChild(document.createTextNode(k));
        hoosonbish.setAttribute("class", "ireedvi");
        daydiv.appendChild(hoosonbish);
      }
    } else {
    }
    cont.appendChild(daydiv);
  }
}
