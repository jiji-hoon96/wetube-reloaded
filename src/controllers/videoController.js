import Video from "../models/Video";
export const home = async (req, res) => {
  const videos = await Video.find({});
  return res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { pageTitle: "Watching" });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: "Editing" });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  await Video.create({
    title,
    description,
    createdAd: Date.now(),
    hashtags: hashtags.split(",").map((word) => `#${word}`),
    meta: {
      views: 1,
      rating: 0,
    },
  });
  return res.redirect("/");
};

export const remove = (req, res) => {
  res.send("여기는 비디오를 지우는 페이지입니다");
};

export const search = (req, res) => res.send("여기는 비디오검색페이지입니다");
