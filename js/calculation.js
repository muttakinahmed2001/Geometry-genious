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
 li.innerHTML=`1.Rectangle ${rectangleArea}`
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
 li.innerHTML=`2.Parallelogram ${parallelogramArea}`
 const ul = document.getElementById('result')
 ul.appendChild(li)
  
 }rhombus
})
document.getElementById('btn-rhombus').addEventListener('click',function(){
   const rhombusBaseValue = getTextValue('rhombus-d1');
  const rhombusHeightValue =getTextValue('rhombus-d2');
 const rhombusArea = 0.5*rhombusBaseValue*rhombusHeightValue;
 if(typeof rhombusBaseValue  !== 'number' ){
   alert('please type a number')
 }
 else if (rhombusBaseValue  <0 ||rhombusHeightValue<0   ) {
    alert('please type a natural number ')
 }
 else if(rhombusBaseValue===''||rhombusHeightValue===''){
   alert('please type a number')
 }
 else{
    
 const li = document.createElement('li');
 li.innerHTML=`2.Rhombus ${rhombusArea}`
 const ul = document.getElementById('result')
 ul.appendChild(li)
  
 }
})

document.getElementById('btn-pentagon').addEventListener('click',function(){
   const pentagonBaseValue = getTextValue('pentagon-base');
  const pentagonHeightValue =getTextValue('pentagon-height');
 const pentagonArea = 0.5*pentagonBaseValue*pentagonHeightValue;
 if(typeof pentagonBaseValue  !== 'number' ){
   alert('please type a number')
 }
 else if (pentagonBaseValue  <0 ||pentagonHeightValue<0   ) {
    alert('please type a natural number ')
 }
 else if(pentagonBaseValue===''||pentagonHeightValue===''){
   alert('please type a number')
 }
 else{
    
 const li = document.createElement('li');
li.innerHTML=`2.Pentagon ${pentagonArea}`
 const ul = document.getElementById('result')
 ul.appendChild(li)
  
 }
})





