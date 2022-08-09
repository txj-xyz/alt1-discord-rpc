import * as a1lib from "@alt1/base";
import type Activity from './base/Activity';
import { BossTime } from './modules/BossTimer'

require("!file-loader?name=[name].[ext]!./index.html");
require("!file-loader?name=[name].[ext]!./appconfig.json");

var output = document.getElementById("output");
let startDate = Date.now();

// console.log(new BossTime())

setInterval(capture, 500)


function capture() {
    console.log('fired')
    if (!window.alt1) {
        output.insertAdjacentHTML("beforeend", `<div>You need to run this page in alt1 to capture the screen</div>`);
        return;
    }
    if (!alt1.permissionPixel) {
        output.insertAdjacentHTML("beforeend", `<div>Page is not installed as app or capture permission is not enabled</div>`);
        return;
    }

    const l = BossTime.get()
    console.log(l)

}

// export default function checkBossTimer() {
// 	let _bossTimer = bossTime.find();
//     if (_bossTimer) {
//         let result = bossTime.read() ?? null;
//         return result
//     }
// }


//check if we are running inside alt1 by checking if the alt1 global exists
if (window.alt1) {
    alt1.identifyAppUrl("./appconfig.json");
	// console.log(window)
}