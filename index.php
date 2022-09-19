<html>
<head>
    <!--icons-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Saira:wght@100&display=swap" rel="stylesheet">
    <!--custom-->
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="main.js"></script>
</head>

<?php
//GLOBALS
$headline = "";
$filterString = "";
$lang;
$linecount;
$TableHeaderArr = array(
    1 => "Printer",
    2 => "User",
    3 => "JobID",
    4 => "Timestamp",
    5 => "No. of Sheets",
    6 => "Job-Billing",
    7 => "Host-Name",
    8 => "Doc-Name",
);
$filename = "page_log";
$handle = fopen($filename, "r");
?>

<body>
    <div class="topnav">
        <div class="nav">
            <div id="time"></div>
            <a href="index.php?page=index" class="active" href="#index">Index</a>
            <a href="index.php?page=orderlist">Auftragsliste</a>
        </div>
        <input type="text" placeholder="Filter.."> </input>
        <label id="count">Page(s) printed: <div id="pages"></div>
         </label>
        <button type="button" onclick="incCount()"> </button>
        <br>
        <i class="fa fa-info-circle"> </i>
        <div id="pagelog"><?php checkPage_log() ?></div>
    </div>
</body>

<?php

if ($_GET['page'] == "index") {
    $headline = "Startseite";
    echo "<h1>" . $headline . "</h1>";
}

if ($_GET['page'] == "orderlist") {
    viewOrderlist();
}

function localize()
{
    if (!isset($_GET['langID']))
        $lang = 'en';
    else
        $lang = $_GET['langID'];

    include('locale/' . $lang . '.php');
}


function checkPage_log()
{
    global $filename;
    global $handle;
    if ($handle) {
        echo "$filename gefunden!";
        fclose($handle);
    } else {
        echo "$filename nicht gefunden!";
    }
}

set_error_handler(function () {
});

function viewOrderlist()
{
    global $filename;
    $handle = fopen($filename, "r");
    readLineByLine($handle);
}


//DEFINE FUNCTIONS
function readLineByLine($handle)
{
    if ($handle) {        
        echo "<table id=table>";
        addTableHeaderToTable();
        while (($line = fgets($handle)) !== false) {
            if (setFilter($line)) {
                addLineToTable($line);
                global $linecount;
                $linecount += 1;
            }
        }
        echo "</table>";
    } else {
        echo "page_log nicht gefunden!";
    }

    fclose($handle);
}

function setFilter($line)
{
    global $filterString;
    $search = $filterString;

    if (str_contains($line, $search) or ($search = "")) {
        return true;
    }
}

function addTableHeaderToTable()
{
    global $TableHeaderArr;
    echo "<tr>";
    foreach ($TableHeaderArr as $th) {
        echo "<th>" . $th . "</th>";
    }
    echo "</tr>";
}

function addLineToTable($line)
{
    fillArrayWithLines($line);
    echo "<tr>";
        if (!empty($line)) {
            echo "<td>" .  str_replace("-", "", $line) . "</td>";
        }
    echo "</tr>";
}

function fillArrayWithLines($line)
{
    //TODO Array
   $arr = array(); 

    $tok = strtok($line, " "); 

    while ($tok !== false) {

        // if (substr($tok,0,1) == '-'){
        //     str_replace("–", "", $tok);
        // }

        if (substr($tok,0,1) == '['){
            // echo "$tok";
            $tok = strtok(" ");
        }
        else
        {
            // echo "$tok<br />";
            $tok = strtok(" ");
        }

        $arr[] = $tok;
    }

    foreach (array_values($arr) as $a){
        // echo $a;
    }
}
?>

<script>
    getCurrentTime();
</script>

</html>