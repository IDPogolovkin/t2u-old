let launchDate = new Date("June 20, 2022 12:00:00").getTime();

let timer = setInterval(tick, 1000);

function tick(){
    let now = new Date().getTime();
    let t = launchDate - now;

    if(t>0){
        let days = Math.floor(t/(1000*60*60*24));
        if (days<10){days = "0"+days; }

        let hours = Math.floor(t% (1000*60*60*24) / (1000*60*60));
        if (hours<10){hours = "0"+hours; }

        let mins = Math.floor(t/(1000*60*60*24));
        if (mins<10){days = "0"+days; }
    }
}