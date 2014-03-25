Simple Comparisons
==================

This repo contains templates for making simple app that compares two or three columns of data side-by-side. The data for the app is input in a Google Spreadsheet using one of the templates provided. That information is then translated into the app. This a great tool for non-coders who want to make a simple comparison app. 

The app allows the user to compare up to four different types of information, using a tab-based navigation to switch between different screens. Below is an example from EdSource where we wanted to compare Common Core standards across four grade levels. Using the app, we placed each grade's standards in a different tab. You can easily turn tabs on or off from the Spreadsheet.

<img style="margin:15px 0;width:500px;" src="http://edsource.org/wp-content/profiles/filedump/comp-two-col-example.png">

By default, the app is 600px in width, with the width of the table columns inside the app customizable in the Google Spreadsheet template. You will have to mess with the CSS of the app if you want to resize it overall at this time. 

<h4>Dependencies</h4>

<ul>
	<li><a href="http://jquery.com/">JQuery</a>: Called from a Google server</li>
	<li><a href="https://github.com/jsoma/tabletop">Tabletop</a>: Used to connect a Google Spreadsheet with the app. There is a copy inside the js folder</li>
</ul>


<h4>Examples</h4>
<ul>
	
	<li><a href="http://edsource.org/wp-content/iframe/2014-01-17-lilly-compare/compare-temp.html">Two Column: Changing Standards</a></li>
	<li><a href="http://edsource.org/2014/mixed-results-for-charter-schools-statewide-in-new-study/59934">Three Column: Charter School Report</a></li>
</ul>


<h4>Setup</h4>
<ul>
	<li>Copy one of the following Google Spreadsheet templates depending on your need:
		<ul>
			<li><a href="https://docs.google.com/spreadsheet/ccc?key=0AnZDmytGK63SdEV6WmJ4T1lBQTNycnM2MVEwMGoyMnc#gid=0">A two-column comparison</a></li>
			<li><a href="https://docs.google.com/spreadsheet/ccc?key=0AnZDmytGK63SdGduSjNfbzlUOF9TTnRxeW9vNDF3SEE&usp=drive_web#gid=0">A three-column comparison</a></li>
		</ul></li>
	<li></li>
</ul>

<h4>Notes</h4>

<ul>
	<li>Do NOT use Google's new spreadsheets at this time. As of March 25, 2013, there is no API support for the new GSheets, meaning it WILL break Tabletop.js.</li>
	<li>There is a known bug with Tabletop.js where if a user is timed out of their Google account, it will break Tabletop. One way to avert this is by installing and using <a href="https://github.com/jsoma/flatware">Flatware</a>.</li>
</ul>
