// TODO: add code here

window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
            const container = document.getElementById("container");
            //get json length
            //create array with .hoursInSpace
            //sort array
            //print array in big-->little order 

            let hISArray = [];
            for (let j = 0; j<json.length; j++){
                hISArray.push(json[j]);
            }

            //console.log(hISArray);

            hISArray.sort(function(a,b){return a.hoursInSpace - b.hoursInSpace});
            hISArray.reverse();
            
            //console.log(hISArray);

            //console.log(json.length);
            // for (let i=0; i<json.length; i++){
            //     container.innerHTML = container.innerHTML + `
            //     <div class="astronaut">
            //     <div class="bio">
            //        <h3>${json[i].firstName} ${json[i].lastName}</h3>
            //        <ul>
            //           <li>Hours in space: ${json[i].hoursInSpace}</li>
            //           <li>Active: ${json[i].active}</li>
            //           <li>Skills: ${json[i].skills}</li>
            //        </ul>
            //     </div>
            //     <img class="avatar" src="${json[i].picture}">
            //  </div>
            //     `;

            for (let i=0; i<hISArray.length; i++){
                container.innerHTML = container.innerHTML + `
                <div class="astronaut">
                <div class="bio">
                   <h3>${hISArray[i].firstName} ${hISArray[i].lastName}</h3>
                   <ul>
                      <li>Hours in space: ${hISArray[i].hoursInSpace}</li>
                      <li id="active">Active: ${hISArray[i].active}</li>
                      <li>Skills: ${hISArray[i].skills}</li>
                   </ul>
                </div>
                <img class="avatar" src="${hISArray[i].picture}">
             </div>
                `;
                if (container.innerHTML.active === "true"){
                    container.innerHTML.active.style.color = "green";
                }


            };

            container.innerHTML = container.innerHTML + `
            <div class="astronautCount">
                <h3>Total Astronauts = ${json.length}</h3>
            </div>
            `

    });
});
});