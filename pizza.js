
	function inputValidation()
	{
		var valid = new Boolean(true);
		var valChoice = document.getElementsByName("piz");
		var check = -1;
		
		for(i = 0; i < valChoice.length; i++)
		{
			if(valChoice[i].checked){
				check = valChoice;
			}
		}
		
		if(check == -1 ){
			valid = false;
			alert("Choose the size of your pizza");
		}
		
		var valFav = document.getElementsByTagName("input");
		var checkFav = -1;
		
		for(i = 0; i < valFav.length; i++)
		{
			if(valFav[i].type == "checkbox" && valFav[i].checked){
				checkFav = valFav;
			}
		}
			
		if(checkFav == -1 ){
			valid = false;
			alert("You must at list one Pizza Topping");
		}
		
		if(document.pizzaForm.customername.value == "")
		{
			alert("You must enter your name");
			document.getElementById('cusname').style.background='red';
			valid = false;
		}
		else
		{
			document.getElementById('cusname').style.background='none';
			var custN = cusNameCheck();
			if(custN == false)
			{
				 return false;
			}
		}
		
		
		if(document.pizzaForm.creditcard.value == "")
		{
			alert("Please enter your Credit Card");
			document.getElementById('cuscard').style.background='red';
				valid = false;
		}
		else
		{
			document.getElementById('cusname').style.background='none';
			var custC = CreditCardV();
			if(custC == false)
			{
				return false;
			}
		}
		
		if(document.pizzaForm.ppsnum.value == "")
		{
			alert("Please enter your PPS Number");
			document.getElementById('cuspps').style.background='red';
				valid = false;
		}
		else
		{
			document.getElementById('cusname').style.background='none';	
			var cPPS = ppsNumber();
			if(cPPS == false)
			{
				return false;
			}
		}
			
		if(document.pizzaForm.phoneNum.value == "")
		{
				alert("Please enter your Phone Number");
				document.getElementById('cusPhone').style.background='red';
				valid = false;
		}
		else
		{
			document.getElementById('cusname').style.background='none';
			var custP = phoneCheck();
			if(custP == false)
			{
				return false;
			}
		}
		return valid;
	}

	
	function WriteCookie()
	{
		if( document.pizzaForm.customername.value == "" )
		{
			alert("Enter some value!");
			return;
		}

		cookievalue= escape(document.pizzaForm.customername.value) + ";";
		document.cookie="name=" + cookievalue;
		alert("Setting Cookies : " + "name=" + cookievalue );
	}
	
	function ReadCookie()
	{
		var allcookies = document.cookie;
		alert("All Cookies : " + allcookies );

		// Get all the cookies pairs in an array
		cookiearray  = allcookies.split(';');

		// Now take key value pair out of this array
		for(var i=0; i<cookiearray.length; i++){
		name = cookiearray[i].split('=')[0];
		value = cookiearray[i].split('=')[1];
		alert("Key is : " + name + " and Value is : " + value);
	}
}
	
				
		function firstPage()
		{
			var now = new Date();
			var endDate = new Date();
			endDate.setMonth(endDate.getMonth()+1);
					
			var pageCt = parseInt(cookieValue("pageCount"));
			pageCt++;
					
			var lastVisit = cookieValue("visitCount");
			if(lastVisit == 0)
			{
				lastVisit = "";
			}
					
			document.cookie = "pageCount=" + pageCt + ";path=/;endDate=" + endDate.toGMTString();
			document.cookie = "visitCount=" + now + ";path=/;endDate=" + endDate.toGMTString();
					
			var outText = "You have visited this page " + pageCt + " times.";
			if(lastVisit !="")
			{
				outText += "<br />Your last visit was: " + lastVisit;
			}
				
				document.getElementById("cookieData").innerHTML = outText;
		}
			
		function cookieValue(cookieName)
		{
			var thisCookie = document.cookie.split("; ");
					
			for(var i = 0; i<thisCookie.length; i++)
			{
				if(cookieName == thisCookie[i].split("=")[0])
				{
				return thisCookie[i].split("=")[1];
				}
			}
			return 0;
				
		}	
		
		
		var smallSize = "145px";
		var mediumSize = "150px";
		var largeSize = "155px";

	// display pizza function
	function pizzaSize()
	{
		if (document.getElementById('small').checked)
		{
			document.getElementById('pizza').style.visibility="visible";
			document.getElementById('pizza').style.width=smallSize;
			document.getElementById('pizza').style.height=smallSize;
		}
			
		else if (document.getElementById('medium').checked)
		{
			document.getElementById('pizza').style.visibility="visible";
			document.getElementById('pizza').style.width=mediumSize;
			document.getElementById('pizza').style.height=mediumSize;
		}
		else if(document.getElementById('large').checked)
		{
			document.getElementById('pizza').style.visibility="visible";
			document.getElementById('pizza').style.width=largeSize;
			document.getElementById('pizza').style.height=largeSize;
		}
			return true;
	}	
	
	function cheeseVisible()
	{
		if((document.getElementById('cheeseId').checked) && (document.getElementById('small').checked)) 
		{
			document.getElementById('chee').style.visibility="visible";
			document.getElementById('chee').style.width=smallSize;
			document.getElementById('chee').style.height=smallSize;
		}
	
		else if((document.getElementById('cheeseId').checked) && (document.getElementById('medium').checked))
		{
			document.getElementById('chee').style.visibility="visible";
			document.getElementById('chee').style.width=mediumSize;
			document.getElementById('chee').style.height=mediumSize;	
		}
		else if((document.getElementById('cheeseId').checked) && (document.getElementById('large').checked))
		{
				document.getElementById('chee').style.visibility="visible";
				document.getElementById('chee').style.width=largeSize;
				document.getElementById('chee').style.height=largeSize;
		}
		else
		{
			document.getElementById('chee').style.visibility="hidden";
		}
		return true;
	}
		
	function tomatVisible()
	{
		if((document.getElementById('tomatoId').checked) && (document.getElementById('small').checked)) 
		{
			document.getElementById('toma').style.visibility="visible";
			document.getElementById('toma').style.width=smallSize;
			document.getElementById('toma').style.height=smallSize;
		}
	
		else if((document.getElementById('tomatoId').checked) && (document.getElementById('medium').checked))
		{
			document.getElementById('toma').style.visibility="visible";
			document.getElementById('toma').style.width=mediumSize;
			document.getElementById('toma').style.height=mediumSize;	
		}
		else if((document.getElementById('tomatoId').checked) && (document.getElementById('large').checked))
		{
				document.getElementById('toma').style.visibility="visible";
				document.getElementById('toma').style.width=largeSize;
				document.getElementById('toma').style.height=largeSize;
		}
		else
		{
			document.getElementById('chee').style.visibility="hidden";
		}
		return true;
	}
	
	function mushroomVisible()
	{
		if ((document.getElementById('mushroomId').checked)&& (document.getElementById('small').checked)) 
		{
			document.getElementById('whit').style.visibility="visible";
			document.getElementById('whit').style.width=smallSize;
			document.getElementById('whit').style.height=smallSize;
		}
		else if((document.getElementById('mushroomId').checked) && (document.getElementById('medium').checked))
		{
			document.getElementById('whit').style.visibility="visible";
			document.getElementById('whit').style.width=mediumSize;
			document.getElementById('whit').style.height=mediumSize;	
		}
		else if((document.getElementById('mushroomId').checked) && (document.getElementById('large').checked))
		{
				document.getElementById('whit').style.visibility="visible";
				document.getElementById('whit').style.width=largeSize;
				document.getElementById('whit').style.height=largeSize;
		}
		else
		{
			document.getElementById('whit').style.visibility="hidden";
		}
		return true;
	}
	
	function hotpepperVisible()
	{
		if ((document.getElementById('hotpepperId').checked)&& (document.getElementById('small').checked)) 
		{
			document.getElementById('gpee').style.visibility="visible";
			document.getElementById('gpee').style.width=smallSize;
			document.getElementById('gpee').style.height=smallSize;
		}
		else if((document.getElementById('hotpepperId').checked) && (document.getElementById('medium').checked))
		{
			document.getElementById('gpee').style.visibility="visible";
			document.getElementById('gpee').style.width=mediumSize;
			document.getElementById('gpee').style.height=mediumSize;	
		}
		else if((document.getElementById('hotpepperId').checked) && (document.getElementById('large').checked))
		{
				document.getElementById('gpee').style.visibility="visible";
				document.getElementById('gpee').style.width=largeSize;
				document.getElementById('gpee').style.height=largeSize;
		}
		else
		{
			document.getElementById('gpee').style.visibility="hidden";
		}
		return true;
	}
	
	function pepperoniVisible()
	{
		if ((document.getElementById('pepperoniId').checked)&& (document.getElementById('small').checked))//if the pepperoni checkbox is cliked ade it is small piza
		{
			document.getElementById('sauc').style.visibility="visible"; //make the topping appear
			document.getElementById('sauc').style.width=smallSize;//change the with to match the small pizza
			document.getElementById('sauc').style.height=smallSize;//change the height 
		}
		else if((document.getElementById('pepperoniId').checked) && (document.getElementById('medium').checked))
		{
			document.getElementById('sauc').style.visibility="visible";
			document.getElementById('sauc').style.width=mediumSize;
			document.getElementById('sauc').style.height=mediumSize;	
		}
		else if((document.getElementById('pepperoniId').checked) && (document.getElementById('large').checked))
		{
				document.getElementById('sauc').style.visibility="visible";
				document.getElementById('sauc').style.width=largeSize;
				document.getElementById('sauc').style.height=largeSize;
		}
		else
		{
			document.getElementById('sauc').style.visibility="hidden";
		}
		return true;
	}
	
	function oliveVisible()
	{
		if ((document.getElementById('oliveId').checked)&& (document.getElementById('small').checked)) 
		{
			document.getElementById('bpee').style.visibility="visible";
			document.getElementById('bpee').style.width=smallSize;
			document.getElementById('bpee').style.height=smallSize;
		}
		else if((document.getElementById('oliveId').checked) && (document.getElementById('medium').checked))
		{
			document.getElementById('bpee').style.visibility="visible";
			document.getElementById('bpee').style.width=mediumSize;
			document.getElementById('bpee').style.height=mediumSize;	
		}
		else if((document.getElementById('oliveId').checked) && (document.getElementById('large').checked))
		{
				document.getElementById('bpee').style.visibility="visible";
				document.getElementById('bpee').style.width=largeSize;
				document.getElementById('bpee').style.height=largeSize;
		}
		else
		{
			document.getElementById('bpee').style.visibility="hidden";
		}
			return true;
	} 
		
//Get the price for the pizza size function
	function sizeChoice()
	{		
		var pizzaSize = 0;

		var pchoice = document.getElementsByName("piz");
		for(i = 0; i < pchoice.length; i++)
		{
			if(pchoice[i].checked )
			{
				pizzaSize = Number(pchoice[i].value);
			}
		}
		return pizzaSize;
	}
	
//Get the price of the topping function
	function pizzaTopping()
	{		
		var pizzaPrice = 0;
		var medExtra	= .15;
		var largeExtra = .24;
		
		var pchoice = document.getElementsByTagName("input"); //Get all the element of the form for input
			
		for(var i = 0; i < pchoice.length; i++)  //loop through the elements
		{
			if(pchoice[i].type == "checkbox" && pchoice[i].checked) //check if the are checkbox and if the are checked
			{
				 pizzaPrice += Number(pchoice[i].value);//get the value of the checked checkbox
				 if((pchoice[i].type == "checkbox" && pchoice[i].checked) &&(document.getElementById('medium').checked))//if the pizza is medium size
				 {
					 pizzaPrice = Number(pizzaPrice) +  Number(medExtra);// add extra money for the medium and change the value string to number
				 }
				 else if((pchoice[i].type == "checkbox" && pchoice[i].checked) && (document.getElementById('large').checked))//if the pizza is large add more money
				 {
					pizzaPrice = Number(pizzaPrice) +  Number(largeExtra);// add the extra price  to the price and make sure is number not string
				 }
			}  
		}
			return pizzaPrice;
	}
	
//Get the toatla price function
	function getPrice()
	{
		var price = sizeChoice() + pizzaTopping();
		
		var checkDis = document.forms['pizzaForm']['emailn'].value;
		var d =checkDis.indexOf('@');
		var getD = checkDis.slice((d+1),checkDis.length);
		if(getD == "mycit.ie")
		{
			priceDiscount = (price) * (0.10);
			alert("CIT student YOUR 10% Applied");
		}
		else
		{
			priceDiscount = price;
		
		}
		
		var paid = document.getElementById('sumPrice');
		paid.style.display='block';
		paid.innerHTML = "Total Price &euro;" + priceDiscount.toFixed(2);
	}
	
	
//name function
	function cusNameCheck()
	{
		var custName;
		var nameGood = new Boolean(true);

		custName=document.forms['pizzaForm']['customername'].value;


		if(!isNaN(custName) || custName.length < 7)
		{
			nameGood = false;
		}

		if(custName.indexOf(' ') == 0 || custName.lastIndexOf(' ') == custName.length-1)
		{
			nameGood = false;
		}

		if(!(custName.indexOf(' ') == custName.lastIndexOf(' ')))
		{
			nameGood = false;
		}

		if(nameGood)
		{
			document.getElementById('cusname').style.background='none';
			return nameGood;

		}
		else
		{
			alert("Customer Name Is not a valid"); 
			document.getElementById('cusname').style.background='red';
			return false;
		}                                                  

		return nameGood;
	}
//Credit card function
	function CreditCardV()
	{
	 
	 
	  var cardGood = new Boolean(true);
	  var total = 0;
	  var oddNum = 0;
	  var even = 0;
	  var oddAdd = 0;
	  
	  cardNum=document.forms['pizzaForm']['creditcard'].value;
	  
	 if(!(cardNum.length == 16))
	  {
		cardGood = false;
	  }
	  
	 for(n=0; n<16; n++)
	 {
		var c = parseInt(cardNum.slice(n,n+1));
		
		if((c < 0) || (c > 9))
		{
			cardGood = false;
		}
	 }
	  
	  
		for(var i=cardNum.length-1; i >= 0; i--)
		{
			if(i % 2 == 0)
			{
				oddNum = cardNum[i]*2;
				if(oddNum > 9)
				{
					oddNum -= 9;
				}
			  oddAdd = oddAdd + oddNum;
			}
			if(i % 2 == 1)
			{
				even =  even + parseInt(cardNum[i]);
			}
			total = oddAdd + even;
		}
		
		if((total != 0) && (total % 10 == 0))
		{
			document.getElementById('cuscard').style.background='none';
			return  cardGood;
		}
		else
		{
			alert("Bad number");
			document.getElementById('cuscard').style.background='red';
			return false;
		}

		return cardGood;
	}
//new PPS fuction
	function ppsNumber()
	{
		var validCard = new Boolean(true);
		var multipler = 8;
		var extraLetterMuL = 9;
			
			
		ppsNo = document.forms['pizzaForm']['ppsnum'].value;
		
		if (!((ppsNo.length == 8 || ppsNo.length == 9)))
		{
			validCard = false;
		}
	
		var num = ppsNo.substring(0,7);
		var letter1 = ppsNo.substring(7,8);
		var letter2 = ppsNo.substring(8,9);
			
		if(Number(isNaN(num)))
		{
			validCard = false;
		}
		
		if(!isNaN(letter1))
		{
			validCard = false;
		}
		
		var sum = 0;
		for (var i = 0; i < num.length; i++)
		{
			sum += num[i] * multipler--;
		}
			
		ppsNo = ppsNo.toUpperCase();
		letter1 = ppsNo.charCodeAt(7);
		letter1 = letter1 - 64;
			
		if(letter1 == 23)
		{
			letter1 = 0;
		}
		
		if(ppsNo.length == 9)
		{
			if(!isNaN(letter2))
			{
				validCard = false;
				alert("bad letter2");
			}
			letter2 = ppsNo.charCodeAt(8);
			letter2 = letter2 - 64;
				
				if(letter2 == 23)
				{
					letter2 = 0;
				}
		}
			
			
		sum += letter2 * extraLetterMuL;
			
		if(sum % 23 == letter1)
		{
			document.getElementById('cuspps').style.background='none';
			return validCard;
		}
		else
		{
			alert("Bad PPS Num");
			document.getElementById('cuspps').style.background='red';
			return false;
		}
			
		return validCard;
	}

	function phoneCheck()
	{ 
				
		var phoneGood = new Boolean (true);
			
		var phoneNumber=document.forms['pizzaForm']['phoneNum'].value;
				
		if(!((phoneNumber.length == 10) || (phoneNumber.length == 12)))
		{
			phoneGood = false;
		}
				
		if((phoneNumber.length == 12)&&(phoneNumber.charAt(0)!="(")&&(phoneNumber.charAt(4)!=")")&&(phoneNumber.charAt(3)!="-")&&(phoneNumber.charAt(7)!="-"))
		{
			phoneGood = false;
		}
				
		if((phoneNumber.length == 12)&&(phoneNumber.charAt(0)=="(")&&(phoneNumber.charAt(4)==")"))
		{
			phoneNumber = phoneNumber.substring(1,4) + phoneNumber.substring(5,12);
		}
				
		if((phoneNumber.length == 12) && (phoneNumber.charAt(3)=="-") && (phoneNumber.charAt(7)=="-"))
		{
			phoneNumber = phoneNumber.substring(0,3) + phoneNumber.substring(4,7) + phoneNumber.substring(8,12);
		}
				
		var check = phoneNumber.substring(0,3);
		if(!((check == "021") || (check == "083") || (check == "085") || (check == "086") || (check == "087") || (check == "089")))
		{
			phoneGood = false;
		}
			
		for(x=3; x < 10; x++)
		{
			check = phoneNumber.slice(x, x+1);
			if((check < "0") || (check > "9"))
			phoneGood = false;
		}
		
		if(phoneGood)
		{
			document.getElementById('cusPhone').style.background='none';
			return phoneGood;
		}
		else
		{
			alert("Is not a valid phone Number");
			document.getElementById('cusPhone').style.background='red';
			return false;
		}
			return phoneGood;
	}

