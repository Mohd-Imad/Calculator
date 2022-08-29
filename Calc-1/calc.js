let outputScreen = document.getElementById("output-screen");

            function display(num){
                outputScreen.value += num;  
            }

            function calculate(){
                try{
                    outputScreen.value = eval( outputScreen.value);
                }
                catch(err){
                    outputScreen.value = "Invalid Input"
                }
            }

            function clearAll(){
                outputScreen.value = "";
            }

            
            function del(){
                outputScreen.value = outputScreen.value.slice(0,-1)
            }

