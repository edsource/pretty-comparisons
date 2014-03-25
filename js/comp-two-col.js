// ------- GLOBALS ------- //
	var curTab = 0;
	var maxTabs = 0;
	var tabletopTest = false;
	var compareControl = [];	
	var compareData = [[],[],[],[]];
	var public_spreadsheet_url = "https://docs.google.com/spreadsheet/pub?key=0AnZDmytGK63SdEV6WmJ4T1lBQTNycnM2MVEwMGoyMnc&output=html";
	

// ------- TABLETOP ------- //

	$(document).ready(function(){
			Tabletop.init( { key: public_spreadsheet_url,
		                     callback: showInfo,
		                     wanted: ["control","tab1","tab2","tab3","tab4"],
		                     debug: true } );
	});

	function showInfo(data, tabletop) {		
		//verify Tabletop
		tabletopTest = true;
		
		$.each( tabletop.sheets("control").all(), function(i, control) {
			var insertRow = [];
			insertRow[0] = control.meta;
			insertRow[1] = control.tab1;
			insertRow[2] = control.tab2;
			insertRow[3] = control.tab3;
			insertRow[4] = control.tab4;
			compareControl.push(insertRow);
		});
		
		$.each(tabletop.sheets("tab1").all(), function(i, tab1){
			var insertRow = [[]];
			insertRow[0] = tab1.left;
			insertRow[1] = tab1.right;
			compareData[0].push(insertRow)
		});
		
		$.each(tabletop.sheets("tab2").all(), function(i, tab2){
			var insertRow = [[]];
			insertRow[0] = tab2.left;
			insertRow[1] = tab2.right;
			compareData[1].push(insertRow)
		});
		
		$.each(tabletop.sheets("tab3").all(), function(i, tab3){
			var insertRow = [[]];
			insertRow[0] = tab3.left;
			insertRow[1] = tab3.right;
			compareData[2].push(insertRow)
		});
		
		$.each(tabletop.sheets("tab4").all(), function(i, tab4){
			var insertRow = [[]];
			insertRow[0] = tab4.left;
			insertRow[1] = tab4.right;
			compareData[3].push(insertRow)
		});
		
		//begin process of populating tabs, detecting number of tabs, etc.		
		verifyData();
	}
	
	
	
	
	function verifyData(){
		var x = 0;
		
		//reads what tabs are activated in spreadsheet
		for (i = 1 ; i < 5 ; i++){
			var e = i - 1;
			if (compareControl[0][i] === "no" || compareControl[0][i] === "No" || compareControl[0][i] === undefined || compareControl[0][i] === null){
				$("#compare-content-" + e).remove();
				$(".compare-nav-tab[data='" + e + "']").remove();
			}
			else {
				x = x + 1; 
			}	
		}
		
		//set margins for nav buttons
		switch(x){
			case 1:
				$(".compare-nav-tab").remove();
				break;
			case 2:
				$(".compare-nav-tab").css("margin","0 90px");
				break;
			case 3:
				$(".compare-nav-tab").css("margin","0 38px");
				break;
			case 4:
				$(".compare-nav-tab").css("margin","0 12px");
				break;
		}
		
		populateData(x);
	}
	
	function populateData(numTabs){
		//determine max tabs
		maxTabs = numTabs;
		
		//populate tabs with spreadsheet information
		for (i = 0 ; i < numTabs ; i++){
			var e = i + 1;

			//populate headers for columns in each tab
			$("#compare-content-" + i + " h4:eq(0)").html(compareControl[1][e]);
			$("#compare-content-" + i + " h4:eq(1)").html(compareControl[2][e]);
			$("#compare-nav div:eq(" + i + ")").html(compareControl[3][e]);
			
			//populate content for each tab
			seedTable(i)		
		}
		
		//size columns
		$(".compare-content-left").attr("style","width:" + compareControl[8][1] +"px");
		$(".compare-content-right").attr("style","width:" + compareControl[9][1] +"px");
		$(".compare-content-row td:eq(0)").css("width",compareControl[8][1] +"px");
		$(".compare-content-row td:eq(1)").css("width",compareControl[9][1] +"px");
		
		//graphic information
		$("#compare-header h1").html(compareControl[4][1]);
		$("title").html(compareControl[4][1]);
		$("#compare-header p:eq(0)").html(compareControl[7][1]);
		$("#compare-header p:eq(1)").html(compareControl[5][1]);
		$("meta[name='description']").attr("content", compareControl[5][1]);
		$("#compare-header p:eq(2)").html("Source: " + compareControl[6][1]);
	
		//activate first nav button
		$(".compare-nav-tab:eq(0)").css("background","#4c631a").css("border-top-color","#4c631a");
		
	}
	
	function seedTable(tab){
		for (x = 0 ; x < compareData[tab].length ; x++){
			$("#compare-content-" + i + " tbody").append("<tr class=\"compare-content-row\"><td><p>" + compareData[tab][x][0] + "</p></td><td><p>" + compareData[tab][x][1] + "</p></td></tr>");
		}
	}


// ------- NAVIGATION ------- //
	$(document).ready(function(){
		$(".compare-nav-tab").on("click", function(){
				var $i = $(this).attr("data");
				$(".compare-nav-tab").removeAttr("style");
				$(this).css("background","#4c631a").css("border-top-color","#4c631a");
				$("#compare-content-" + curTab).css("display","none");		
				$("#compare-content-" + $i).css("display","block");
				curTab = $i;
		})
		

	});