export const home = (req, res) => res.render("home");

export const watch = (req, res) => {
  res.send("여기는 비디오를 보는 페이지입니다");
};

export const upload = (req, res) => {
  res.send("여기는 비디오를 업로드하는 페이지입니다");
};
export const edit = (req, res) => {
  res.send("여기는 비디오를 수정하는 페이지입니다");
};
export const remove = (req, res) => {
  res.send("여기는 비디오를 지우는 페이지입니다");
};

export const search = (req, res) => res.send("여기는 비디오검색페이지입니다");
