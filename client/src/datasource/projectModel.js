class ProjectModel {
    constructor(id = '', title = '', completion = '', description = '', imageUrl = '', imagePath = ''){
        this.id = id;
        this.title = title;
        this.completion = completion;
        this.description = description;
        this.imageUrl = imageUrl;
        this.imagePath = imagePath;
    }
}

export default ProjectModel;