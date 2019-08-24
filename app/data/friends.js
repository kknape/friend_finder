// Application's DATA
//Current Friend data for application saved as an array of objects. 

var friendsArray = [
        {
        name:"Rachel",
        imgLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJAjmJZuzlQq30imAYlFC5dt1NUkT8sIfvCViHdaMYYHpJqy_A9w",
        scores:[
            4,
            2,
            2,
            4,
            4,
            2,
            1,
            3,
            5,
            4
            ]
        },
        {
          name:"Monica",
          imgLink:"https://pbs.twimg.com/profile_images/1008517744499798017/ExevRwMG_400x400.jpg",
          scores:[
              3,
              4,
              3,
              4,
              2,
              1,
              3,
              3,
              5,
              4
              ]
          },
          {
            name:"Phoebe",
            imgLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYqjHzmN5r5zay_0JbiBRPKyuzqhC53xgY6HtnxNOb0i5cV2-5",
            scores:[
                5,
                1,
                3,
                1,
                3,
                1,
                3,
                1,
                5,
                4
                ]
            }, 
          {
              name:"Joey",
              imgLink:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/joey-tribianni-1491992391.jpg?crop=1.00xw:0.958xh;0,0&resize=480:*",
              scores:[
                  4,
                  2,
                  4,
                  3,
                  4,
                  3,
                  2,
                  3,
                  5,
                  3
                  ]
              },
              {
                name:"Chandler",
                imgLink:"https://66.media.tumblr.com/b551a678cf459272a4d39d917d9f3e63/tumblr_opaq4tU3rb1w320ago1_250.png",
                scores:[
                    3,
                    4,
                    4,
                    3,
                    4,
                    3,
                    4,
                    4,
                    5,
                    2
                    ]
                },
                {
                  name:"Ross",
                  imgLink:"https://m.media-amazon.com/images/M/MV5BMTkxNjU3MjU3NF5BMl5BanBnXkFtZTgwMzcxMzYzMzE@._V1_UY268_CR87,0,182,268_AL_.jpg",
                  scores:[
                      2,
                      4,
                      3,
                      4,
                      3,
                      3,
                      4,
                      5,
                      5,
                      3
                      ]
                  }         
      ]



/*
Determine the user's most compatible friend using the following as a guide:

   * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     * Example:
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
   * The closest match will be the user with the least amount of difference.

7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
   * The modal should display both the name and picture of the closest match.
*/


//for (var i = 0; i<friendsArray.length; i++){
//  console.log(friendsArray[i].scores);
//}

module.exports = friendsArray;