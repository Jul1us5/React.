const USER_FOLLOW = "USER-FOLLOW";
const USER_UNFOLLOW = "USER-UNFOLLOW";

let initialState = {
  user: [
    {
      id: 1,
      firstname: "Julius",
      lastname: "Vlasovas",
      img:
        "https://wowsciencecamp.org/wp-content/uploads/2018/07/dummy-user-img-1-400x400_x_acf_cropped.png",
      preview:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReonVTypPx7s2lrv6JS7wTEHB2KLngozG55g&usqp=CAU",
      country: "Lithuania",
      city: "Vilnius",
      title: "Hi. Im Front-End developer!",
      follow: true,
    },
    {
      id: 2,
      firstname: "Vardenis",
      lastname: "Pavardenis",
      img:
        "https://wowsciencecamp.org/wp-content/uploads/2018/07/dummy-user-img-1-400x400_x_acf_cropped.png",
      preview:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReonVTypPx7s2lrv6JS7wTEHB2KLngozG55g&usqp=CAU",
      country: "England",
      city: "London",
      title: "Im React developer!",
      follow: false,
    },
    {
      id: 3,
      firstname: "Paulius",
      lastname: "Povilaitis",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBj1wk7gWqOcoAS0vSxJx8IW0Mum7MlijqzQ&usqp=CAU",
      preview:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0sR_nKqeERORWEo18Yzdbbr0-asTLIiDRzg&usqp=CAU",
      country: "England",
      city: "London",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, corrupti.",
      follow: false,
    },
  ],
};

export const usersReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case USER_FOLLOW:
      return {
        ...state,
        user: state.user.map((u) => {
          if (u.id === action.userid) {
            return { ...u, follow: false };
          }
          return u;
        }),
      };
    case USER_UNFOLLOW:
      return {
        ...state,
        user: state.user.map((u) => {
          if (u.id === action.userid) {
            return { ...u, follow: true };
          }
          return u;
        }),
      };

    default:
      return state;
  }
};

export const followAC = (userid) => {
  return {
    type: USER_FOLLOW,
    userid,
  };
};

export const unfollowAC = (userid) => {
  return {
    type: USER_UNFOLLOW,
    userid,
  };
};
