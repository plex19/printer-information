function incCount()
{
    var pages = document.getElementById('pages');
    pages.textContent = parseInt(pages.textContent) += 1;
}

function getCurrentTime() {
    var time = document.getElementById('time');
    var date, day, month, year, hour, min, sec;
    date = new Date();
    day = date.getDay();
    month = date.getMonth();
    year = date.getFullYear();

    hour = date.getHours();
    min = date.getMinutes() <= 9 ? min = '0' + date.getMinutes() : min = date.getMinutes();
    sec = date.getSeconds() <= 9 ? sec = '0' + date.getSeconds() : sec = date.getSeconds();  
    var datetime = day +"."+ month +"."+ year + " " + hour + ":" + min + ":" + sec;
    
    time.textContent = datetime;
    setInterval(getCurrentTime, 1000);
}

// <?php

// $headline = "";
// $filterString = "";
// $lang;

// //localize();

// if ($_GET['page'] == "index") {
//     $headline = "Startseite"; // $langArray['index'];
//     echo "<h1>" . $headline . "</h1>";
// }

// if ($_GET['page'] == "orderlist") {
//     $TableHeaderArr = array(
//         1 => "Printer",
//         2 => "User",
//         3 => "JobID",
//         4 => "Timestamp",
//         5 => "No. of Sheets",
//         6 => "Job-Billing",
//         7 => "Host-Name",
//         8 => "Doc-Name",
//     );
//     $array1 = array(
//         "a" => "PrinterPrinterPrinterPrinterPrinterPrinterPrinter",
//         "b" => "2",
//         "c"   => -3,
//         "d"  => 4,
//         "ba" => "2",
//         "ca"   => -3,
//         "da"  => 4,
//         "daa"  => 4,
//     );

//     echo "<table>";
//     echo "<tr>";
//     foreach ($TableHeaderArr as $th) {
//         echo "<th>" . $th . "</th>";
//     }
//     echo "</tr>";
//     echo "<tr>";
//         foreach ($array1 as $td) {
//             echo "<td>" . $td . "</td>";
//         }
//     echo "</tr>";
//    echo "</table>";


//     #       $headline = "Aufgabenliste"; //$langArray['orderlist'];
//     #       echo "<div class='headline'>";
//     #       echo $headline;
//     #       echo "<form class='filter'> <input type='text' placeholder='Filter' value='filterString'></input><input type='button' value='filter'></form>";
//     #       echo "</div>";
//     #       echo "<div class='orderlist'>";
//     #       echo viewOrderlist($filterString);
//     #       echo "</div>";
// }


// function localize()
// {
//     if (!isset($_GET['langID']))
//         $lang = 'en';
//     else
//         $lang = $_GET['langID'];

//     include('locale/' . $lang . '.php');
// }


// function checkPage_log()
// {
//     $filename = "page_log";
//     $handle = fopen($filename, "r");
//     if ($handle) {
//         echo "$filename gefunden!";
//         fclose($handle);
//     } else {
//         echo "$filename nicht gefunden!";
//     }
// }

// set_error_handler(function () {
// });

// date_default_timezone_set('Europe/Vienna');

// function viewOrderlist($filterString)
// {
//     //DEFINE VARIABLES
//     $filename = "page_log";
//     $handle = fopen($filename, "r");
//     $lineCount = 0;

//     readLineByLine($handle, $lineCount, $filterString);
// }


// //DEFINE FUNCTIONS
// function readLineByLine($handle, $lineCount, $filterString)
// {

//     if ($handle) {
//         while (($line = fgets($handle)) !== false) {
//             if (setFilter($filterString, $line)) {
//                 echo str_replace("-", "", $line);
//                 echo "<br>";
//                 $lineCount += 1;
//             }
//         }
//     } else {
//         echo "page_log nicht gefunden!";
//     }

//     fclose($handle);
// }

// function setFilter($search, $line)
// {
//     if (str_contains($line, $search) or ($search = "")) {
//         return true;
//     }

// }
// ?>

<script type="text/javascript">
    {/* var TableHeaderArr = <?php $TableHeaderArr ?>; */}
    document.getElementById("demo").innerHTML = count($TableHeaderArr);

    function setValue() {
        document.getElementById("demo").innerHTML = "0";
    }
</script>


// <!-- <form name="langSelect" action="index.php" method="get">
//         https://lokalise.com/blog/implementing-php-localization-complete-guide/
//         <select name="langID" id="langID">
//             <option>Select Language</option>
//             <option value="de">Deutsch</option>
//             <option value="en">English</option>
//         </select>
//         <button type="submit">select Language</button>
//     </form> -->

//     <p> Tool zum Anzeigen, aller Druckaufträge die mit <a href="https://www.cups.org/">CUPS</a> durchgeführt werden, hierzu muss das page_log File einfach in den web Order des Projekts verlinkt werden, das Programm greift dann auf dieses zu und liest die Informationen daraus aus.<br>
//Das Tool enthält ein Zählwerk, um alle durchgeführten Drucke mitzuzählen.<br>
//Unter Auftragsliste sind alle Aufträge aufgeführt, diese kann man mit dem Filter auch spezifisch anpassen.
//</p>
