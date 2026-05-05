 let RandomNumber = Math.random()* 3;
           let scoreStr = localStorage.getItem('scorelist');
        let scorelist;
         resetScore(scoreStr);
        function resetScore(scoreStr){
         scorelist = scoreStr ? JSON.parse(scoreStr) : {
            win :'0',
            tie :'0',
            lost :'0',

        }
        scorelist.displayscore = function(){
                return`wining score =${scorelist.win} 
            tie score =${scorelist.tie}
            lost score =${scorelist.lost}`
            }
     }
            
        
       
          
        function computerNum(){
             if( RandomNumber > 0 && RandomNumber <= 1){
             return 'Bat';
             console.log(RandomNumber);

        }else if(RandomNumber > 1 && RandomNumber <=2){
             return 'Ball';
             console.log(RandomNumber);
        } 
        else{
              return 'stump';
               console.log(RandomNumber);

        }

        }
        
        function  gatResult(userchoice ,computerchoice){

          if(userchoice === 'Bat'){

              
         if(computerchoice === 'Ball'){
                scorelist.win++;
                return  'User won.';
        }else if(computerchoice === 'Bat'){
            scorelist.tie++;
            return 'it`s a tie ';
        }
        else if(computerchoice === 'stump'){
            scorelist.lost++;
            return'computer has  won.';
        }

          }
          else if(userchoice === 'Ball'){

            if(computerchoice === 'Ball'){
                scorelist.tie++;
            return ' it`s a tie .';
        }else if(computerchoice === 'Bat'){
            scorelist.lost++;
            return'computer has  won.';
        }
        else if(computerchoice === 'stump'){
             scorelist.win++;
           return'  User won . ';
        }

          }
          else if(userchoice === 'stump'){
             if(computerchoice === 'Ball'){
                scorelist.lost++;
             return 'computer has  won.';
            
        }else if(computerchoice === 'Bat'){
             scorelist.win++;
             return '  User won . ';
        }
        else if(computerchoice === 'stump'){
            scorelist.tie++;
           return ' it`s a tie .';
        }
          }
        }
        function showResult(userchoice,computerchoice,result){
            localStorage.setItem('scorelist',JSON.stringify(scorelist))
            document.querySelector('#user-move').innerText = 
            userchoice !== undefined ?`you have chosen = ${userchoice}.`:'';

            document.querySelector('#computer-move').innerText = computerchoice !== undefined ?`computer choice is = ${computerchoice}`:'';

            document.querySelector('#result').
            innerText = result !== undefined ?` ${result} `:'';
             document.querySelector('#score').innerText = `  ${scorelist.displayscore()} `

        //     alert(`you have chosen ${userchoice}. 
            
        //     computer choice is ${computerchoice} and 
        //     ${result} 
        //    ${scorelist.displayscore()}`);

        }
        