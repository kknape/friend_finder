// ===============================================================================
// DATA
// Below data will hold all of the friends who have completed a survey in an array.
// Will add some "friends" to get started.

//application's data as an array of objects. Each of these objects should roughly follow the format below;

var friendsArray = [
        {
        name:"Rachel",
        imgLink:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
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
          imgLink:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
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
            imgLink:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
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
              imgLink:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
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
                imgLink:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
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
                  imgLink:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
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


module.exports = friendsArray;
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