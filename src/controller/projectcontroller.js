import { projects } from "../data/projectdata.js"
import { authorize } from "../middleware/authorize.js";
import { canupdateproject, canviewproject } from "../policies/projectpolicies.js";


const handleResponse = (res, status, message, project = null) => {
    res.status(status).json({
        status,
        message,
        project
    })
}

export const viewProject = (req, res) => {
    const projectId = parseInt(req.params.id);
    const project = getprojectbyId(projectId, res);
    console.log("check project", project);
    authorize(canviewproject, project)(req, res, () => handleResponse(res, 200, "Success", project));
}


export const updateProject = (req, res) => {
    const projectId = parseInt(req.params.id);
    const project = getprojectbyId(projectId, res);
    console.log("check project", project);
    authorize(canupdateproject, project)(req, res, () => handleResponse(res, 200, "Success", project));
}

export const getprojectbyId = (id, res) => {
    const project = projects.find((project) => project.id === id);
    if (!project) handleResponse(res, 404, "Project not found");
    return project
}
