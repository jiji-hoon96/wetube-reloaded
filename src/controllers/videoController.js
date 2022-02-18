export const home = (req, res) => {
  const videos = [
    {
      title: "첫번째 게시물",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes age",
      views: 50,
      id: 1,
    },
    {
      title: "두번째 게시물",
      rating: 1,
      comments: 223,
      createdAt: "10 minutes age",
      views: 523440,
      id: 2,
    },
    {
      title: "세번째 게시물",
      rating: 2,
      comments: 112,
      createdAt: "1 minutes age",
      views: 42,
      id: 3,
    },
  ];
  return res.render("home", { pageTitle: "home", videos });
};

export const watch = (req, res) => res.render("watch", { pageTitle: "watch" });

export const upload = (req, res) =>
  res.render("upload", { pageTitle: "upload" });
export const edit = (req, res) => res.render("edit");
export const remove = (req, res) => {
  res.send("여기는 비디오를 지우는 페이지입니다");
};

export const search = (req, res) => res.send("여기는 비디오검색페이지입니다");
