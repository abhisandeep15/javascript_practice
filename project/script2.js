document.addEventListener('DOMContentLoaded',function(){

    const searchButton=document.getElementById('search-btn');
    const usernameInput=document.getElementById('user-input');
    const statsContainer=document.querySelector('.stats-container');

    const easyProgressCircle=document.querySelector('.easy-progress');
    const mediumProgressCircle=document.querySelector('.medium-progress');

    const hardProgressCircle=document.querySelector('.hard-progress');
    const easyLabel=document.getElementById('easy-label');
    const mediumLabel=document.getElementById('medium-label');
    const hardLabel=document.getElementById('hard-label');
    const cardStatsContainer=document.querySelector('.stats-cards');

//return ture of false based on regex
    function validateUsername(username) {
      if(username.trim()===''){
        alert('UserName should not be empty :');
        return false;
      }
      const regex =/^[a-zA-Z0-9]+$/;
      const isMatching=regex.test(username);
      if (!isMatching){
        alert('Invalid USername:')
    }
    return isMatching;
    }


    async function fetchUserDetails(username) {
      function displaUserData(data){
        const userData = data;
      }
        try{
            searchButton.textContent="Searching...";
            searchButton.ariaDisabled=true;

            //const response=await fetch (`https://api.github.com/users/${username}`
            const proxyUrl= "https://cors-anywhere.herokuapp.com/"
            const targetUrl=`https://leetcode.com/graphql/`;

            //Concat urls
            
            const myHeaders=new Headers();
            myHeaders.append('Content-Type','application/json');
    
            const graphql=JSON.stringify({
                query:`"\n  query userSessionProgress($username:String!) {\n
                allQuestionsCount {\n difficulty\n count\n }\n matchedUser
                (username:$username){\n submitStats{\n acSubmissionNum
                {\n difficulty\n  counnt\n   submission\n}
                \n totalSubmissionNum{\n difficulty\n 
                count\n  submission\n   }\n }\n}\n}\n"`,
                variables:{'username':`${username}`}
            })
            const requestOPtions={
                method:'POST',
                headers:myHeaders,
                body:graphql,
                redirect:'follow'
    
            };
            
            const response=await fetch(proxyUrl+targetUrl ,requestOPtions);
            if (!response.ok){
                throw new Error('Failed to fetch user details');
            }
            const data=await response.json();
            console.log('Login Data',data);

            displaUserData(data);
        }
        catch(error){
            statsContainer.innerHTML=`<p>No Data Found</p>`
        }
        finally{
            searchButton.textContent='Search';
            searchButton.ariaDisabled=false;
        }
    }

    searchButton.addEventListener('click',function(){
        const username=usernameInput.value;
        console.log('Login Username::',username);
        if(validateUsername(username)){
            //fetch data from api
            fetchUserDetails(username);
        }
    })

})






































































































































































































































































































































