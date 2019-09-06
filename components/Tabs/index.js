// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



       //create new tab component and add to the DOM
       
  /*      
        function createTab (topic) {
           const tabDiv = document.createElement('div');
           tabDiv.classList.add('tab');

           tabDiv.textContent = topic;
           return tabDiv;
      };

      axios.get('https://lambda-times-backend.herokuapp.com/topics')
          .then(response => {
           debugger
           console.log(response);
           response.data.topics.forEach(topic => {
           createTab(topic);
           document.querySelector('.topics').appendChild(tabDiv)})})

        .catch(error => {
            document.body.innerText = error.message;
             });
 */