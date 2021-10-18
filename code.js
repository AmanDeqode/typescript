function check() {
    const value = Math.random()<0.5?"a":"b";
    console.log(Math.random());
    if(value !== "a") {
        console.log("smaller")
    } else if(value === "b") {
        console.log("small");
    }
}

check();