let initialState = {
  user: [
    {
      id: 1,
      firstname: "Julius",
      lastname: "Vlasovas",
      img: 'https://wowsciencecamp.org/wp-content/uploads/2018/07/dummy-user-img-1-400x400_x_acf_cropped.png',
      preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReonVTypPx7s2lrv6JS7wTEHB2KLngozG55g&usqp=CAU',
      country: "Lithuania",
      city: "Vilnius",
      title: "Hi. Im Front-End developer!",
    },
    {
      id: 2,
      firstname: "Vardenis",
      lastname: "Pavardenis",
      img: 'https://wowsciencecamp.org/wp-content/uploads/2018/07/dummy-user-img-1-400x400_x_acf_cropped.png',
      preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReonVTypPx7s2lrv6JS7wTEHB2KLngozG55g&usqp=CAU',
      country: "England",
      city: "London",
      title: "Im React developer!",
    },
  ],
};

export const postsReducer = (state = initialState) => {
  return state;
};
