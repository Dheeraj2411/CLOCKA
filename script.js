function clock() {
    const hours = document.getElementById('hour')
    const minutes = document.getElementById('minutes')
    const seconds = document.getElementById('seconds')
    const ampm = document.getElementById('ampm')
    // const xmas95 = new Date("December 25, 1995 23:15:30");
    // const minutes = xmas95.getMinutes();
    const time = new Date()
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let am = "AM";
    if (h > 12) {
        h = h - 12;
        let am = "PM"
    }
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;

}
let interval = setInterval(clock, 1000)
// console.log(h)