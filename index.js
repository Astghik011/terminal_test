// Trying to make terminal/git/github tasks more fun, and not to forget js in the meantime.

function sayHi(name){
    return `Happy ${getDate()}, ${name}!`;
}

document.write(sayHi("HappyPerson"));

function getDate(){
    const date = new Date();
    let month = date.getMonth();

    switch (month){
        case 0: 
            month = "January";
            break;
        case 1: 
            month = "February";
            break;
        case 2: 
            month = "March";
            break;
        case 3: 
            month = "April";
            break;
        case 4: 
            month = "May";
            break;
        case 5: 
            month = "June";
            break;
        case 6: 
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8: 
            month = "September";
            break;
        case 9: 
            month = "October";
            break;
        case 10: 
            month = "November";
            break;
        case 11: 
            month = "December";
            break;
    }

    let day = date.getDate();

    if(day === 1){
        return (`${day}st of ${month}`);
    } else if(day === 2){
        return (`${day}nd of ${month}`);
    } else if(day === 3){
        return (`${day}rd of ${month}`);
    }
    return (`${day}st of ${month}`);
}

