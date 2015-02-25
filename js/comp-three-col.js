// ------- GLOBALS ------- //
	var public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/1TDZveGDG_hYmXFlzaAPJUEpcr6KBWNAX_OCk0M8fn_Q/pubhtml";	
	var prettyComparisons = {
		control:[],
		columnLength:0,
		emphasis:null,
		data:[],
		flags:{
			source:false,
			notes:false
		},
		meta:{
			title:1,
			columns:2,
			emphasis:3,
			source:4,
			notes:5
		},
		dataLength:0,
		totalTabs:1,
		parseData:function(){
			$.getJSON('data/data.json', function(d){
				prettyComparisons.data = d;
				prettyComparisons.dataLength = prettyComparisons.data.length;	
			});	

			$.getJSON('data/control.json', function(d){
				prettyComparisons.control = d;
				prettyComparisons.columnLength = parseInt(prettyComparisons.control[prettyComparisons.meta.columns][1]);
				prettyComparisons.emphasis = parseInt(prettyComparisons.control[prettyComparisons.meta.emphasis][1]);	

				if (prettyComparisons.control[prettyComparisons.meta.source][1] != ''){
					prettyComparisons.flags.source = true;
				}

				if (prettyComparisons.control[prettyComparisons.meta.notes][1] != ''){
					prettyComparisons.flags.notes = true;
				}
				
				prettyComparisons.createApp();
			});			
		},
		createApp: function(){
			this.createTable();
			this.createMeta();
		},
		createTable: function(){
			var contain, table, td, tr, th;
			var frag = document.createDocumentFragment();
			var frag2 = document.createDocumentFragment();
			var frag3 = document.createDocumentFragment();

			contain = document.getElementById('compare-content');
			table = document.createElement('table');
			thead = document.createElement('thead');
			tbody = document.createElement('tbody');

			/* ROWS
			---------------------------------*/
			for (var i = 0; i < prettyComparisons.dataLength; i++){
				tr = document.createElement('tr');
				if (i == 0){
					for (var j = 0 ; j < prettyComparisons.columnLength; j++){
						th = document.createElement('th');
						th.appendChild(document.createTextNode(prettyComparisons.data[0][j]));
						frag3.appendChild(th);
					}
					tr.appendChild(frag3);
					thead.appendChild(tr);
				}
				else {
					for (var j = 0 ; j < prettyComparisons.columnLength; j++){
						td = document.createElement('td');
						td.appendChild(document.createTextNode(prettyComparisons.data[i][j]));
						frag2.appendChild(td);
					}

					// Append Row 
					tr.appendChild(frag2);
					frag.appendChild(tr);
				}
			}

			/* TABLE
			---------------------------------*/
			table.appendChild(thead);
			tbody.appendChild(frag);
			table.appendChild(tbody);
			contain.appendChild(table);
		},
		createMeta: function(){
			$('#compare-header').append('<h1>'+ this.control[prettyComparisons.meta.title][1] +'</h1>');

			if(this.emphasis != null){
				$('tbody td:nth-of-type('+ prettyComparisons.emphasis +')').css({
					'background': 	'#c5f9f0',
					'font-weight': 	700,
					'font-size': 	'1em',
					'text-align': 	'center'
				})
			}

			if (this.flags.source == true){
				$('#compare-footer').append('<p><strong>Source: </strong>'+ prettyComparisons.control[prettyComparisons.meta.source][1]+'</p>');
			}

			if (this.flags.notes == true){
				$('#compare-footer').append('<p><strong>Notes: </strong>'+ prettyComparisons.control[prettyComparisons.meta.notes][1]+'</p>');
			}
		}
	}

	// ------- TABLETOP ------- //
	$(document).ready(function(){
		prettyComparisons.parseData();	
	});





