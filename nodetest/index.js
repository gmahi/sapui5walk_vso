const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.ttile, tag);
    }, this);
  },
};
video.showTags();
