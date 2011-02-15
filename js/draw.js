function draw(){
	var canvas = document.getElementById("canvas");
	console.log(canvas);
	context = canvas.getContext("2d");
	width=canvas.width ;
	height=canvas.height;

	x = width/2;
	y = height/2;
	//repeat(context, 100);
	//start(context, 500, width/2, height/2);
	d = new Date();
	start = d.getSeconds();
	handle = setInterval(animate, 50);
}

function animate()
{	
	console.log("??");
	context.beginPath();
	context.moveTo(x, y);
		//draw line to new x, y
		x+=rnd(0,10);
		y+=rnd(0,10);
		x = (x>width)? width: ( x<0? 0: x);
		y = y<0? 0: ((y> height)? height: y);
		
		
		context.lineTo(x, y);
		context.closePath();
		context.strokeStyle="#444";
		context.stroke();

if((new Date().getSeconds() - start)>=30){
	//alert(handle);
		clearInterval(handle);
	}


}

function repeat(c,n)
{
	if(n==0){return;}
	else{
		repeat(c,n-1);
/* kawaii 		c.fillRect(width/2+n+1, height/2+n*(-1*n), 2, 2); */
		c.fillRect(width/2+rnd(0, 100), height/2+rnd(0, 100), 3,3);
	}
}

function start(context, n, xBefore, yBefore)
{	
	
	if(n==0)return;
	else{
				context.beginPath();
		//move to xBefore, yBefore
		context.moveTo(xBefore, yBefore);
		//draw line to new x, y
		newX = xBefore+rnd(0,10);
		newY = yBefore+rnd(0,10);
		context.lineTo(newX, newY);
		context.closePath();
		context.strokeStyle="#444";
		context.stroke();	
	
		start(context, n-1, newX, newY);

	} 	

}



/*from http://www.protonfish.com/random.shtml*/
function rnd(mean, stdev)
{
	return Math.round(rnd_snd()*stdev+mean);
}

function rnd_snd() {
	return (Math.random()*2-1)+(Math.random()*2-1)+(Math.random()*2-1);
}

