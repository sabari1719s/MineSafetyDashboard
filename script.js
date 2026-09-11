const vehicles = [
    {
        id: "V-01",
        speed: 8,
        distance: 35,
        fog: 68
    },
    {
        id: "V-02",
        speed: 5,
        distance: 60,
        fog: 45
    },
    {
        id: "V-03",
        speed: 10,
        distance: 15,
        fog: 85
    },
    {
        id: "V-04",
        speed: 6,
        distance: 48,
        fog: 55
    },
    {
        id: "V-05",
        speed: 4,
        distance: 70,
        fog: 40
    }
];

let simulationRunning = false;
let simulationTimer;


/* =========================
   CALCULATE TTC
========================= */

function calculateTTC(distance, speed) {

    if (speed <= 0) {
        return 999;
    }

    return distance / speed;
}


/* =========================
   GET SAFETY STATUS
========================= */

function getStatus(ttc) {

    if (ttc < 3) {
        return "CRITICAL";
    }

    if (ttc <= 6) {
        return "WARNING";
    }

    return "SAFE";
}


/* =========================
   CALCULATE RISK
========================= */

function calculateRisk(distance, speed, fog) {

    let ttc = calculateTTC(distance, speed);

    let risk = 100 - (ttc * 7);

    risk += fog * 0.25;

    if (risk < 5) {
        risk = 5;
    }

    if (risk > 99) {
        risk = 99;
    }

    return Math.round(risk);
}


/* =========================
   DISPLAY VEHICLE
========================= */

function updateVehicle(index) {

    const vehicle = vehicles[index];

    const ttc = calculateTTC(
        vehicle.distance,
        vehicle.speed
    );

    const status = getStatus(ttc);

    const risk = calculateRisk(
        vehicle.distance,
        vehicle.speed,
        vehicle.fog
    );

    document.getElementById("selectedVehicle").textContent =
        "Vehicle " + vehicle.id;

    document.getElementById("speed").textContent =
        vehicle.speed.toFixed(1) + " m/s";

    document.getElementById("distance").textContent =
        Math.round(vehicle.distance) + " m";

    document.getElementById("ttc").textContent =
        ttc.toFixed(1) + " s";

    document.getElementById("vehicleFog").textContent =
        Math.round(vehicle.fog) + "%";

    document.getElementById("riskValue").textContent =
        risk + "%";

    document.getElementById("riskBar").style.width =
        risk + "%";

    document.getElementById("relativeSpeed").textContent =
        vehicle.speed.toFixed(1) + " m/s";

    document.getElementById("stoppingDistance").textContent =
        Math.round(vehicle.speed * 3.1) + " m";


    /* STATUS BADGE */

    const badge =
        document.getElementById("statusBadge");

    badge.textContent = status;

    badge.className = "";

    if (status === "SAFE") {
        badge.classList.add("safe");
        document.getElementById("action").textContent =
            "CONTINUE";
    }

    else if (status === "WARNING") {
        badge.classList.add("warning");
        document.getElementById("action").textContent =
            "REDUCE SPEED";
    }

    else {
        badge.classList.add("critical");
        document.getElementById("action").textContent =
            "BRAKE / STOP";
    }

    /* MAP VEHICLE */

    const mapVehicle =
        document.getElementById("mapV" + (index + 1));

    if (status === "CRITICAL") {
        mapVehicle.style.filter =
            "drop-shadow(0 0 10px red)";
    }

    else if (status === "WARNING") {
        mapVehicle.style.filter =
            "drop-shadow(0 0 8px orange)";
    }

    else {
        mapVehicle.style.filter =
            "none";
    }
}


/* =========================
   UPDATE SUMMARY
========================= */

function updateSummary() {

    let critical = 0;
    let alerts = 0;

    vehicles.forEach(vehicle => {

        const ttc =
            calculateTTC(
                vehicle.distance,
                vehicle.speed
            );

        const status =
            getStatus(ttc);

        if (status === "CRITICAL") {
            critical++;
            alerts++;
        }

        else if (status === "WARNING") {
            alerts++;
        }

    });

    document.getElementById("criticalCount").textContent =
        critical;

    document.getElementById("alertCount").textContent =
        alerts;

    document.getElementById("alertIndicator").textContent =
        alerts + " ACTIVE";

    /* Average fog */

    let totalFog = 0;

    vehicles.forEach(v => {
        totalFog += v.fog;
    });

    let averageFog =
        Math.round(totalFog / vehicles.length);

    document.getElementById("fogLevel").textContent =
        averageFog + "%";
}


/* =========================
   SIMULATION
========================= */

function simulateData() {

    vehicles.forEach((vehicle, index) => {

        /* Random speed */

        vehicle.speed =
            Math.max(
                3,
                vehicle.speed +
                (Math.random() - 0.5) * 2
            );

        /* Random distance */

        vehicle.distance =
            Math.max(
                10,
                vehicle.distance +
                (Math.random() - 0.5) * 8
            );

        /* Random fog */

        vehicle.fog =
            Math.max(
                20,
                Math.min(
                    95,
                    vehicle.fog +
                    (Math.random() - 0.5) * 8
                )
            );

    });

    const selected =
        document.getElementById("vehicleSelect").value;

    updateVehicle(Number(selected));

    updateSummary();

    generateAlerts();
}


/* =========================
   GENERATE ALERTS
========================= */

function generateAlerts() {

    const alertList =
        document.getElementById("alertList");

    let html = "";

    vehicles.forEach(vehicle => {

        const ttc =
            calculateTTC(
                vehicle.distance,
                vehicle.speed
            );

        const status =
            getStatus(ttc);

        if (status === "CRITICAL") {

            html += `
                <div class="alert critical-alert">
                    <span>🔴</span>
                    <div>
                        <strong>CRITICAL</strong>
                        <p>
                        Vehicle ${vehicle.id}
                        collision risk detected.
                        </p>
                        <small>Live detection</small>
                    </div>
                </div>
            `;

        }

        else if (status === "WARNING") {

            html += `
                <div class="alert warning-alert">
                    <span>🟠</span>
                    <div>
                        <strong>WARNING</strong>
                        <p>
                        Vehicle ${vehicle.id}
                        requires attention.
                        </p>
                        <small>Live detection</small>
                    </div>
                </div>
            `;
        }

    });

    if (html === "") {

        html = `
            <div class="alert"
                 style="background:#eaf8ef;">
                <span>🟢</span>
                <div>
                    <strong>ALL CLEAR</strong>
                    <p>
                    No immediate collision risk detected.
                    </p>
                </div>
            </div>
        `;
    }

    alertList.innerHTML = html;
}


/* =========================
   START SIMULATION
========================= */

function startSimulation() {

    const button =
        document.getElementById("simulateBtn");

    if (simulationRunning) {

        clearInterval(simulationTimer);

        simulationRunning = false;

        button.textContent =
            "▶ START SAFETY SIMULATION";

        return;
    }

    simulationRunning = true;

    button.textContent =
        "⏸ STOP SIMULATION";

    simulationTimer =
        setInterval(
            simulateData,
            2000
        );
}


/* =========================
   VEHICLE SELECT
========================= */

document
    .getElementById("vehicleSelect")
    .addEventListener(
        "change",
        function () {

            updateVehicle(
                Number(this.value)
            );

        }
    );


/* =========================
   INITIAL LOAD
========================= */

updateVehicle(0);

updateSummary();

generateAlerts();