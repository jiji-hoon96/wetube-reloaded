let videos = [
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
export const home = (req, res) => {
  return res.render("home", { pageTitle: "home", videos });
};

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching : ${video.title}`, video });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Edit : ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  const { title, rating, comments, createdAt, views } = req.body;
  const newVideo = {
    title,
    rating,
    comments,
    createdAt,
    views,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};

export const remove = (req, res) => {
  res.send("여기는 비디오를 지우는 페이지입니다");
};

export const search = (req, res) => res.send("여기는 비디오검색페이지입니다");
