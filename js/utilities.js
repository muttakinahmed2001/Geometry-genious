function getFieldValue(inputId){
    const FormulaField= document.getElementById(inputId);
    const FormulaValueString = FormulaField.value;
    const FormulaValue = parseFloat(FormulaValueString);
    return  FormulaValue ;
   
 }