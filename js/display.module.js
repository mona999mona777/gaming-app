/// <reference types="../@types/jquery" />
export class allgames {
  constructor(data) {
    this.displayallcategories(data);
  }
  displayallcategories(data) {
    $(".sectionTwo-details").removeClass("d-block").addClass("d-none");
    $(".sectionOne-all-games").removeClass("d-none").addClass("d-block");
    let all = ``;
    for (let i = 0; i < data.length; i++) {
      // id is a custom attribute....
      all += ` <div class="col-6 col-md-4 col-xl-3" id='${data[i].id}'>
        <div class="card border-style rounded">
       <div class="the-image p-2">
        <img src="${
          data[i].thumbnail
        }" class="rounded" alt="itis a game image for ${data[i].title} /">
       </div>
       <div class="card-body p-2">
        <div class="d-flex align-items-center justify-content-between">
         <h2 class="h2-font">${data[i].title}</h2>
         <a 
        class="btn change-color ">free</a>
         </div>
         <p class="card-text text-secondary mt-1 p-font">${data[
           i
         ].short_description.split(" ", 8)}</p>
         </div>
         <div class="card-footer d-flex align-items-center justify-content-between p-2">
         <span class="p-1 rounded span-font-main">${data[i].genre}</span>
               <span class="p-1 rounded span-font-main">${
                 data[i].platform
               }</span></div>
           </div>
           </div>`;
    }

    document.getElementById("all-data").innerHTML = all;
  }
}
export class alldetails {
  constructor(dataDetails) {
    this.displayDetailsData(dataDetails);
  }
  displayDetailsData(dataDetails) {
    $(".sectionOne-all-games").removeClass("d-block").addClass("d-none");
    $(".sectionTwo-details").removeClass("d-none").addClass("d-block");
    let all = `
                <div class="col-lg-4">
                  <img class="w-100 rounded-5" src="${dataDetails.thumbnail}" alt="itis a game image for ${dataDetails.title}" />
                </div>
                <div class="col-lg-8">
                  <h3 class=" mt-3 the-purple  text-decoration-underline"> Title:${dataDetails.title}</h3>
                    <h3 class="h3-font mt-3">Category: <span class="rounded p-1 span-font">  ${dataDetails.genre}</span></h3>
                    <h3 class="h3-font mt-3">Platform: <span class="rounded p-1 span-font">  ${dataDetails.platform}</span></h3>
                    <h3 class="h3-font my-3">Status: <span class="rounded p-1 span-font">  ${dataDetails.status}</span></h3>
                  <p class="p-font text-black">${dataDetails.description}</p>
                  <a href="${dataDetails.game_url}"
                    ><button class="btn btn-main button-font">
                      Show Game
                    </button></a
                  >
                </div>`;
    document.getElementById("the-data").innerHTML = all;
  }
}
