// ------- GLOBALS ------- //
	var curTab = 0;
	var maxTabs = 0;
	var tabletopTest = false;
	var compareControl = [];
	var compareData = [[],[],[],[]];
	var public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/1TDZveGDG_hYmXFlzaAPJUEpcr6KBWNAX_OCk0M8fn_Q/pubhtml";	


// ------- TABLETOP ------- //
	$(document).ready(function(){
			Tabletop.init( { key: public_spreadsheet_url,
		                     callback: showInfo,
		                     wanted: ["control","tab1"],
		                     debug: true } );
	});

	function showInfo(data, tabletop) {		
		//verify Tabletop
		tabletopTest = true;
		
		$.each( tabletop.sheets("control").all(), function(i, control) {
			var insertRow = [];
			insertRow[0] = control.meta;
			insertRow[1] = control.tab1;
			compareControl.push(insertRow);
		});

		$.each(tabletop.sheets("tab1").all(), function(i, tab1){
			var insertRow = [[]];
			insertRow[0] = tab1.left;
			insertRow[1] = tab1.center;
			insertRow[2] = tab1.right;
			compareData[0].push(insertRow)
		});
		
		verifyData();
	}




	function verifyData(){
		var x = 0;
		for (i = 1 ; i < 5 ; i++){
			var e = i - 1;
			if (compareControl[0][i] === "no"){
				$("#compare-content-" + e).remove();
			}
			else {
				x = x + 1; 
			}	
		}
		populateData(x);
	}

	function populateData(numTabs){
		//populate tabs with spreadsheet information
		for (i = 0 ; i < numTabs ; i++){
			var e = i + 1;
			maxTabs = maxTabs + 1;
			$("#compare-content-" + i + " h4:eq(0)").html(compareControl[1][e]);
			$("#compare-content-" + i + " h4:eq(1)").html(compareControl[2][e]);
			$("#compare-content-" + i + " h4:eq(2)").html(compareControl[3][e]);
			seedTable(i)		
		}

		//size columns
		$(".compare-content-left").attr("style","width:" + compareControl[9][1] +"px");
		$(".compare-content-center").attr("style","width:" + compareControl[10][1] +"px");
		$(".compare-content-right").attr("style","width:" + compareControl[11][1] +"px");
		$(".compare-content-row td").css("width",compareControl[10][1] +"px");
		$(".compare-content-row td:eq(0)").css("width",compareControl[9][1] +"px");
		$(".compare-content-row td:eq(" + maxTabs + ")").css("width",compareControl[11][1] +"px");

		//graphic information
		$("#compare-header h1").html(compareControl[5][1]);
		$("title").html(compareControl[5][1]);
		$("#compare-header p:eq(0)").html("By " + compareControl[8][1]);
		$("#compare-header p:eq(1)").html(compareControl[6][1]);
		$("meta[name='description']").attr("content", compareControl[6][1]);
		$("#compare-header p:eq(2)").html("Source: " + compareControl[7][1]);
		
		
	}

	function seedTable(tab){
		for (x = 0 ; x < compareData[tab].length ; x++){
			$("#compare-content-" + i + " tbody").append("<tr class=\"compare-content-row\"><td><p>" + compareData[tab][x][0] + "</p></td><td><p>" + compareData[tab][x][1] + "</p></td><td><p>" + compareData[tab][x][2] + "</p></td></tr>");
		}
	}


// ------- NAVIGATION ------- //

	$(document).ready(function(){
		$(".compare-nav-tab").on({
			click:function(){
				var i = $(this).attr("data");
				$(".compare-nav-tab").removeAttr("style");
				$(this).css("background","#4c631a").css("border-top-color","#4c631a");
				$("#compare-content-" + curTab).css("display","none");		
				$("#compare-content-" + i).css("display","block");
				curTab = i;	
			}
		});
	});

