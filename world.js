document.addEventListener("DOMContentLoaded", function(event) {
    
    var $search = document.getElementById('lookup');
    var $result = document.getElementById('result');
    $search.addEventListener("click", function() {
        var country = document.getElementById('country').value;
        			
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'world.php?country=' + country);
        xhr.onload = function() {
            if (xhr.status === 200) {
                $result.innerHTML =xhr.responseText;
            }
            else {
                alert(xhr.status);
            }
        };
    	xhr.send();
    			
    });
});