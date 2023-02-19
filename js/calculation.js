 document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = "http://127.0.0.1:5500/blog.html";
 }) 

 


 document.getElementById('btn-triangle').addEventListener('click',function(){
  const triangleBaseValue = getFieldValue('triangle-base');
  const triangleHeightValue =getFieldValue('triangle-height');
 const triangleArea = 0.5*triangleBaseValue*triangleHeightValue;
 
 
 if(isNaN(triangleBaseValue) ){
   alert('please type a number')
 }
 else if (triangleBaseValue  <0 ||triangleHeightValue<0   ) {
    alert('please type a natural number ')
 }
 else if(triangleBaseValue===''||triangleHeightValue===''){
   alert('please type a number')
 }
 else{
   const li = document.createElement('li');
 li.innerHTML=`1.Triangle ${triangleArea}`
 const ul = document.getElementById('result')
 ul.appendChild(li)
 }
 })
 document.getElementById('btn-rectangle').addEventListener('click',function(){
   const rectangleBaseValue = getFieldValue('rectangle-base');
  const rectangleHeightValue =getFieldValue('rectangle-height');
 const rectangleArea = rectangleBaseValue*rectangleHeightValue;
 
 if(isNaN(rectangleBaseValue) ){
   alert('please type a number')
 }
 else if (rectangleBaseValue  <0 ||rectangleHeightValue<0   ) {
    alert('please type a natural number ')
 }
 else if(rectangleBaseValue===''||rectangleHeightValue===''){
   alert('please type a number')
 }
 else{
   const li = document.createElement('li');
 li.innerHTML=`1.rectangle ${rectangleArea}`
 const ul = document.getElementById('result')
 ul.appendChild(li)
 }
 })
 
 
 
document.getElementById('btn-parallelogram').addEventListener('click',function(){
   const parallelogramBaseValue = getTextValue('base-parallelogram');
  const parallelogramHeightValue =getTextValue('height-parallelogram');
 const parallelogramArea = parallelogramBaseValue*parallelogramHeightValue;
 if(typeof parallelogramBaseValue  !== 'number' ){
   alert('please type a number')
 }
 else if (parallelogramBaseValue  <0 ||parallelogramHeightValue<0   ) {
    alert('please type a natural number ')
 }
 else if(parallelogramBaseValue===''||parallelogramHeightValue===''){
   alert('please type a number')
 }
 else{
    
 const li = document.createElement('li');
 li.innerHTML=`2.parallelogram ${parallelogramArea}`
 const ul = document.getElementById('result')
 ul.appendChild(li)
  
 }
})

