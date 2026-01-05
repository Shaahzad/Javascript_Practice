export const canviewproject = (user, project) => {
    return (
        user.role =  "admin" || user.department === project.department

    )
}

export const canupdateproject = (req, res, next) => {}