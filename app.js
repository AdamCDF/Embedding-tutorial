console.log("egg")
let viz;
// commentary egg
// create variable to store viz container
// create variable to store dashboard options
// create variable to store url of dashboard

const vizContainer = document.getElementById("vizContainer");
const option = {
    device:"desktop",
    height: "800px",
    width: "1100px"
};
const url = "https://public.tableau.com/views/EmbeddingWorkbookProfitsAcrossME-Asia/OfficeSupplyProfitsacrossMEandAsia";

function initViz(){
    viz = new tableau.Viz(vizContainer,url,option)
}


// Listeners vvv

document.addEventListener("DOMContentLoaded",initViz);

// button time

const exportpdfbutton = document.getElementById("exportPDF")
exportpdfbutton.addEventListener("click", exportpdffunction);

function exportpdffunction(){
    viz.showExportPDFDialog();
}

const exportPPTbutton = document.getElementById("exportPPT")
exportPPTbutton.addEventListener("click", exportPPTfunction);

function exportPPTfunction(){
    viz.showExportPowerPointDialog();
}

//filtering

document.getElementById("Filterbutton").addEventListener("click", applyfilterfunction)

function applyfilterfunction(){
    const minValue = document.getElementById("minValue").value;
    const maxValue = document.getElementById("maxValue").value;
    console.log(minValue,maxValue);
    const workbook = viz.getWorkbook();
    const activeSheet = workbook.getActiveSheet();
    console.log(activeSheet);
    const sheets = activeSheet.getWorksheets();
    console.log(sheets);
    const sheettofilter = sheets[0];
    sheettofilter.applyRangeFilterAsync("SUM(Sales)",{min:minValue, max:maxValue}).then(alert("Viz Filtered! Wahoo!ヽ(✿ﾟ▽ﾟ)ノ"));
}