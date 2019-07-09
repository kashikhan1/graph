function myFunction(value) {
    tab = value
}
$(".taggle_text").click(function() {
    var myClass = $(this).attr("class");
});
$(document).on("click", ".taggle_text", function() {
    var clickedBtnID = $(this); // or var clickedBtnID = this.id
    console.log($(this)[0].innerHTML);
    let id = $(this)[0].innerHTML;
    let chart = tab;
    $.get(`http://localhost:4444/${id}/${chart}`, function(response) {
        console.log($(".nav-tabs .active > a").attr("href"))
        let firstColumn = response.A3 || response.A1;
        let secondColumn = response.A4 || response.A2;
        if (response.A3) {
            localStorage.setItem("first", true)
            localStorage.setItem("current", 1)
        } else {
            localStorage.setItem("second", true);
            localStorage.setItem("current", 2);
        }
        let numberOfLines = firstColumn.length
        for (i = 0; i < secondColumn.length; i++) {
            secondColumn[i] = secondColumn[i] * Math.PI / 180;
        }
        let dA = [0.00000000000000000000000001, ...secondColumn];
        let B = [0, ...firstColumn];

        let A = [0];
        A.push(dA[0]);
        for (i = 1; i < numberOfLines + 1; i++) {
            A.push(A[i] + dA[i]);
        }
        let dBB = [...B];

        let dB = new Array();

        for (i = 0; i < numberOfLines + 1; i++) {
            if (i == 0) {
                dB.push(0);
            } else {
                dB.push(dBB[i] - dBB[i - 1]);
            }
        }

        let R = [];

        for (i = 0; i < dA.length; i++) {
            R[i] = dB[i] / dA[i];
        }
        // movemean
        let Kr = [];
        for (i = 0; i < R.length; i++) {
            Kr[i] = 1 / R[i];
        }
        let W_rb = [];
        for (i = 0; i < B.length; i++) {
            W_rb[i] = B[i] / (2 * Math.PI * 25) * 360;
        }
        let w_rb = [];
        w_rb = [...W_rb];
        for (i = 0; i < numberOfLines; i++) {
            w_rb[i] = Math.sin((W_rb[i] % 360) * Math.PI / 180);
        }
        let x = [];
        let y = [];
        let dx = [];
        let dy = [];
        let S = [];
        for (i = 0; i < numberOfLines + 2; i++) {
            x[i] = 0;
            y[i] = 0;
            dx[i] = 0;
            dy[i] = 0;
        }
        for (i = 0; i < numberOfLines + 1; i++) {
            S[i] = 0;
        }
        for (i = 0; i < numberOfLines + 1; i++) {
            S[i] = Math.abs(2 * R[i] * Math.sin(dA[i] / 2));
            dx[i] = Math.cos(dA[i] / 2) * S[i];
            dy[i] = Math.sin(dA[i] / 2) * S[i];
            x[i + 1] = x[i] + dx[i] * Math.cos(A[i]) + dy[i] * Math.sin(A[i]);
            y[i + 1] = y[i] + dx[i] * Math.sin(A[i]) + dy[i] * Math.cos(A[i]);
        }
        let trace1 = {
            x: B,
            y: dA,
            mode: 'lines'
        };
        let trace2 = {
            x: B,
            y: w_rb,
            mode: 'lines'
        };
        let trace3 = {
            x: B,
            y: R,
            mode: 'lines'
        };
        let trace4 = {
            x: B,
            y: Kr,
            mode: 'lines'
        };
        let trace5 = {
            x: B,
            y: Kr,
            mode: 'lines'
        };
        let trace6 = {
            x: x,
            y: y,
            mode: 'lines'
        };
        let tracezero = {
            x: [0],
            y: [0],
            mode: 'lines'
        };
        let data = []
        let data1 = []
        let data2 = []
        let data3 = []

        if (localStorage.getItem("first") && localStorage.getItem("current") == 1) {
            data.push(trace1)
            localStorage.setItem("trace1", JSON.stringify(trace1))
            if (localStorage.getItem("trace2")) data.push(JSON.parse(localStorage.getItem("trace2")))
            else data.push(tracezero)
        } else {
            if (localStorage.getItem("trace1")) data.push(JSON.parse(localStorage.getItem("trace1")))
            else data.push(tracezero)
            data.push(trace2)
            localStorage.setItem("trace2", JSON.stringify(trace2))
        }

        if (localStorage.getItem("first") && localStorage.getItem("current") == 1) {
            data1.push(trace3)
            localStorage.setItem("trace3", JSON.stringify(trace3))
            if (localStorage.getItem("trace4")) data1.push(JSON.parse(localStorage.getItem("trace4")))
            else data1.push(tracezero)
        } else {
            if (localStorage.getItem("trace3")) data1.push(JSON.parse(localStorage.getItem("trace3")))
            else data1.push(tracezero)
            data1.push(trace4)
            localStorage.setItem("trace4", JSON.stringify(trace4))
        }

        if (localStorage.getItem("first") && localStorage.getItem("current") == 1) {
            data2.push(trace5)
            localStorage.setItem("trace5", JSON.stringify(trace5))
            if (localStorage.getItem("trace5A")) data2.push(JSON.parse(localStorage.getItem("trace5A")))
            else data2.push(tracezero)
        } else {
            if (localStorage.getItem("trace5")) data2.push(JSON.parse(localStorage.getItem("trace5")))
            else data2.push(tracezero)
            data2.push(trace5)
            localStorage.setItem("trace5A", JSON.stringify(trace5))
        }

        if (localStorage.getItem("first") && localStorage.getItem("current") == 1) {
            data3.push(trace6)
            localStorage.setItem("trace6", JSON.stringify(trace6))
            if (localStorage.getItem("trace6A")) data3.push(JSON.parse(localStorage.getItem("trace6A")))
            else data3.push(tracezero)
        } else {
            if (localStorage.getItem("trace6")) data3.push(JSON.parse(localStorage.getItem("trace6")))
            else data3.push(tracezero)
            data3.push(trace6)
            localStorage.setItem("trace6A", JSON.stringify(trace6))
        }
        let layout = {};
        // 2nd graph between B, R and B, Kr
        //3rd graph between B and Kr, use only trace1 now, no need of trace 2
        //4th graph between x and y
        if (localStorage.getItem("first") && localStorage.getItem("current") == 1) {
            let element = document.getElementById('first');
            if (element) element.parentNode.removeChild(element);
            let btn = document.createElement("BUTTON"); // Create a <button> element
            btn.innerHTML = `download ${id}`; // Insert text
            btn.setAttribute('id', 'first');
            btn.onclick = function() {
                exportToCsv(id, data, data1, data2, data3)
            }
            document.getElementById('download').appendChild(btn)
        } else {
            let element = document.getElementById('second');
            if (element) element.parentNode.removeChild(element);
            let btn = document.createElement("BUTTON"); // Create a <button> element
            btn.innerHTML = `download ${id}`
            btn.setAttribute('id', 'second');
            btn.onclick = function() {
                exportToCsv(id, data, data1, data2, data3)
            }
            document.getElementById('download').appendChild(btn)
        }
        Plotly.newPlot('graph', data, layout, { showSendToCloud: true });
        Plotly.newPlot('graph1', data1, layout, { showSendToCloud: true });
        Plotly.newPlot('graph2', data2, layout, { showSendToCloud: true });
        Plotly.newPlot('graph3', data3, layout, { showSendToCloud: true });

    });
});
