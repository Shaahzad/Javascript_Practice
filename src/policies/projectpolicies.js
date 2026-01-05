export const canviewproject = (user, project) => {
    return (
        user.role =  "admin" || user.department === project.department || 
        (user.accessLevel >= project.accessLevel && project.includes(user.id))

    )
}

export const canupdateproject = (req, res, next) => {
    return (
        user.role === "admin" || 
        (user.role == "manager" && user.department === project.department) ||
        project.includes(user.id)
    )
}