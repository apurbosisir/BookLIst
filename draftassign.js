

  
   
      //-------first book list start script-------
      let iactive = document.querySelector('.iactive')
   
      let active = document.querySelector('.active')
       let viewcart = document.querySelector('.viewcart')
       let Add1 = document.querySelector('.Add1 ')
       let Add2 = document.querySelector('.Add2 ')
       let Add3 = document.querySelector('.Add3 ')
       let Add4 = document.querySelector('.Add4 ')
       let pre = document.querySelector('.pre')
       let badge = document.querySelector('.badge')
       let number1 = document.querySelector('.number1')
       let minus1 = document.querySelector('.minus1')
       let plus1 = document.querySelector('.plus1')
       
       let minus2 = document.querySelector('.minus2')
       let number2 = document.querySelector('.number2')
       let plus2 = document.querySelector('.plus2')
 
     
 
       
 
       
   ///---Function Declear;    
       let i = 0
      
 function AddBook1() {
   let forms1 = document.querySelector('.books1')
   let formss1 = document.querySelector(' .bookss1')
   let Price1 = document.querySelector(' .Price1')
   let bookssss1 = document.querySelector(' .bookssss1')
   let calculate1 = document.querySelector('.calculate1')
   
 if(badge.value=1){
 
   i++
   badge.innerHTML = i
    number1.innerHTML = i
 
  let aarr = [`<img style='width:120px' class="imgs  " src="./image/b1.jpg" alt=""><br> ${forms1.value}<br>${formss1.value} <br>${Price1.value}<br> `];
   aarr.push(`${bookssss1.value}<br>`);
   let resutls1 = document.querySelector('.resutls1')
     let resutls1a = document.createElement('div')
     resutls1a.className = 'col resutls1a1'
     resutls1.appendChild(resutls1a)
     let resutls1a1 = document.querySelector('.resutls1a1')
       resutls1a1.innerHTML = aarr
     //  alert('Added Successful, if you add more go to View Cart')
      calculate1.classList.add('calculation1')
 
 //----Localstorage------;
 if(badge.innerHTML = i){
       let forms1 = document.querySelector('.books1').value
   let formss1 = document.querySelector(' .bookss1').value
   let Price1 = document.querySelector(' .Price1').value
   let bookssss1 = document.querySelector(' .bookssss1').value;
   // 
   
          let BookList;
          if(localStorage.getItem('BookList')==null){
              BookList = []
              console.log('succ');
             }
             else{
                 BookList = JSON.parse(localStorage.getItem("BookList"))
                 console.log('error');
             }
             BookList.push({
               Bname:forms1,
                 AName:formss1,
                 Price2:Price1,
                 Quantity:bookssss1,
             })
            
     localStorage.setItem('BookList', JSON.stringify(BookList));
    
     
    
      }
 
 
 
 
   }
 
 
 }
 //---2nd Book Add---;
 function AddBook2() {
   let forms2 = document.querySelector('.books2')
   let formss2 = document.querySelector(' .bookss2')
   let Price2 = document.querySelector(' .Price2')
   let bookssss2 = document.querySelector(' .bookssss2')
   let calculate2 = document.querySelector('.calculate2')
   let iactive = document.querySelector('.iactive')
   let active = document.querySelector('.active')
 if(badge.value=1){
 
   i++
   badge.innerHTML = i
    number2.innerHTML = i
 
  let aarr = [`<img style='width:120px' class="imgs  " src="./image/b2.jpg" alt=""><br> ${forms2.value}<br>${formss2.value} <br>${Price2.value}<br> `];
   aarr.push(`${bookssss2.value}<br>`);
 
 
        
   let resutls2 = document.querySelector('.resutls2')
     let resutls2a = document.createElement('div')
     resutls2a.className = 'col resutls2a2'
     resutls2.appendChild(resutls2a)
     let resutls2a2 = document.querySelector('.resutls2a2')
       resutls2a2.innerHTML = aarr
     //  alert('Added Successful, if you add more go to View Cart')
      calculate2.classList.add('calculation2')
     
      if(badge.innerHTML = i){
       let forms2 = document.querySelector('.books2').value
   let formss2 = document.querySelector(' .bookss2').value
   let Price2 = document.querySelector(' .Price2').value
   let bookssss2 = document.querySelector(' .bookssss2').value;
   // 
   //----Localstorage------;
          let BookList;
          if(localStorage.getItem('BookList')==null){
              BookList = []
              console.log('succ');
             }
             else{
                 BookList = JSON.parse(localStorage.getItem("BookList"))
                 console.log('error');
             }
             BookList.push({
               Bname:forms2,
                 AName:formss2,
                 Price2:Price2,
                 Quantity:bookssss2,
             })
            
     localStorage.setItem('BookList', JSON.stringify(BookList));
    
     
    
      }
     
   }
 }
 
 
  
 //---3rd Book Add---;
 
 
 
 function AddBook3() {
   let forms3 = document.querySelector('.books3')
   let formss3 = document.querySelector(' .bookss3')
   let Price3= document.querySelector(' .Price3')
   let bookssss3 = document.querySelector(' .bookssss3')
   let calculate3 = document.querySelector(' .calculate3')
 if(badge.value=1){
 
   i++
   badge.innerHTML = i
    
 
  let aarr3 = [`<img style='width:120px' class="imgs  " src="./image/b3.jpg" alt=""><br> ${forms3.value}<br>${formss3.value} <br>${Price3.value}<br> `];
   aarr3.push(`${bookssss3.value}<br>`);
 
   
 
   let minus3 = document.querySelector('.minus3')
       let number3 = document.querySelector('.number3')
       let plus3 = document.querySelector('.plus3')
 
 number3.innerHTML = i
 
     //  alert('Added Successful, if you add more go to View Cart')
     //  calculate4.classList.add('calculation4')
 
 
 //----Localstorage------;
 
 if(badge.innerHTML = i){
       let forms3 = document.querySelector('.books3').value
   let formss3 = document.querySelector(' .bookss3').value
   let Price3 = document.querySelector(' .Price3').value
   
   let bookssss3 = document.querySelector(' .bookssss3').value;
 
          let BookList;
          if(localStorage.getItem('BookList')==null){
              BookList = []
              console.log('succ');
             }
             else{
                 BookList = JSON.parse(localStorage.getItem("BookList"))
                 console.log('error');
             }
             BookList.push({
               Bname:forms3,
                 AName:formss3,
                 Price:Price3,
                 Quantity:bookssss3,
             })
            
     localStorage.setItem('BookList', JSON.stringify(BookList));
     console.log('kkk');
     
   }
 }
 
 
 }
   
 function AddBook4() {
   let forms4 = document.querySelector('.books4')
   let formss4 = document.querySelector(' .bookss4')
   let Price4= document.querySelector(' .Price4')
   let bookssss4 = document.querySelector(' .bookssss4')
   let calculate4 = document.querySelector(' .calculate4')
 if(badge.value=1){
 
   i++
   badge.innerHTML = i
    
 
  let aarr = [`<img style='width:120px' class="imgs  " src="./image/b4.jpg" alt=""><br> ${forms4.value}<br>${formss4.value} <br>${Price4.value}<br> `];
   aarr.push(`${bookssss4.value}<br>`);
 
   let iactives4 = document.querySelector('.iactives4')
 
   let resutls4 = document.createElement('div')
   resutls4.className = 'col results4' 
   iactives4.appendChild(resutls4)
   
 
   let results4 = document.querySelector('.results4')
     let resutls4a = document.createElement('div')
     resutls4a.className = 'col resutls4a4'
     resutls4.appendChild(resutls4a)
 
     // let resutls4a4 = document.querySelector('.resutls4a4').innerHTML = aarr;
 
  
 
   let calculate4append = document.querySelector('.calculate4')
 
   let calculate4a = document.createElement('span')
   calculate4a.className='btn btn-success minus4'
   calculate4a.innerHTML="-"
   resutls4.appendChild(calculate4a)
 
   let calculate4b = document.createElement('span')
   calculate4b.className='btn btn-success number4'
   calculate4b.type='button'
   // calculate4b.value="0"
   calculate4b.innerHTML="0"
   resutls4.appendChild(calculate4b)
 
   let calculate4c = document.createElement('span')
   calculate4c.className='btn btn-success plus4'
   calculate4c.innerHTML="+"
   resutls4.appendChild(calculate4c)
 
   let calculate4d = document.createElement('button')
   calculate4d.className="btn btnrmv4 ms-5 btn-outline-success"
   calculate4d.innerHTML="Remove"
   resutls4.appendChild(calculate4d)
 
 
   let minus4 = document.querySelector('.minus4')
       let number4 = document.querySelector('.number4')
       let plus4 = document.querySelector('.plus4')
 
 number4.innerHTML = i
 function plus4st(){
   if(number4.innerHTML==='0'){
       alert('Pleas Add One Book')
   }else{
    
       i++
    number4.innerHTML=i
    badge.innerHTML = i
    
   }
   }
   
 function minus4st(){
   if(number4.innerHTML==='0'){
     alert('Pleas Add One Book')
   }else{
      i--
    number4.innerHTML=i
    badge.innerHTML = i
   }
    
 } 
 
 plus4.addEventListener('click', ()=>{
     plus4st()
     })
 minus4.addEventListener('click', ()=>{
 
   minus4st()
   })
 
   let remove4 = document.querySelector('.btnrmv4' )
  function deletformCart4() {
   let rem4 = document.querySelector('.results4')
       rem4.remove();        
     }
 
 
     remove4.addEventListener('click', ()=>{
       deletformCart4();
       console.log(number4.innerHTML);
    
       console.log(number4.innerHTML);
     })
 
     //  alert('Added Successful, if you add more go to View Cart')
     //  calculate4.classList.add('calculation4')
 
 
 //----Localstorage------;
 
 if(badge.innerHTML = i){
       let forms4 = document.querySelector('.books4').value
   let formss4 = document.querySelector(' .bookss4').value
   let Price4 = document.querySelector(' .Price4').value
   let bookssss4 = document.querySelector(' .bookssss4').value;
   // 
   
          let BookList;
          if(localStorage.getItem('BookList')==null){
              BookList = []
              console.log('succ');
             }
             else{
                 BookList = JSON.parse(localStorage.getItem("BookList"))
                 console.log('error');
             }
             BookList.push({
               Bname:forms4,
                 AName:formss4,
                 Price:Price4,
                 Quantity:bookssss4,
             })
            
     localStorage.setItem('BookList', JSON.stringify(BookList));
     
     
   }
 }
 
 
 }
   
 
 function showData4(){
   let forms4 = document.querySelector('.books4').value
   let formss4 = document.querySelector(' .bookss4').value
   let Price4 = document.querySelector(' .Price4').value
   let bookssss4 = document.querySelector(' .bookssss4').value;
 
     let BookList;
     if(localStorage.getItem('BookList')==null){
         BookList = []
     }
     else{
         BookList = JSON.parse(localStorage.getItem("BookList"))
     }
     let aarr4 = '';
     BookList.forEach(function(e, index){
       
   aarr4 = `<img style='width:120px' class="imgs" src="./image/b4.jpg" alt=""><br>`
  aarr4+='<p>'+forms4+'</p>'+'<br>'
  aarr4+='<p>'+formss4+'</p>'+'<br>'
  aarr4+='<p>'+forms4+'</p>'+'<br>'
 //  aarr+=formss4+'<br>'
 //  aarr+=Price4+'<br>'
 //  aarr+=formssss4+'<br>'
  
         // console.log(dom);
         
       });
       
     document.querySelector('.iactives4').innerHTML = aarr4 
   }
   document.onload = showData4()
 
   // document.addEventListener('DOMContentLoaded',showData());
 
 
 
 
 
 
 
   
 function showData3(){
   let forms3 = document.querySelector('.books3').value
   let formss3 = document.querySelector(' .bookss3').value
   let Price3 = document.querySelector(' .Price3').value
   let bookssss3 = document.querySelector(' .bookssss3').value;
 
     let BookList;
     if(localStorage.getItem('BookList')==null){
         BookList = []
     }
     else{
         BookList = JSON.parse(localStorage.getItem("BookList"))
     }
  
     let aarr3 = '';
 
     BookList.forEach(function(e, index){
      
   aarr3 = `<img style='width:120px' class="imgs" src="./image/b3.jpg" alt="">`
  aarr3+='<p>'+forms3+'</p>'
  aarr3+='<p>'+formss3+'</p>'
  aarr3+='<p>'+Price3+'</p>'
  aarr3+='<p>'+bookssss3+'</p>'
  aarr3 += ` <div class="col resutls3a3">
  <span class="btn btn-success minus3">-</span>
  <span class="btn btn-success number3">0</span>
  <span class="btn btn-success plus3">+</span>
  <button class='btn btn-outline-danger ms-4 remove3'>Remove</button>
 </div>`
 
 
 });
 document.querySelector('.iactives3').innerHTML = aarr3 
 
 let i = 0
 let number3 = document.querySelector('.number3');
 let plus3 = document.querySelector('.plus3');
 let minus3 = document.querySelector('.minus3');
 let badge = document.querySelector('.badge');
 
 
 plus3.addEventListener('click', ()=>{
   i++
 number3.innerHTML = i
 badge.innerHTML = i
 
 })
 minus3.addEventListener('click', ()=>{
   if(number3.innerHTML != '0'){
 
     i--
   number3.innerHTML = i
   badge.innerHTML = i
 
   }else{
     alert('Please Add One Book')
   }
 })
 
 
 let remove3 = document.querySelector('.remove3')
 
 remove3.addEventListener('click', ()=>{
  
 
 document.querySelector('.iactives3').remove()
 })
 
    
 
 
 
     
   }
   document.onload = showData3()
 
   
   // document.addEventListener('DOMContentLoaded',showData());
 
 
   
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 ////---Cart  Declear--;
  viewcart.addEventListener('click',()=>{
     if  (badge.value =i){
    iactive.classList.add('inactive')
    active.classList.add('abc')
    }else{
    alert('Pleas Add A new Book')
   
   }
 })
 pre.addEventListener('click', ()=>{
         iactive.classList.remove('inactive')
         active.classList.remove('abc')
         resutls4.innerHTML = aarr
       })    
 
 
 
 
 
 
 
 
 
 
 Add1.addEventListener('click', ()=>{
   AddBook1()
   
  })
 Add2.addEventListener('click', ()=>{
   AddBook2()
   // addData2()
   // getBooks()
   
  })
 Add3.addEventListener('click', ()=>{
   AddBook3()
   showData3()
   
   // deleteData()
  })
 Add4.addEventListener('click', ()=>{
   AddBook4()
   
   showData4()
  })
 
 
 
 
 
   ///------2No----;
 
  
  
 
   
 
 
    
    
 
 
   