function randompics()
	{
		const pics=Math.floor(Math.random()*7);

		switch(pics)
		{
			case 0:
				document.getElementById("img").src="quote 1.png";
				break;
			case 1:
				document.getElementById("img").src="quote 2.jpg";
				break;
			case 2:
				document.getElementById("img").src="quote 3.png";
				break;
			case 3:
				document.getElementById("img").src="qu0te 4.png";
				break;
               case 4:
                    document.getElementById("img").src="quote 5.png";
                     break;
              case 5:
                    document.getElementById("img").src="quote 6.png";
                     break;
		default:

		}

}