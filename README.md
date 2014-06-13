Simple Comparisons
==================
<strong>UPDATED March 25, 2013</strong>

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
	<li>Install all files on your server;</li>
	<li>Copy one of the following Google Spreadsheet templates depending on your need:
		<ul>
			<li><a href="https://docs.google.com/spreadsheet/ccc?key=0AnZDmytGK63SdEV6WmJ4T1lBQTNycnM2MVEwMGoyMnc#gid=0">A two-column comparison</a></li>
			<li><a href="https://docs.google.com/spreadsheet/ccc?key=0AnZDmytGK63SdGduSjNfbzlUOF9TTnRxeW9vNDF3SEE&usp=drive_web#gid=0">A three-column comparison</a></li>
		</ul></li>
	<li>Publish the copied sheet, grab the URL for the published sheet and replace the URL located in the javascript file for the column template you are using that is stored in the variable "public_spreadsheet_url";</li>
	<li>Make a copy of the HTML file for the column template you are using and name it something unique to your project;</li>
	<li>Upload the new HTML file in the same directory on your server as the other template HTML files;</li>
	<li>Customize your project's spreadsheet appropriately with any info you want to include, like the title, source, description and contents of each tab that is in use;</li>
	<li>Create an <a href="http://www.w3schools.com/tags/tag_iframe.asp">iFrame</a> of your project's HTML file and place it on the web page where you want the project to be shown;</li>
	<li>That's it!</li>
</ul>

<h4>Spreadsheet Labels Under "Meta" Column</h4>
<ul>
	<li><strong>active</strong>: toggles which tabs to use for the project. USE "No" in the cell if you want to disable the tab. You must have at least tab1 active. If you intend to have different tables of information that a user can scroll through, you'll want more than one tab. Example: you want to compare laws proposed by the House of Representatives and the Senate. One tab would be for the House laws, another tab for Senate laws.</li>
	<li><strong>leftHead</strong>: Headline for the Left Column.</li>
	<li><strong>centerHead</strong>: Headline for the Center Column in a three-column template.</li>
	<li><strong>rightHead</strong>: Headline for the Right Column.</li>
	<li><strong>tabName</strong>: Name of tab as displayed on the app's navigation bar.</li>
	<li><strong>title</strong>: Title of the app.</li>
	<li><strong>desc</strong>: Description about the content in the app. This could be a summary, for example.</li>
	<li><strong>source</strong>: Always source your information! Can insert HTML for links (eg. <a href="URL">TEXT</a>)</li>
	<li><strong>author</strong>: Author of the content in the app.</li>
	<li><strong>leftWidth</strong>: Width of left column. Total width of all columns no more than 580px by default.</li>
	<li><strong>centerWidth</strong>: Width of center column in three column template. Total width of all columns no more than 580px by default.</li>
	<li><strong>rightWidth</strong>: Width of right column. Total width of all columns no more than 580px by default.</li>
</ul>

<h4>Notes</h4>

<ul>
	<li>Do NOT use Google's new spreadsheets at this time. As of March 25, 2013, there is no API support for the new GSheets, meaning it WILL break Tabletop.js.</li>
	<li>There is a known bug with Tabletop.js where if a user is timed out of their Google account, it will break Tabletop. One way to avert this is by installing and using <a href="https://github.com/jsoma/flatware">Flatware</a>.</li>
</ul>
