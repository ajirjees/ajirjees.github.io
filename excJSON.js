function myFunction () {
	var httpRequest;
	makeRequest('my_college_degrees.json');
	$("table").removeClass("hidden");
	function makeRequest(url) {
		httpRequest = new XMLHttpRequest();
		if (!httpRequest) {
			alert('Exiting: Cannot create an XMLHTTP instance');
			return false;
		}
		httpRequest.onreadystatechange = alertContents;
		httpRequest.open('GET',url);
		httpRequest.send();
	}
	function alertContents() {
		if (httpRequest.readyState === XMLHttpRequest.DONE) {
			if (httpRequest.status === 200 && this.readyState == 4) {
				var obj = $.parseJSON(this.responseText);
				console.log(typeof obj);
				$(function() {

					$.each(obj, function(i, item) {
						var $tr = $('<tr>').append(
							$('<td>').text(item.school),
							$('<td>').text(item.program),
							$('<td>').text(item.type),
							$('<td>').text(item.year_conferred)
							).appendTo('#records_table');

						});
				});
			} else {
				alert('There was a problem with the request.')
			}
		}
	}
}