"use strict";

// let car = {
//     manufacturer: 'Skoda',
//     model: 'Octavia A5',
//     year: 2011,
//     avgSpeed: 100,
//     fuel: 55,
//     avgFuel: 8,
//     drivers: ['Rostislav'],
//
//     getInfo: function() {
//         return "Your car is " + this.manufacturer + " " + this.model + ". Year of manufacture " + this.year + ". " +
//             "Average Speed: " + this.avgSpeed + ". Drivers: " + this.drivers.join(", ");
//     },
//
//     addDriver: function(driver) {
//         this.drivers.push(driver);
//         console.log(`${driver} is your new driver`);
//     },
//
//     isDriver: function(driver) {
//         if (this.drivers.includes(driver)){
//             console.log('Yes, you have this driver');
//         } else {
//             console.log('Driver not found');
//         }
//     },
//
//     getTimeTravel: function (distance) {
//         let avgSpeed = this.avgSpeed;
//         let avgFuel = this.avgFuel;
//         let drivingTime = distance / avgSpeed;
//         let breakTime = Math.floor(drivingTime / 4);
//         let totalTime = drivingTime + breakTime;
//         let requiredFuel = distance * avgFuel / 100;
//         console.log(`For a distance of ${distance} you need ${totalTime} hour and ${requiredFuel} fuel`);
//     },
// };
//
// console.log(car.getInfo());
// car.addDriver(prompt(`Who is your new driver`));
// car.isDriver(prompt('Check your driver name'));
// car.getTimeTravel(+prompt('Enter your distance in kilometers'));

let time = {
    hour : '',
    minutes: '',
    second : '',

    getTime : function () {
        let date = new Date;
        this.hour = date.getHours();
        this.minutes = date.getMinutes();
        this.second = date.getSeconds();
        console.log(`Now ${this.hour.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}:${this.second.toString().padStart(2, '0')}`);
    },

    addSeconds : function (seconds) {
        let date = new Date;
        this.second = date.getSeconds() + seconds;
        time.correctTime();
        console.log(`Your new time is ${this.hour.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}:${this.second.toString().padStart(2, '0')}`);
    },

    addMinutes : function (minutes) {
        let date = new Date;
        this.minutes = date.getMinutes() + minutes;
        time.correctTime()
        console.log(`Your new time is ${this.hour.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}:${this.second.toString().padStart(2, '0')}`);
    },

    addHour : function (hour) {
        let date = new Date;
        this.hour = date.getHours() + hour;
        time.correctTime();
        console.log(`Your new time is ${this.hour.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}:${this.second.toString().padStart(2, '0')}`);
    },

    correctTime : function () {
        if (this.second >= 60) {
            this.minutes = Math.floor(this.second / 60) + this.minutes;
            this.second = this.second % 60;
        }
        if (this.minutes >= 60) {
            this.hour = Math.floor(this.minutes / 60) + this.hour;
            this.minutes = this.minutes % 60;
        }
        if (this.hour >= 24) {
            this.hour = this.hour % 24;
        }
    }

}

time.getTime();
// time.addSeconds()
time.addMinutes(45)
// time.addHour();