window.onload = () => {
  console.log(navigator.userAgent);
  if(window.fetch){
    fetch('./demo.json').then( (res) => {

      if (res.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + res.status);  
        return;
      }

      return res.json();
    }).then((data) => {
      var text = data.test;
      let title = document.getElementById('title');
      title.innerHTML = text;
      console.log('done!');
    });
  }else{
    console.log('fetch api is not found');
  }
}
