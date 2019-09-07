////////////////////         To Show The Outputs         /////////////////////////////////////
function forTableData(id1,column) {
var one = [12.6, 0.78, 0.85, 0.43, 0.13];
var two = [9, 0.57, 0.54, 0.02, 0.05];
var three = [76.2, 6.94, 5.51, 1.91, 0.12];
var four = [12, 0, 0, 0, 0];
var five = [88.3, 6.37, 5.09, 1.12, 0.95];
var six = [9.4, 0.64, 0.4, 0.1, 0.09];
var seven = [20.3, 1.49, 1, 0.18, 0.24];
var eight = [0, 0, 0, 0, 0];
var nine = [77.9, 7.04, 5.81, 0.37, 0.24];
var ten = [79.9, 6.11, 2.32, 2.44, 0.73];
var eleven = [10, 0.86, 0.76, 0.2, 0.13];
var twelve = [33.3, 1.97, 1.03, 0.37, 0.37];
var thirteen = [53.3, 3.84, 3.84, 0.73, 0.55];
var fourteen = [13.3 , 0.51, 0.51, 0.26, 0.13];
var fifteen = [21, 0, 0, 0, 0];
var sixteen = [28.4, 2.32,1.79 ,0.71 ,0.08];
var seventeen = [22.2,1.36 ,0.45 ,0.34 ,0.42];
var eighteen = [15, 0.94, 0.61, 0.22, 0.19];

var val = id1;
switch (val) {
  case "one":
    val = one[column];
    break;
  case  "two":
    val = two[column];
    break;
    case  "three":
    val = three[column];
    break;
    case  "four":
    val = four[column];
    break;
    case  "five":
    val = five[column];
    break;
    case  "six":
    val = six[column];
    break;
    case  "seven":
    val = seven[column];
    break;
    case  "eight":
    val = eight[column];
    break;
    case  "nine":
    val = nine[column];
    break;
    case  "ten":
    val = ten[column];
    break;
    case  "eleven":
    val = eleven[column];
    break;
    case  "twelve":
    val = twelve[column];
    break;
    case  "thirteen":
    val = thirteen[column];
    break;
    case  "fourteen":
    val = fourteen[column];
    break;
    case  "fifteen":
    val = fifteen[column];
    break;
    case  "sixteen":
    val = sixteen[column];
    break;
    case  "seventeen":
    val = seventeen[column];
    break;
    case  "eighteen":
    val = eighteen[column];
    break;

} 
  return val;
}

$('#bw').on("click keydown keypress focus change keyup blur", function() {
            var val1 = $('#bw').val();  
            var result = val1 * 0.72;   
            $('#id1').val(result.toFixed(1)); 
}); 
$('#id1').on("click keydown keypress focus change keyup blur", function() {
            var val2 = $('#id2').val();
            var val1 = $('#id1').val();  
            var result = val1 / val2;   
            $('#id3').val(parseInt(result.toFixed(1)));
});
$('#bw').on("click keydown keypress focus change keyup blur", function() {
            var val2 = $('#id2').val();
            var val1 = $('#id1').val();  
            var result = val1 / val2;   
            $('#id3').val(parseInt(result.toFixed(1)));
});
$('#id1').on("click keydown keypress focus change keyup blur", function() {
            var val2 = $('#id2').val();
            var val1 = $('#id1').val();  
            var result = val1 / val2;   
            $('#id3').val(parseInt(result.toFixed(1)));
});
$('#bw').on("click keydown keypress focus change keyup blur", function() {
            var val2 = $('#id2').val();
            var val1 = $('#id1').val();  
            var result =  (8.27*(val1/144))/val2;    
            $('#leu1').val(result.toFixed(1)); 
            leu4_change();
});
$('#id1').on("click keydown keypress focus change keyup blur", function() {
            var val2 = $('#id2').val();
            var val1 = $('#id1').val();  
            var result =  (8.27*(val1/144))/val2; 
            $('#leu1').val(result.toFixed(1)); 
            leu4_change();   
});
$('#id2').on("click keydown keypress focus change keyup blur", function() {
            var val2 = $('#id2').val();
            var val1 = $('#id1').val();  
            var result =  (8.27*(val1/144))/val2; 
            $('#leu1').val(result.toFixed(1));
            leu4_change();     
}); 
$('#id2').on("click keydown keypress focus change keyup blur", function() {
            var val2 = $('#id2').val();
            var val1 = $('#id1').val();  
            var result = val1 / val2;   
            $('#id3').val(parseInt(result.toFixed(1)));
}); 
$('#id2').on("click keydown keypress focus change keyup blur", function() { 
            var val2 = $('#id2').val();
            var val1 = $('#id1').val();  
            var result = (2.93 * (val1 / 144))/val2;  
            $('#id4').val(result.toFixed(1));
}); 
$('#bw').on("click keydown keypress focus change keyup blur", function() { 
            var val2 = $('#id2').val();
            var val1 = $('#id1').val();  
            var result = (2.93 * (val1 / 144))/val2; 
            $('#id4').val(result.toFixed(1));
}); 
$('#id2').on("click keydown keypress focus change keyup blur", function() { 
            var val2 = $('#id2').val();
            var val1 = $('#id1').val();  
            var result = (2.93 * (val1 / 144))/val2;  
            $('#id4').val(result.toFixed(1));
}); 
$('#id5').on("click keydown keypress focus change keyup blur", function() { 
            var id1 = $('#id5').val();  
            var id2 = $('#id6').val();   
            var column = 3;
            var val1 = Number(forTableData(id1,column)); 
            var val2 = Number(id2);   
            var result = (val1)*(val2/100);  
            $('#id7').val(result.toFixed(1));
}); 
$('#id5').on("click keydown keypress focus change keyup blur", function() { 
            var id1 = $('#id5').val();  
            var id2 = $('#id6').val();   
            var column = 1; 
            var val1 = Number(forTableData(id1,column)); 
            var val2 = Number(id2);   
            var result = (val1)*(val2/100);
            $('#leu2').val(result.toFixed(1));
            leu4_change(); 
}); 
$('#id6').on("click keydown keypress focus change keyup blur", function() { 
            var id1 = $('#id5').val();  
            var id2 = $('#id6').val();   
            var column = 1; 
            var val1 = Number(forTableData(id1,column)); 
            var val2 = Number(id2);   
            var result = (val1)*(val2/100);
            $('#leu2').val(result.toFixed(1)); 
            leu4_change(); 
}); 
$('#id6').on("click keydown keypress focus change keyup blur", function() { 
            var id1 = $('#id5').val();  
            var id2 = $('#id6').val();   
            var column = 3;
            var val1 = Number(forTableData(id1,column)); 
            var val2 = Number(id2);   
            var result = (val1)*(val2/100);  
            $('#id7').val(result.toFixed(1));
}); 
$('#id8').on("click keydown keypress focus change keyup blur", function() { 
            var id1 = $('#id8').val();  
            var id2 = $('#id9').val();  
            var column = 3; 
            var val1 = forTableData(id1,column); 
            var val2 = id2;  
            var result = (val1)*(val2/100); 
            $('#id10').val(Number(result.toFixed(1))); 
            leu4_change(); 
});  
$('#id8').on("click keydown keypress focus change keyup blur", function() { 
            var id1 = $('#id8').val();  
            var id2 = $('#id9').val();  
            var column = 1; 
            var val1 = forTableData(id1,column); 
            var val2 = id2;  
            var result = (val1)*(val2/100); 
            $('#leu3').val(Number(result.toFixed(1)));
            leu4_change(); 
});  
$('#id9').on("change click keydown keypress focus keyup blur", function() { 
            var id1 = $('#id8').val();  
            var id2 = $('#id9').val();  
            var column = 1; 
            var val1 = forTableData(id1,column); 
            var val2 = id2;  
            var result = (val1)*(val2/100); 
            $('#leu3').val(Number(result.toFixed(1)));
            leu4_change(); 
}); 

$('#id9').on("click keydown keypress focus change keyup blur", function() { 
            var id1 = $('#id8').val();  
            var id2 = $('#id9').val();   
            var column = 3;
            var val1 = forTableData(id1,column); 
            var val2 = id2;  
            var result = (val1)*(val2/100);  
            $('#id10').val(Number(result.toFixed(1)));
});  
$('#id6').on("click keydown keypress focus change keyup blur", function() { 
            var id1 = $('#id7').val();  
            var id2 = $('#id10').val(); 
            var result = Number(id1) + Number(id2);  
            $('#id11').val(result.toFixed(1));
});
$('#id10').on("click keydown keypress focus change keyup blur", function() { 
            var id1 = $('#id7').val();  
            var id2 = $('#id10').val(); 
            var result = Number(id1) + Number(id2);  
            $('#id11').val(result.toFixed(1));
});
$('#leu1').on("click keydown keypress focus change keyup blur", function() { 
            leu4_change();
});
$('#leu4').on("click keydown keypress focus change keyup blur", function() { 
            leu4_change();
});
$('#id8').on("click keydown keypress focus change keyup blur", function() { 
            var id1 = $('#id7').val();  
            var id2 = $('#id10').val(); 
            var result = Number(id1) + Number(id2);  
            $('#id11').val(result.toFixed(1));
}); 
$('#id4').on("click keydown keypress focus change keyup blur", function() {
            var id1 = $('#id4').val();
            var id2 = $('#id11').val();
            var val1 = Number(id1);
            var val2 = Number(id2); 
            var result = (val2 * 100) / val1 ; 
            $('#id12').val(result.toFixed(1) + "%"); 
            changechart();
});
$('#id1').on("click keydown keypress focus change keyup blur", function() {
            var id1 = $('#id4').val();
            var id2 = $('#id11').val();
            var val1 = Number(id1);
            var val2 = Number(id2); 
            var result = (val2 * 100) / val1 ; 
            $('#id12').val(result.toFixed(1) + "%"); 
            changechart();
});
$('#id8').on("click keydown keypress focus change keyup blur", function() {
            var id1 = $('#id4').val();
            var id2 = $('#id11').val();
            var val1 = Number(id1);
            var val2 = Number(id2); 
            var result = (val2 * 100) / val1 ; 
            $('#id12').val(result.toFixed(1) + "%"); 
            changechart();
});
$('#id5').on("click keydown keypress focus change keyup blur", function() { 
            var id1 = $('#id7').val();  
            var id2 = $('#id10').val(); 
            var result = Number(id1) + Number(id2);  
            $('#id11').val(result.toFixed(1));
}); 
$('#id1').on("click keydown keypress focus change keyup blur", function() { 
            var id1 = $('#id7').val();  
            var id2 = $('#id10').val(); 
            var result = Number(id1) + Number(id2);  
            $('#id11').val(result.toFixed(1));
}); 
$('#id3').on("click keydown keypress focus change keyup blur", function() { 
            var id1 = $('#id7').val();  
            var id2 = $('#id10').val(); 
            var result = Number(id1) + Number(id2);  
            $('#id11').val(result.toFixed(1));
}); 
$('#id4').on("click keydown keypress focus change keyup blur", function() { 
            var id1 = $('#id7').val();  
            var id2 = $('#id10').val(); 
            var result = Number(id1) + Number(id2);  
            $('#id11').val(result.toFixed(1));
}); 
$('#id7').on("click keydown keypress focus change keyup blur", function() { 
            var id1 = $('#id7').val();  
            var id2 = $('#id10').val(); 
            var result = Number(id1) + Number(id2);  
            $('#id11').val(result.toFixed(1));
}); 
$('#id9').on("click keydown keypress focus change keyup blur", function() { 
            var id1 = $('#id7').val();  
            var id2 = $('#id10').val(); 
            var result = Number(id1) + Number(id2);  
            $('#id11').val(result.toFixed(1));
}); 
$('#id4').on("click keydown keypress focus change keyup blur", function() { 
            var id1 = $('#id7').val();  
            var id2 = $('#id10').val(); 
            var result = Number(id1) + Number(id2);  
            $('#id11').val(result.toFixed(1));
}); 
$('#id2').on("click keydown keypress focus change keyup blur", function() { 
            var id1 = $('#id7').val();  
            var id2 = $('#id10').val(); 
            var result = Number(id1) + Number(id2); 
            $('#id11').val(result.toFixed(1));
}); 
$('#id6').on("change click keydown keypress focus keyup blur", function() {
            var id1 = $('#id4').val();
            var id2 = $('#id11').val();
            var val1 = Number(id1);
            var val2 = Number(id2); 
            var result = (val2 * 100) / val1 ; 
            $('#id12').val(result.toFixed(1) + "%");
}); 
$('#id5').on("click keydown keypress focus change keyup blur", function() {
            var id1 = $('#id4').val();
            var id2 = $('#id11').val();
            var val1 = Number(id1);
            var val2 = Number(id2); 
            var result = (val2 * 100) / val1 ; 
            $('#id12').val(result.toFixed(1) + "%"); 
            changechart();
}); 
$('#id7').on("click keydown keypress focus change keyup blur", function() {
            var id1 = $('#id4').val();
            var id2 = $('#id11').val();
            var val1 = Number(id1);
            var val2 = Number(id2); 
            var result = (val2 * 100) / val1 ;   
            $('#id12').val(result.toFixed(1) + "%");
            changechart();
});
$('#id2').on("click keydown keypress focus change keyup blur", function() {
            var id1 = $('#id4').val();
            var id2 = $('#id11').val();
            var val1 = Number(id1);
            var val2 = Number(id2); 
            var result = (val2 * 100) / val1 ; 
            $('#id12').val(result.toFixed(1) + "%"); 
            changechart();
}); 
$('#id9').on("click keydown keypress focus change keyup blur", function() {
            var id1 = $('#id4').val();
            var id2 = $('#id11').val();
            var val1 = Number(id1);
            var val2 = Number(id2); 
            var result = (val2 * 100) / val1 ; 
            $('#id12').val(result.toFixed(1) + "%"); 
            changechart();
});     
// $('#leu2').on("change click keydown keypress focus keyup blur", function() { 
//             var id1 = $('#leu2').val();  
//             var id2 = $('#leu3').val();
//             var result = Number(id1) + Number(id2); 
//             leu5_change(); 
//             $('#leu4').val(Number(result.toFixed(2)));
// });
// $('#leu3').on("change click keydown keypress focus keyup blur", function() { 
//             var id1 = $('#leu2').val();  
//             var id2 = $('#leu3').val();
//             var result = Number(id1) + Number(id2);  
//             leu5_change();
//             $('#leu4').val(Number(result.toFixed(2)));
// });
           
function leu4_change() {
    var id1 = $('#leu2').val();  
    var id2 = $('#leu3').val();
    var result = Number(id1) + Number(id2);
    $('#leu4').val(Number(result.toFixed(1))); 
    leu5_change();  
}

function leu5_change() {
    var id1 = $('#leu1').val();  
    var id2 = $('#leu4').val();
    var result = (Number(id2) / Number(id1)) * 100;
    $('#leu5').val(Number(result.toFixed(1)) + '%'); 
    changechart();
} 

function changechart(leu,meth){ 
    var int_val1 =  document.getElementById("leu5").value; 
    var int_val2 =  document.getElementById("id12").value;
    var leu_arr = int_val1.split("%");
    var meth_arr = int_val2.split("%");
    var leu = leu_arr[0];
    var meth = meth_arr[0];
 
    // var leu=document.getElementById("input-leu").value; 
    // var meth=document.getElementById("input-meth").value; 

    /*free_space1 = (parseFloat(100 - leu).toFixed(1));
    free_space2 = (parseFloat(100 - meth).toFixed(1));

    free_space = [free_space1, free_space2];
    fill_space = [parseFloat(leu), parseFloat(meth)];
    console.log(free_space);
    console.log(fill_space);*/

    free_space1 = parseFloat(Number(100 - leu).toFixed(1));
    free_space2 = parseFloat(Number(100 - meth).toFixed(1));

    free_space = [free_space1, free_space2];
    fill_space = [parseFloat(leu), parseFloat(meth)];
    console.log(free_space);
    console.log(fill_space);


  Highcharts.chart('container', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Stacked column chart'
  },
  xAxis: {
    categories: ['Leucine', 'Methionine']
  },
  yAxis: {
    min: 0,
    max: 100,
    title: {
      text: 'Total'
    },
    stackLabels: {
      enabled: false,
      style: {
        fontWeight: 'normal',
        color: ( // theme
          Highcharts.defaultOptions.title.style &&
          Highcharts.defaultOptions.title.style.color
        ) || 'red'
      }
    }
  },
  legend: {
    enabled: false,
    align: 'right',
    x: -30,
    verticalAlign: 'top',
    y: 1,
    floating: true,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
  },
  tooltip: {
    enabled: false,
    headerFormat: '<b>{point.x}</b><br/>',
    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        formatter: function ()  {    
        //if(this.x == 'John') 
            var colors = Highcharts.getOptions();
            console.log(colors)
            return this.y+"%";
          }
      }
    }
  },
  series: [{
    name: 'free_space',
    data: free_space //[30, 65]
  }, {
    name: 'Jane',
    data: fill_space
  }]
});
}
 