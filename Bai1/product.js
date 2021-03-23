function changeProductList(type,element)
{
	// Nút phổ biến 
	let tabs = document.getElementsByClassName('tab-item');
	for (i=0; i < tabs.length;i++) {
		tabs[i].style.background='#b14c38';
	}

	element.style.background ='#ee4d2d'
document.getElementById(type).style.display = 'block';

	switch (type) {
		case 'trend':
			document.getElementById('new').style.display = 'none';
			document.getElementById('bestsell').style.display = 'none';
			break;
		case 'new':
			document.getElementById('trend').style.display = 'none';
			document.getElementById('bestsell').style.display = 'none';
			break;
		case 'bestsell':
			document.getElementById('new').style.display = 'none';
			document.getElementById('trend').style.display = 'none';
			break;
	}
}	
	

	
