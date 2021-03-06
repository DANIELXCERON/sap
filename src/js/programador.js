///////////////////////////////////////// * LIST * //////////////////////////////////////////////////

/** crear nueva lista en grid_scheduler_list_container */
const grid_scheduler_list = new dhx.Grid("grid_scheduler_list_container", {
    columns: [
        { width: 100, id: "item", header: [{ text: "Nombre" }] },
        {
            width: 100,
            id: "duration",
            header: [{ text: "Duración" }],
            template: (text, row, col) => `<span>${nTF.secToHHMMSS(text)}</span>`,
        },
        { width: 100, id: "trueRandom", header: [{ text: "Random" }] },
        { width: 100, id: "playTime", header: [{ text: "Hora" }] },
        {
            width: 200,
            id: "playDay",
            header: [{ text: "Dias" }],
            template: (text, row, col) => {
                var dia = ``;
                text.forEach(day => {
                    dia += ` [${day}] `;
                });
                return `<span>${dia}</span>`;
            },
        },
        {
            width: 200,
            id: "playMonths",
            header: [{ text: "Meses" }],
            template: (text, row, col) => {
                var meses = ``;
                text.forEach(months => {
                    meses += ` [${months}] `;
                });
                return `<span>${meses}</span>`;
            },
        },
        { width: 150, id: "path", header: [{ text: "Ruta" }] },
    ],
    css: "my_grid_css",
    rowHeight: 25,
    headerRowHeight: 25,
    height: 377,
    rowCss: row => row.custom,
    htmlEnable: true,
    dragMode: "both",
    dragCopy: false,
    selection: "row",
    resizable: true,
    // editable: true
    // adjust: true,
});

/** Controles de la lista */
const jsonFile_btn_scheluder_list = document.querySelector("#jsonFile_btn_scheluder_list");
const save_btn_scheluder_list = document.querySelector("#save_btn_scheluder_list");
const remove_btn_scheluder_list = document.querySelector("#remove_btn_scheluder_list");

/** Boton cargar lista desde archivo */
jsonFile_btn_scheluder_list.addEventListener("click", () => {

    dialog.showOpenDialog({
        title: "Selecciona tu lista",
        buttonLabel: "Agregar",
        properties: ["openFile"],
        filters: [
            { name: "Json", extensions: ["json"] },
            { name: "playlist file", extensions: ["plst"] },
        ],
    }).then((result) => {

        /**si no ha sido canselado */
        if (!result.canceled) {
            if (grid_scheduler_list.data._order && grid_scheduler_list.data._order.length > 0) {
                /**si hay datos en la lista borrarlos primero */
                grid_scheduler_list.data._order.forEach((item) => {
                    grid_scheduler_list.data.remove(item.id);
                });
            }
            /**luego carga los nuevos datos */
            var pathListJson = result.filePaths[0];
            grid_scheduler_list.data.load(pathListJson);
        }
    }).catch((err) => {
        console.log(err);
    });
});
/** Boton guardar lista */
save_btn_scheluder_list.addEventListener("click", () => {
    const options = {
        defaultPath: app.getPath("documents") + "/000-List-Scheduler",
        title: "Guardar Listas",
        buttonLabel: "Guardar",
        filters: [
            { name: "Json", extensions: ["json"] },
            { name: "playlist file", extensions: ["plst"] },
        ],
    };

    dialog.showSaveDialog(null, options).then((result) => {
        var dataSchedulerList = JSON.stringify(grid_scheduler_list.data._order);
        if (!result.canceled) {
            fs.writeFile(result.filePath.toString(), dataSchedulerList, err => {
                if (err) throw err;
                iziToast.show({
                    title: "Lista guardada con exito",
                    message: "",
                    color: "green", // blue, red, green, yellow
                });
            });
        }
    }).catch((err) => {
        console.log(err);
    });
});
/** Boton de eliminar item */
remove_btn_scheluder_list.addEventListener("click", () => {
    var cell = grid_scheduler_list.selection.getCell();
    if (cell.row) {
        grid_scheduler_list.data.remove(cell.row.id);
    }
});
/** formulario para agregar */
const form_scheduler_list = new dhx.Form("form_scheduler_list_container", {
    css: "my_form_css",
    rows: [
        {
            type: "timepicker",
            labelInline: true,
            label: "Hora",
            labelPosition: "left",
            value: "00:00",
            name: "playTime",
        },
        {
            type: "checkbox",
            labelInline: true,
            label: "Random",
            labelPosition: "left",
            value: true,
            checked: true,
            name: "trueRandom",
        },
        {
            type: "combo",
            label: "Días",
            labelPosition: "left",
            multiselection: true,
            selectAllButton: true,
            name: "playDay",
            value: ["dom", "lun", "mar", "mie", "jue", "vie", "sab"],
            data: [
                { value: "dom", id: "dom" },
                { value: "lun", id: "lun" },
                { value: "mar", id: "mar" },
                { value: "mie", id: "mie" },
                { value: "jue", id: "jue" },
                { value: "vie", id: "vie" },
                { value: "sab", id: "sab" },
            ],
        },
        {
            type: "combo",
            label: "Meses",
            labelPosition: "left",
            multiselection: true,
            selectAllButton: true,
            name: "playMonths",
            value: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
            data: [
                { value: "ene", id: "ene" },
                { value: "feb", id: "feb" },
                { value: "mar", id: "mar" },
                { value: "abr", id: "abr" },
                { value: "may", id: "may" },
                { value: "jun", id: "jun" },
                { value: "jul", id: "jul" },
                { value: "ago", id: "ago" },
                { value: "sep", id: "sep" },
                { value: "oct", id: "oct" },
                { value: "nov", id: "nov" },
                { value: "dic", id: "dic" },
            ],
        },
    ],
});

grid_scheduler_list.events.on("CellDblClick", (cell, e) => {
    loadListQueue(cell)
});

const ejecute_scheduler_list = () => {
    /**programacion local */
    // si hay lista y datos en ella
    if (grid_scheduler_list.data._order && grid_scheduler_list.data._order.length > 0) {
        grid_scheduler_list.data._order.forEach((item) => {
            // mes
            if (item.playMonths.some((months) => months === getTime.gT("mesCorto"))) {
                // dia
                if (item.playDay.some((days) => days === getTime.gT("diaCorto"))) {
                    // hora
                    if (getTime.gT("hms24") === item.playTime) {
                        loadListQueue(item);
                    }
                }
            }
        });
    }
}

/**cargar lista en cola */
const loadListQueue = async (item) => {
    if (grid_queue.data._order && grid_queue.data._order.length > 0) {
        /**si hay datos en la lista de cola, borrarlos primero */
        grid_queue.data._order.forEach(item => {
            /**solo quitar los items que no son temporales */
            if (item.temp === false) {
                grid_queue.data.remove(item.id);
            }
        });
    }
    /**cargar los nuevos datos */
    /** obtener datos de la lista al cargar */
    const res = await fetch(item.path);
    const list = await res.json();
    list.map(element => {
        /**agregar item por item 
         * y a cada uno darle un numero random
         * para ordenar aleatoriamente los videos
         */
        grid_queue.data.add({
            namefile: element.namefile,
            ref: element.ref,
            path: element.path,
            duration: element.duration,
            in: element.in,
            custom: element.custom,
            temp: element.temp,
            random: Math.random() * 9999
        });
    });
    /**Si el random esta activado en el item
     * ordernar de forma random en base a los num randoms
     * generados anteriormente
     */
    if (item.trueRandom === true) {
        grid_queue.data.sort({ by: "random", dir: "asc" });
    }
}

/**Drop & Drag Files */
const drop_scheduler_list = (ev) => {
    ev.preventDefault();
    // Utilice la interfaz DataTransferItemList para acceder a los archivos
    for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        // Si los elementos caídos no son archivos, rechácelos
        if (ev.dataTransfer.items[i].kind === "file") {
            let file = ev.dataTransfer.items[i].getAsFile();
            // si la extencion es valida
            if (nTF.validExts(file.name, ["json", "plst"])) {
                const formData = form_scheduler_list.getValue();
                if (!formData.playTime) {
                    iziToast.show({
                        title: "Primero selecciona una hora de inicio",
                        message: "",
                        color: "red", // blue, red, green, yellow
                    });
                    return
                }


                fetch(file.path)
                    .then(res => res.json())
                    .then(list => {
                        /**obtener duracion de la lista */
                        /**NOTA: crear funcion para esto */
                        var durationList = 0;
                        list.map(element => {
                            durationList += parseFloat(element.duration);
                        });

                        const data = {
                            item: filename(file.name),
                            duration: durationList,
                            trueRandom: formData.trueRandom,
                            playTime: formData.playTime + ":00",
                            playDay: formData.playDay,
                            playMonths: formData.playMonths,
                            path: file.path,
                            type: "application/json",
                        };
                        grid_scheduler_list.data.add(data, getIndexAddGrid(grid_scheduler_list));
                    });

            } else {
                iziToast.show({
                    title: "Archivo no válido",
                    message: "",
                    color: "red", // blue, red, green, yellow
                });
            }
        }
    }
    // para la limpieza
    if (ev.dataTransfer.items) {
        // Utilice la interfaz DataTransferItemList para eliminar los datos de arrastre
        ev.dataTransfer.items.clear();
    } else {
        // Utilice la interfaz DataTransfer para eliminar los datos de arrastre
        ev.dataTransfer.clearData();
    }
}

const drag_scheduler_list = (ev) => ev.preventDefault()
/** Drop & Drag Files, Ends*/

///////////////////////////////////////// * END LIST * //////////////////////////////////////////////////


///////////////////////////////////////// * EVENTS * //////////////////////////////////////////////////
/** crear nueva lista en grid_event_container  */
const grid_scheduler_event = new dhx.Grid("grid_event_container", {
    columns: [
        {
            width: 45,
            id: "type",
            header: [{ text: "Tipo" }],
            template: (text, row, col) => {
                switch (text) {
                    case "datos:gc":
                        return `<img src="./img/filetype/sgc.png" height="20">`;
                    case "datos:plst":
                        return `<img src="./img/filetype/plst.png" height="20">`;
                    case "datos:stream":
                        return `<img src="./img/filetype/video.png" height="20">`;
                    case "videoloop":
                        return `<img src="./img/filetype/loop.png" height="20">`;
                    case "videobanner":
                        return `<img src="./img/filetype/loop.png" height="20">`;
                    default:
                        return `#`;
                }
            },
        },
        { width: 85, id: "item", header: [{ text: "Nombre" }] },
        { width: 85, id: "interval", header: [{ text: "Interval" }] },
        { width: 100, id: "playTime", header: [{ text: "playTime" }] },
        { width: 100, id: "stopTime", header: [{ text: "stopTime" }] },
        { width: 150, id: "playTimeRange", header: [{ text: "playTimeRange" }] },
        {
            width: 300,
            id: "playDateRange",
            header: [{ text: "Rango de fechas" }],
            template: (text, row, col) => {
                if (text[0] === text[1]) {
                    return `${text[0]}`;
                } else {
                    return `desde <span style="color:#2ecc71;">${text[0]}</span> hasta <span style="color:#e74c3c;">${text[1]}</span>`;
                }
            },
        },
        {
            width: 200,
            id: "playDay",
            header: [{ text: "Dias" }],
            template: (text, row, col) => {
                var dia = ``;
                text.forEach((day) => {
                    dia += ` [${day}] `;
                });
                return `<span>${dia}</span>`;
            },
        }
    ],
    css: "my_grid_css",
    rowHeight: 25,
    headerRowHeight: 25,
    height: 454,
    rowCss: row => row.custom,
    htmlEnable: true,
    dragMode: "both",
    dragCopy: false,
    selection: "row",
    resizable: true,
    // editable: true
    // adjust: true,
});
/** Controles de la lista */
const jsonFile_btn_scheluder_event = document.querySelector("#jsonFile_btn_scheluder_event");
const save_btn_scheluder_event = document.querySelector("#save_btn_scheluder_event");
const remove_btn_scheluder_event = document.querySelector("#remove_btn_scheluder_event");
/** Boton cargar lista desde archivo */
jsonFile_btn_scheluder_event.addEventListener("click", () => {
    dialog.showOpenDialog({
        title: "Selecciona tu lista",
        buttonLabel: "Agregar",
        properties: ["openFile"],
        filters: [
            { name: "Json", extensions: ["json"] },
            { name: "playlist file", extensions: ["plst"] },
        ],
    }).then((result) => {
        var pathListJson = result.filePaths[0];
        grid_scheduler_event.data.load(pathListJson);
    })
        .catch((err) => {
            console.log(err);
        });
});
/** Boton guardar lista */
save_btn_scheluder_event.addEventListener("click", () => {
    const options = {
        defaultPath: app.getPath("documents") + "/000-Events-Scheduler",
        title: "Guarda Lista de Eventos",
        buttonLabel: "Guardar",
        filters: [
            { name: "Json", extensions: ["json"] },
            { name: "playlist file", extensions: ["plst"] },
        ],
    };

    dialog
        .showSaveDialog(null, options)
        .then((result) => {
            var dataFilePlayList = JSON.stringify(grid_scheduler_event.data._order);
            if (!result.canceled) {
                fs.writeFile(result.filePath.toString(), dataFilePlayList, (err) => {
                    if (err) throw err;
                    console.log("Lista de programacion guardada");
                });
            }
        })
        .catch((err) => {
            console.log(err);
        });
});
/** Boton de eliminar item */
remove_btn_scheluder_event.addEventListener("click", () => {
    var cell = grid_scheduler_event.selection.getCell();
    if (cell.row) {
        grid_scheduler_event.data.remove(cell.row.id);
    }
});
/** formulario para agregar */
var form_scheduler_events = new dhx.Form("form_container", {
    css: "my_form_css",
    rows: [
        {
            name: "interval",
            type: "select",
            label: "Intervalo",
            helpMessage:
                `<p style="font-size: xx-small;">
                    <br>10 > 00 10 20 30 40 50 
                    <br>15 > 10 25 40 55 
                    <br>20 > 05 25 45 
                    <br>30 > 15 45 
                    <br>60 > 30
                </p>`,
            labelInline: true,
            value: "No",
            labelPosition: "left",
            options: [
                { value: "No", content: "No" },
                { value: "10", content: "Cada 10 min" },
                { value: "15", content: "Cada 15 min" },
                { value: "20", content: "Cada 20 min" },
                { value: "30", content: "Cada 30 min" },
                { value: "60", content: "Cada hora" },
            ],
        },
        {
            name: "playTime",
            type: "timepicker",
            label: "Hora",
            labelPosition: "left",
            labelInline: true,
            value: "00:00",
        },
        {
            name: "stopTime",
            type: "timepicker",
            label: "Stop Time",
            labelPosition: "left",
            labelInline: true,
            value: "00:00",
        },
        {
            name: "instant",
            type: "checkbox",
            label: "Inmediato",
            labelPosition: "left",
            labelInline: true,
            value: false,
        },
        {
            name: "screenshot",
            type: "checkbox",
            label: "screenshot",
            labelPosition: "left",
            labelInline: true,
            value: false,
        },
        {
            name: "genLog",
            type: "checkbox",
            label: "generar log",
            labelPosition: "left",
            labelInline: true,
            value: false,
        },
        {
            name: "playDay",
            type: "combo",
            label: "Días",
            labelPosition: "left",
            multiselection: true,
            selectAllButton: true,
            value: ["dom", "lun", "mar", "mie", "jue", "vie", "sab"],
            data: [
                { value: "dom", id: "dom" },
                { value: "lun", id: "lun" },
                { value: "mar", id: "mar" },
                { value: "mie", id: "mie" },
                { value: "jue", id: "jue" },
                { value: "vie", id: "vie" },
                { value: "sab", id: "sab" },
            ],
        },
        {
            name: "playDateRange",
            type: "datepicker",
            label: "Fecha",
            labelPosition: "left",
            labelInline: true,
            range: true,
            dateFormat: "%d/%m/%Y",
        },
        {
            name: "timeStart",
            type: "timepicker",
            label: "Hora de inicio",
            labelPosition: "left",
            labelInline: true,
            value: "00:00",
        },
        {
            name: "timeEnd",
            type: "timepicker",
            label: "Hora de finalización",
            labelPosition: "left",
            labelInline: true,
            value: "23:59",
        },
    ],
});

grid_scheduler_event.events.on("CellDblClick", (cell, e) => {
    if (cell.instant) {
        ejecuteInstant(cell);
    } else {
        ejecuteAdd(cell);
    }
});

const ejecute_scheduler_event = () => {
    /**programacion local */
    // si hay lista y datos en ella
    if (grid_scheduler_event.data._order && grid_scheduler_event.data._order.length > 0) {
        // recorrer cada item
        grid_scheduler_event.data._order.forEach((item) => {
            // rango de fecha y hora
            if (rangeDate(item.playDateRange) && rangeTime(item.playTimeRange)) {
                // dia
                if (item.playDay.some((days) => days === getTime.gT("diaCorto"))) {
                    if (item.interval !== "No") {
                        // intervalos
                        try {
                            let JSON_config = JSON.parse(localStorage.getItem("JSON_config"));
                            JSON_config.intervals.forEach((intervals) => {

                                if (item.interval === intervals.interval) {
                                    if (intervals.Date.some((date) => date + ":00" === getTime.gT("min_sec"))) {
                                        if (item.instant) {
                                            ejecuteInstant(item);
                                        } else {
                                            ejecuteAdd(item);
                                        }
                                    }
                                }
                            });
                        } catch (error) { }
                    } else {
                        // hora
                        if (getTime.gT("hms24") === item.playTime) {
                            if (item.instant) {
                                ejecuteInstant(item);
                            } else {
                                ejecuteAdd(item);
                            }
                        }
                    }
                }
            }
        });
        /**si hay texto GC entonces ejecutarlo y removerlo */
        if (localStorage.getItem("gctemp")) {
            ipcRenderer.send("datos:gc", {
                textoGC: localStorage.getItem("gctemp").slice(0, -38),
            })
            localStorage.removeItem("gctemp");
        }
    }
}

const ejecuteAdd = item => {
    switch (item.type) {
        case 'datos:stream':
            grid_queue.data.add({
                namefile: "[EVENTO] " + item.item,
                ref: item.ref,
                path: item.path,
                duration: item.duration,
                startTime: "00:00:00",
                in: 0,
                custom: "bg_id_Scheduler",
                temp: item.temp,
                screenshot: item.screenshot,
                genLog: item.genLog,
            }, grid_queue.data.getIndex(localStorage.getItem("CurrentVideoID")) + 1);
            break;
        case 'datos:plst':
            loadListProgram(item)
            break;
        default:
    }
}

const ejecuteInstant = item => {
    switch (item.type) {
        case "datos:stream":
            const NextVideo = {
                namefile: "[EVENTO] " + item.item + " | " + item.interval + " | " + getTime.gT("hms24"),
                ref: item.ref,
                path: item.path,
                duration: 0,
                startTime: "00:00:00",
                in: 0,
                custom: "bg_id_event",
                random: 0,
                temp: true,
            }
            grid_ad_queue.data.add(NextVideo, 0);
            controlPlayerAD();
            break;
        case "datos:gc":
            fetch(item.path)
                .then(res => res.json())
                .then(GCFile => {
                    /**Sumar textos del cg*/
                    const separador = '<spam style="color:#3498db"> • </spam>'
                    if (localStorage.getItem("gctemp")) {
                        localStorage.setItem("gctemp", localStorage.getItem("gctemp") + GCFile.textoGC + separador)
                    } else {
                        localStorage.setItem("gctemp", GCFile.textoGC + separador);
                    }
                });
            break;
        case "datos:plst":
            ipcRenderer.send("datos:stream", comand = {
                referencia: "file-video",
                url: loadListProgram(item),
                in: 0,
            });
            break;
        case "videoloop":
            loadGraphics(item.type, item.path)
            break;
        default:
    }
}

/**cargar item de la lista en cola (Programas) */
const loadListProgram = item => {
    /** obtener datos de la lista al cargar */
    fetch(item.path)
        .then(res => res.json())
        .then(list => {
            /**Se carga los datos de las cortinilla de entrada y salida
             * en el localStorage con CurtainIn y CurtainOut
             * para la tandas de anuncios cada vez que se agrega una lista
             * en events (lista de videos uno a uno)
             */
            var n = 0
            var a, b, c
            list.forEach(dataVideo => {
                if (dataVideo.curtain) {
                    switch (dataVideo.curtain) {
                        case "inicio":
                            localStorage.setItem("CurtainIn", JSON.stringify(dataVideo));
                            a = n
                            break;
                        case "fin":
                            localStorage.setItem("CurtainOut", JSON.stringify(dataVideo));
                            b = n
                            break;
                        case "rating":
                            localStorage.setItem("RatingProgram", JSON.stringify(dataVideo));
                            c = n
                            break;
                        default:
                    }
                }
                n += 1
            });
            //Guardar en localStorage la ruta de la lista de la cual se agrega este video
            localStorage.setItem("pathListEvent", item.path);

            // Agrega video programado
            var cell = list[getValidIndexList(list, false, item, [a, b, c])];
            const programVideo = {
                namefile: "[P] " + cell.namefile + " | " + item.interval + " | " + getTime.gT("hms24"),
                ref: cell.ref,
                path: cell.path,
                duration: cell.duration,
                startTime: "00:00:00",
                in: 0,
                custom: "LC-Violet",
                random: 0,
                temp: true,
                pathListEvent: item.path,
                screenshot: item.screenshot,
                genLog: item.genLog,
            }
            //agrega el video +1 index despues del actual en reproduccion
            var pAddIndex = grid_queue.data.getIndex(localStorage.getItem("CurrentVideoID"));
            grid_queue.data.add(programVideo, pAddIndex ? pAddIndex + 1 : 0);

            // Agrega video clasificador
            var cellRating = list[c];
            if (cellRating) {
                const ratingVideo = {
                    namefile: "[C] " + cellRating.namefile + " | " + item.interval + " | " + getTime.gT("hms24"),
                    ref: cellRating.ref,
                    path: cellRating.path,
                    duration: cellRating.duration,
                    startTime: "00:00:00",
                    in: 0,
                    custom: "LC-Violet",
                    random: 0,
                    temp: true,
                    screenshot: item.screenshot,
                    genLog: item.genLog,
                }
                //agrega el video +1 index despues del actual en reproduccion
                var rAddIndex = grid_queue.data.getIndex(localStorage.getItem("CurrentVideoID"));
                grid_queue.data.add(ratingVideo, rAddIndex ? rAddIndex + 1 : 0);
            }

            return programVideo.path
        });
}

/**Drop & Drag Files */
const drop_scheduler_event = e => {
    e.preventDefault();
    const formData = form_scheduler_events.getValue();
    // validar datos del formulario
    if (!formData.playDateRange) {
        iziToast.show({
            title: "Debe seleccionar una fecha",
            message: "",
            color: "red", // blue, red, green, yellow
        });
        return
    }
    // Utilice la interfaz DataTransferItemList para acceder a los archivos
    for (var i = 0; i < e.dataTransfer.items.length; i++) {
        // Si los elementos caídos no son archivos, rechácelos
        if (e.dataTransfer.items[i].kind === "file") {
            let file = e.dataTransfer.items[i].getAsFile();
            // si la extencion es
            if (nTF.validExts(file.name, ["sgc"])) { // generador de caracteres
                if (formData.playDateRange !== "") {
                    var validDateRange;

                    if (formData.playDateRange[0] && formData.playDateRange[1]) {
                        validDateRange = formData.playDateRange;
                    } else {
                        validDateRange = [formData.playDateRange[0], formData.playDateRange[0]];
                    }

                    const data = {
                        item: filename(file.name),
                        interval: formData.interval,
                        playTime: formData.playTime + ":00",
                        stopTime: formData.stopTime + ":00",
                        instant: true, // siempre se ejecuta de inmediado
                        type: "datos:gc",
                        ref: "file-video",
                        path: file.path,
                        playDateRange: validDateRange,
                        playTimeRange: [formData.timeStart + ":00", formData.timeEnd + ":00"],
                        playDay: formData.playDay,
                        temp: true,
                        screenshot: formData.screenshot,
                        genLog: formData.genLog,
                    };
                    grid_scheduler_event.data.add(data, getIndexAddGrid(grid_scheduler_event));
                }
            } else if (nTF.validExts(file.name, ["mp4", "mov"])) { // Archivo de video normal
                if (formData.playDateRange !== "") {

                    let v = document.createElement('video')
                    v.setAttribute('src', file.path)
                    v.onloadeddata = e => {
                        const { videoHeight, videoWidth, duration } = e.srcElement

                        var validDateRange;

                        if (formData.playDateRange[0] && formData.playDateRange[1]) {
                            validDateRange = formData.playDateRange;
                        } else {
                            validDateRange = [formData.playDateRange[0], formData.playDateRange[0]];
                        }

                        const data = {
                            item: filename(file.name),
                            interval: formData.interval,
                            playTime: formData.playTime + ":00",
                            stopTime: formData.stopTime + ":00",
                            instant: formData.instant,
                            type: "datos:stream",
                            ref: "file-video",
                            duration,
                            path: file.path,
                            playDateRange: validDateRange,
                            playTimeRange: [formData.timeStart + ":00", formData.timeEnd + ":00"],
                            playDay: formData.playDay,
                            temp: true,
                            screenshot: formData.screenshot,
                            genLog: formData.genLog,
                        };
                        grid_scheduler_event.data.add(data, getIndexAddGrid(grid_scheduler_event));
                    }
                }
            } else if (nTF.validExts(file.name, ["webm"])) { // Archivo de video con canal alfa webm
                if (formData.playDateRange !== "") {

                    let v = document.createElement('video')
                    v.setAttribute('src', file.path)
                    v.onloadeddata = e => {
                        const { videoHeight, videoWidth, duration } = e.srcElement

                        var validDateRange;

                        if (formData.playDateRange[0] && formData.playDateRange[1]) {
                            validDateRange = formData.playDateRange;
                        } else {
                            validDateRange = [formData.playDateRange[0], formData.playDateRange[0]];
                        }

                        const data = {
                            item: filename(file.name),
                            interval: formData.interval,
                            playTime: formData.playTime + ":00",
                            stopTime: formData.stopTime + ":00",
                            instant: true, // siempre se ejecuta de inmediado
                            type: "videoloop",
                            ref: "file-webm",
                            duration,
                            path: file.path,
                            playDateRange: validDateRange,
                            playTimeRange: [formData.timeStart + ":00", formData.timeEnd + ":00"],
                            playDay: formData.playDay,
                            temp: false,
                            screenshot: formData.screenshot,
                            genLog: formData.genLog,
                        };
                        grid_scheduler_event.data.add(data, getIndexAddGrid(grid_scheduler_event));
                    }
                }
            } else if (nTF.validExts(file.name, ["plst"])) { // Lista de reproduccion
                if (formData.playDateRange !== "") {
                    var validDateRange;

                    if (formData.playDateRange[0] && formData.playDateRange[1]) {
                        validDateRange = formData.playDateRange;
                    } else {
                        validDateRange = [formData.playDateRange[0], formData.playDateRange[0]];
                    }

                    const data = {
                        item: filename(file.name),
                        interval: formData.interval,
                        playTime: formData.playTime + ":00",
                        stopTime: formData.stopTime + ":00",
                        instant: formData.instant,
                        type: "datos:plst",
                        ref: "file-plst",
                        path: file.path,
                        playDateRange: validDateRange,
                        playTimeRange: [formData.timeStart + ":00", formData.timeEnd + ":00"],
                        playDay: formData.playDay,
                        temp: false,
                        screenshot: formData.screenshot,
                        genLog: formData.genLog,
                    };
                    grid_scheduler_event.data.add(data, getIndexAddGrid(grid_scheduler_event));
                }
            } else {
                iziToast.show({
                    title: "Archivo no válido",
                    message: "",
                    color: "red", // blue, red, green, yellow
                });
            }
        }
    }
    // para la limpieza
    if (e.dataTransfer.items) {
        // Utilice la interfaz DataTransferItemList para eliminar los datos de arrastre
        e.dataTransfer.items.clear();
    } else {
        // Utilice la interfaz DataTransfer para eliminar los datos de arrastre
        e.dataTransfer.clearData();
    }
}
const drag_scheduler_event = e => e.preventDefault()
/** Drop & Drag Files, Ends*/
///////////////////////////////////////// * END EVENTS * //////////////////////////////////////////////////



///////////////////////////////////////// * AD * //////////////////////////////////////////////////
/** crear nueva lista en grid_ad_container */
const grid_scheduler_ad = new dhx.Grid("grid_ad_container", {
    columns: [
        { width: 100, id: "interval", header: [{ text: "intervalo" }] },
        { width: 100, id: "item", header: [{ text: "Nombre" }] },
        {
            width: 300,
            id: "playDateRange",
            header: [{ text: "Fecha" }],
            template: (text, row, col) => {
                if (text[0] === text[1]) {
                    return `${text[0]}`;
                } else {
                    return `desde <span style="color:#2ecc71;">${text[0]}</span> hasta <span style="color:#e74c3c;">${text[1]}</span>`;
                }
            },
        },
        {
            width: 100,
            id: "duration",
            header: [{ text: "Duración" }],
            template: (text, row, col) => `<span>${nTF.secToHHMMSS(text)}</span>`,
        },
        { width: 150, id: "path", header: [{ text: "Ruta" }] },
    ],
    css: "my_grid_css",
    rowHeight: 25,
    headerRowHeight: 25,
    height: 377,
    rowCss: row => row.custom,
    htmlEnable: true,
    dragMode: "both",
    dragCopy: false,
    selection: "row",
    resizable: true,
    // editable: true
    // adjust: true,
});
/** Controles de la lista */
const jsonFile_btn_scheluder_ad = document.querySelector("#jsonFile_btn_scheluder_ad");
const save_btn_scheluder_ad = document.querySelector("#save_btn_scheluder_ad");
const remove_btn_scheluder_ad = document.querySelector("#remove_btn_scheluder_ad");

/** Boton cargar lista desde archivo */
jsonFile_btn_scheluder_ad.addEventListener("click", () => {
    dialog
        .showOpenDialog({
            title: "Selecciona tu lista",
            buttonLabel: "Agregar",
            properties: ["openFile"],
            filters: [
                { name: "Json", extensions: ["json"] },
                { name: "playlist file", extensions: ["plst"] },
            ],
        })
        .then((result) => {
            var pathListJson = result.filePaths[0];
            grid_scheduler_ad.data.load(pathListJson);
        })
        .catch((err) => {
            console.log(err);
        });
});
/** Boton guardar lista */
save_btn_scheluder_ad.addEventListener("click", () => {
    const options = {
        defaultPath: app.getPath("documents") + "/000-Ads-Scheduler",
        title: "Guarda Lista de Publicidad",
        buttonLabel: "Guardar",
        filters: [
            { name: "Json", extensions: ["json"] },
            { name: "playlist file", extensions: ["plst"] },
        ],
    };

    dialog
        .showSaveDialog(null, options)
        .then((result) => {
            var dataFilePlayList = JSON.stringify(grid_scheduler_ad.data._order);
            if (!result.canceled) {
                fs.writeFile(result.filePath.toString(), dataFilePlayList, err => {
                    if (err) throw err;
                    console.log("Lista de programacion guardada");
                });
            }
        })
        .catch((err) => {
            console.log(err);
        });
});
/** Boton de eliminar item */
remove_btn_scheluder_ad.addEventListener("click", () => {
    var cell = grid_scheduler_ad.selection.getCell();
    if (cell.row) {
        grid_scheduler_ad.data.remove(cell.row.id);
    }
});
/** formulario para agregar */
const form_ad = new dhx.Form("form_ad_container", {
    css: "my_form_css",
    rows: [{
        type: "select",
        labelInline: true,
        label: "Intervalo",
        helpMessage: `
    <p style="font-size: xx-small;">
        <br>10 > 00 10 20 30 40 50 
        <br>15 > 10 25 40 55 
        <br>20 > 05 25 45 
        <br>30 > 15 45 
        <br>60 > 30
    </p>
      `,
        labelPosition: "left",
        value: "10",
        name: "interval",
        options: [
            { value: "10", content: "10" },
            { value: "15", content: "15" },
            { value: "20", content: "20" },
            { value: "30", content: "30" },
            { value: "60", content: "60" },
        ],
    },
    {
        type: "combo",
        label: "Días",
        labelPosition: "left",
        multiselection: true,
        selectAllButton: true,
        name: "playDay",
        value: ["dom", "lun", "mar", "mie", "jue", "vie", "sab"],
        data: [
            { value: "dom", id: "dom" },
            { value: "lun", id: "lun" },
            { value: "mar", id: "mar" },
            { value: "mie", id: "mie" },
            { value: "jue", id: "jue" },
            { value: "vie", id: "vie" },
            { value: "sab", id: "sab" },
        ],
    },
    {
        type: "datepicker",
        labelInline: true,
        label: "Fecha",
        labelPosition: "left",
        range: true,
        name: "playDateRange",
        dateFormat: "%d/%m/%Y",
    },
    ],
});
grid_scheduler_ad.events.on("CellDblClick", (cell, e) => {
    loadListAd(cell)
});

const ejecute_scheduler_ad = () => {
    /**programacion local */
    // si hay lista y datos en ella
    if (grid_scheduler_ad.data._order && grid_scheduler_ad.data._order.length > 0) {
        grid_scheduler_ad.data._order.forEach((item) => {
            // rango de fecha
            if (rangeDate(item.playDateRange)) {
                // dia
                if (item.playDay.some((days) => days === getTime.gT("diaCorto"))) {
                    // intervalos
                    try {
                        let JSON_config = JSON.parse(localStorage.getItem("JSON_config"));
                        JSON_config.intervals.forEach((intervals) => {
                            if (item.interval === intervals.interval) {
                                if (intervals.Date.some((date) => date + ":00" === getTime.gT("min_sec"))) {
                                    if (item.type === "application/json") {
                                        /** cargar publicidad solo si se esta reproduciendo videos */
                                        if (localStorage.getItem("playerStatus") && localStorage.getItem("playerStatus") === "onplay") {
                                            loadListAd(item);
                                        }
                                    } else {
                                        loadGraphics(item.type, item.path)
                                    }
                                }
                            }
                        });
                    } catch (error) { }
                }
            }
        });
    }
}

/**cargar AD */
const loadListAd = item => {
    /** obtener datos de la lista al cargar */
    fetch(item.path)
        .then(res => res.json())
        .then(list => {
            var cell = list[getValidIndexList(list, false, item, [-1, -1])]

            const NextVideo = {
                namefile: "[ANUNCIO] " + cell.namefile + " | " + item.interval + " | " + getTime.gT("hms24"),
                ref: cell.ref,
                path: cell.path,
                duration: cell.duration,
                startTime: "00:00:00",
                in: 0,
                custom: "bg_id_Scheduler",
                random: 0,
                temp: true,
            }
            /**si el tiempo restante es menor a 8 min la publicidad se agrega en cola de programa
             * si no lo es entonces se agrega a la cola de publicidad
            */
            if (JSON.parse(localStorage.getItem("DataVideoCurrent")).TiempoRestante < (8 * 60)) {
                // se agrega adelante del video actualmente en reproduccion
                grid_queue.data.add(NextVideo, grid_queue.data.getIndex(localStorage.getItem("CurrentVideoID")) + 1);
            } else {
                grid_ad_queue.data.add(NextVideo, getIndexAddGrid(grid_ad_queue));

                addCurtains()

                controlPlayerAD();
            }
        });
}

/**cargar graficos banner*/
const loadGraphics = (ref, url) => {
    datosStream = {
        referencia: ref,
        url: url,
    };
    ipcRenderer.send("datos:stream", datosStream);
}

/**Drop & Drag Files */
const drop_scheduler_ad = e => {
    e.preventDefault();
    const formData = form_ad.getValue();
    if (!formData.playDateRange) {
        iziToast.show({
            title: "Debe seleccionar una fecha",
            message: "",
            color: "red", // blue, red, green, yellow
        });
        return
    }

    // Utilice la interfaz DataTransferItemList para acceder a los archivos
    for (var i = 0; i < e.dataTransfer.items.length; i++) {
        // Si los elementos caídos no son archivos, rechácelos
        if (e.dataTransfer.items[i].kind === "file") {
            let file = e.dataTransfer.items[i].getAsFile();
            // si la extencion es valida
            if (nTF.validExts(file.name, ["json", "plst"])) {

                fetch(file.path)
                    .then(res => res.json())
                    .then(list => {
                        /**obtener duracion de la lista */
                        /**NOTA: crear funcion para esto */
                        var durationList = 0;
                        list.forEach(element => {
                            durationList += parseFloat(element.duration);
                        });
                        var d = formData.playDateRange
                        var playDateRange = []
                        if (d.length === 1) {
                            playDateRange = [d[0], d[0]];
                        } else {
                            playDateRange = [d[0], d[1]];
                        }

                        const data = {
                            item: "[LISTA] " + filename(file.name),
                            duration: durationList,
                            interval: formData.interval,
                            playDay: formData.playDay,
                            playDateRange: playDateRange,
                            path: file.path,
                            type: "application/json",
                        };
                        grid_scheduler_ad.data.add(data, getIndexAddGrid(grid_scheduler_ad));
                    });
            } else if (nTF.validExts(file.name, ["webm"])) {

                var d = formData.playDateRange
                var playDateRange = []
                if (d.length === 1) {
                    playDateRange = [d[0], d[0]];
                } else {
                    playDateRange = [d[0], d[1]];
                }
                const data = {
                    item: filename(file.name),
                    duration: 0, //NOTA: resolver obtener duracion para formatos webm
                    interval: formData.interval,
                    playDay: formData.playDay,
                    playDateRange: playDateRange,
                    path: file.path,
                    type: "videobanner",
                };
                grid_scheduler_ad.data.add(data, getIndexAddGrid(grid_scheduler_ad));

            } else {
                iziToast.show({
                    title: "Archivo no válido",
                    message: "",
                    color: "red", // blue, red, green, yellow
                });
            }
        }
    }
    // para la limpieza
    if (e.dataTransfer.items) {
        // Utilice la interfaz DataTransferItemList para eliminar los datos de arrastre
        e.dataTransfer.items.clear();
    } else {
        // Utilice la interfaz DataTransfer para eliminar los datos de arrastre
        e.dataTransfer.clearData();
    }
}

const drag_scheduler_ad = e => e.preventDefault()
/** Drop & Drag Files, Ends*/
///////////////////////////////////////// * END AD * //////////////////////////////////////////////////

//////////////////////////////////////// * INTERNET TEST* /////////////////////////////////////////////////
const fromHttpJson_event = () => {
    /** programacion desde internet */
    var JsonFromURL = "https://ategaitana.com/tv/status.json";
    // var JsonFromURL = "https://ategaitana.com/tv/status-test.json";

    https.get(JsonFromURL, (res) => {
        let body = "";
        res.on("data", (chunk) => {
            body += chunk;
            let item = JSON.parse(body);

            item.forEach((item) => {
                // rango de fecha y hora
                if (rangeDate(item.playDateRange) && rangeTime(item.playTimeRange)) {
                    // dia
                    if (item.playDay.some((days) => days === getTime.gT("diaCorto"))) {
                        // hora
                        if (getTime.gT("hms24") === item.playTime) {
                            ipcRenderer.send("datos:stream", item.stream);
                        }
                        /**Hora en la que quieres que se detenga el stream
                         * Nota para el desarrollador
                         * agregar condicion para detener ese stream en especifico
                         */
                        if (getTime.gT("hms24") === item.stopTime) {
                            ipcRenderer.send("datos:stream", {
                                referencia: "stopStream",
                            });
                            ipcRenderer.send(item.stopEvent[0], item.stopEvent[1]);
                        }
                    }
                }
            });
        });

        res.on("end", () => {
            try {
                let json = JSON.parse(body);
            } catch (error) {
                console.error(error.message);
            }
        });
    })
        .on("error", (error) => {
            console.error(error.message);
        });
    /** end programacion desde internet */
}
//////////////////////////////////////// * END INTERNET * /////////////////////////////////////////////

/**obtine que item agregar de acuerdo a los parametros
 * item: Array of Objects (archivo de lista)
 * list: Array of Objects (cada video del archivo de lista)
 * random: Boolean
 * skipIndex: Array [1,2] (dos de los index que se quieren omitir)
 */
const getValidIndexList = (list, random, item, skipIndex) => {
    do {
        var index
        if (random) {
            // agregar de forma randon
            index = nTF.randomNumber(list.length - 1)
        } else {
            // agregar de forma ordenada
            if (localStorage.getItem(item.item)) { // si el index ya se ha guardado en sesion
                // lee el index del ultimo item que se agrego de una lista especifica
                index = parseInt(localStorage.getItem(item.item))
                if (index < list.length - 1) { // mientras que el index este dentro de la lista
                    index += 1
                } else {
                    index = 0
                }
            } else {
                index = 0
            }
        }
        localStorage.setItem(item.item, index);
        //si el index resultante contiene el skipIndex
        var even = (element) => element === index;
    } while (skipIndex.some(even));

    localStorage.setItem(item.item, index);
    return index
}

/**devuelve true si la fecha actual
 * se encuentra en el rango de
 * una fecha (date) especificada
 * rangeDate(["startDate","endDate"])
 */
const rangeDate = date => {
    var s = date[0].split("/");
    var e = date[1].split("/");
    var c = getTime.gT("DateDMYYYY").split("/");

    var currentDate = new Date(
        parseInt(c[2]),
        parseInt(c[1] - 1),
        parseInt(c[0])
    );
    var startDate = new Date(parseInt(s[2]), parseInt(s[1] - 1), parseInt(s[0]));
    var endDate = new Date(parseInt(e[2]), parseInt(e[1] - 1), parseInt(e[0]));

    return (startDate <= currentDate) & (currentDate <= endDate);
}
/**devuelve true si la hora actual
 * se encuentra en el rango de
 * una hora (time) especificada
 * rangeTime(["startTime","endTime"])
 */
const rangeTime = time => {
    var cT = getTime.gT("hms24");
    return (time[0] <= cT) & (cT <= time[1]);
}

/**Iniciar Reloj Programador */
const RelojProgramador = () => {

    /**Iniciar ejecucion de programadores */
    ejecute_scheduler_list();
    ejecute_scheduler_ad();
    ejecute_scheduler_event();
    /**desde internet */
    // fromHttpJson_event(); //deshabilitado por el momento

    /**si el reproducctor genera algun error pasar al siguiente */
    if (localStorage.getItem("playerStatus") === "error") {
        try {
            //indice del video actual
            let index = grid_queue.data.getIndex(localStorage.getItem("CurrentVideoID"))
            //Datos del video actual
            let itemCurrent = grid_queue.data._order[index]
            /**elimina marcas anteriores */
            grid_queue.removeRowCss(itemCurrent.id, "bg_id_Next");
            grid_queue.removeRowCss(itemCurrent.id, "bg_id_Current");
            //marca el video invalido
            grid_queue.addRowCss(itemCurrent.id, "bg_id_invalid");
            //mensaje de error
            console.error("video error", itemCurrent.path)


            //datos del siguiente video
            let nextIndex;
            if (index === grid_queue.data._order.length) {
                nextIndex = 0;
            } else {
                nextIndex = index + 1;
            }

            /**enviar a reproducir */
            var itemNext = grid_queue.data._order[nextIndex];
            SendFileToPlay({
                referencia: itemNext.ref,
                url: itemNext.path,
                in: itemNext.in,
                id: itemNext.id,
            });

        } catch (error) { }
    }

    setTimeout(() => RelojProgramador(), 900);
}
RelojProgramador();

//obtener contenido
const getContent = content => content.data._order ? content.data._order : []

const seeMessage = text => {
    iziToast.show({
        title: text,
        message: "",
        color: "blue", // blue, red, green, yellow
    });
}

/** guardar programacion */
ipcRenderer.on("saveScheduler", () => {
    if (localStorage.getItem("slst-path")) {
        saveFileSLST(localStorage.getItem("slst-path"))
    } else {
        saveAsScheduler();
    }
});

/** guardar programacion como */
ipcRenderer.on("saveAsScheduler", () => {
    saveAsScheduler();
});

const saveAsScheduler = () => {
    const options = {
        defaultPath: app.getPath("documents") + "/000-scheduler",
        title: "Guardar Programación",
        buttonLabel: "Guardar",
        filters: [{ name: "scheduler", extensions: ["slst"] }],
    };

    dialog.showSaveDialog(null, options).then((result) => {
        if (!result.canceled) {
            /**se guarda la ruta del archivo slst guardado */
            localStorage.setItem("slst-path", result.filePath.toString());
            saveFileSLST(result.filePath.toString());
        }
    }).catch((err) => {
        console.log(err);
    });
}

const saveFileSLST = path => {
    const dataScheduler = {
        list_path: getContent(grid_scheduler_list),
        event_path: getContent(grid_scheduler_event),
        ad_path: getContent(grid_scheduler_ad),
        graphics_path: getContent(dataview_graphics),
    };

    var fileGcContent = JSON.stringify(dataScheduler);

    fs.writeFile(path, fileGcContent, (err) => {
        if (err) throw err;
        dataScheduler.list_path.length > 0 ? seeMessage("¡List Guardado con exito!") : seeMessage("List no hay datos")
        dataScheduler.event_path.length > 0 ? seeMessage("¡Event Guardado con exito!") : seeMessage("Event no hay datos")
        dataScheduler.ad_path.length > 0 ? seeMessage("¡Ad Guardado con exito!") : seeMessage("Ad no hay datos")
        dataScheduler.graphics_path.length > 0 ? seeMessage("¡Gráficos Guardado con exito!") : seeMessage("Gráficos no hay datos")
    });
}



/** abrir programacion */
ipcRenderer.on("openScheduler", () => {
    dialog.showOpenDialog({
        title: "Abrir Programación",
        buttonLabel: "Abrir",
        properties: ["openFile"],
        filters: [{ name: "scheduler", extensions: ["slst"] }],
    }).then((result) => {
        if (!result.canceled) {
            //Luego carga los nuevos datos
            loadFileSLST(result.filePaths[0]);
            //guarda la ruta
            localStorage.setItem("slst-path", result.filePaths[0]);
        }
    }).catch((err) => {
        console.log(err);
    });
});

/** Cargar nuevos datos */
const loadFileSLST = path => {
    fetch(path)
        .then(res => res.json())
        .then(content => {
            /**si hay datos en la lista borrarlos primero */
            grid_scheduler_list.data._order && grid_scheduler_list.data._order.length > 0 ? grid_scheduler_list.data.removeAll() : null
            grid_scheduler_event.data._order && grid_scheduler_event.data._order.length > 0 ? grid_scheduler_event.data.removeAll() : null
            grid_scheduler_ad.data._order && grid_scheduler_ad.data._order.length > 0 ? grid_scheduler_ad.data.removeAll() : null
            dataview_graphics.data._order && dataview_graphics.data._order.length > 0 ? dataview_graphics.data.removeAll() : null

            /**luego carga los nuevos datos */
            grid_scheduler_list.data.parse(content.list_path);
            grid_scheduler_event.data.parse(content.event_path);
            grid_scheduler_ad.data.parse(content.ad_path);
            dataview_graphics.data.parse(content.graphics_path);
        });
}

// usamos ipc para comunicarnos con el proceso principal
ipcRenderer.on("open:fileType", (e, pathFile) => {
    if (pathFile !== ".") {
        fetch(pathFile)
            .then(res => res.json())
            .then(content => {
                grid_scheduler_list.data.add(content.list_path);
                grid_scheduler_event.data.add(content.event_path);
                grid_scheduler_ad.data.add(content.ad_path);
            });
    }
});