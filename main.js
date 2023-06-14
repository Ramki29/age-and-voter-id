let age=parseInt(prompt("enter age"));
// let id=confirm("voter id available or not");

// if((age>=18) && (id==true))
// {
	// window.alert("eligible for vote");
// }
// else if((age>=18) && (id=false))
// {
	// window.alert("apply voter id");
// }
// else
// {
	// window.alert("not eligible for vote");
// }


if (age>=18)
{
	if(confirm("you have voter id click ok not have click cancel"))
	{
		window.alert("eligible for vote");
	}
	else
	{
		window.alert("apply voter id");
	}
}
else
	{
	window.alert("not eligible for vote");
	}