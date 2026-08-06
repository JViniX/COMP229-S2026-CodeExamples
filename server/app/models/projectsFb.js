module.exports.projectModel = function (project) {
  return {
    title: project.title || "",
    completion: project.completion || "",
    description: project.description || "",
    imageUrl: project.imageUrl || "",
    imagePath: project.imagePath || ""
  };
};
