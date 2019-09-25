let pTags = document.getElementsByTagName('p');
let inputTags = document.getElementsByTagName('input');
//let xmlhttp = new XMLHttpRequest();
let file = "json.txt";
let url = "http://localhost:8000/getallrecords";
//
$(function() {
    $("#getData").click(function(){
      $.ajax({
			url:url,
			type:"GET",
			dataType:"json",
			success:function(result){
				displayData(result);
			},
			error:function(err){
				console.log(err);
			}
		});
  });
});
//
$(function(){
	$("form[name='frmCollectWeights']").validate({
		rules:{
      empName:{
        required:true,
        minlength:3
      },
      empWeight:{
        required:true,
        digits:true
      }
    },
		messages:{
      empName:{
        required:"Name is required",
        minlength:"Name is too short"
      },
      empWeight:{
        required:"weight is required",
        digits:"Weight must be a number"
      }
    },
		submitHandler:{
      function(form){
				form.submit();
			}
    }
	});
});
//
$(function(){
  $("p").mouseover(function(){
    $(this).addClass("liYellow");
  });
  $("p").mouseout(function(){
    $(this).removeClass("liYellow");
  });
});
//
function displayData(arr) {
	let outHTML = "";
	for(let i=0; i < arr.length; i++){
		outHTML+="<div>"+arr[i].empName + " weighed " + arr[i].empWeight + " Kgs</div>";
	}
	document.getElementById("records").innerHTML = outHTML;
}
//
