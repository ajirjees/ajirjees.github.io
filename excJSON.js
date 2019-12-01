function myFunction () {
	var httpRequest;
	makeRequest('my_college_degrees.json');
	//create a new XMLHttpRequest object
	function makeRequest(url) {
		httpRequest = new XMLHttpRequest();
		if (!httpRequest) {
			alert('Exiting: Cannot create an XMLHTTP instance');
			return false;
		}
		//handle the server response
		httpRequest.onreadystatechange = serverResponse;
		httpRequest.open('GET',url);
		httpRequest.send();
	}
	function serverResponse() {
		if (httpRequest.readyState === XMLHttpRequest.DONE) {
			if (httpRequest.status === 200 && this.readyState == 4) {
				//remove class hidden when AJAX call success
				$('table').removeClass('hidden');
				//if successful, parses a JSON string
				var obj = $.parseJSON(this.responseText);
				//function insert HTML element at the end of the selected element. 
				$(function() {
					$.each(obj, function(i, item) {
						var $tr = $('<tr>').append(
							$('<td>').text(item.school),
							$('<td>').text(item.program),
							$('<td>').text(item.type),
							$('<td>').text(item.year_conferred)
							).appendTo('#degree_table');
						});
				});
			} else {
				alert('There was a problem with the request.')
			}
		}
	}
}