import React, { useContext, useState } from 'react'
import { IProject } from '../models'
import { FaTrashAlt } from 'react-icons/fa'
import Modal from './Modal/Modal'
import { deleteDoc, doc } from 'firebase/firestore'
import { FB_COLLECTIONS } from '../consts'
import { db } from '../firebase'
import { ProjectContext } from '../context'
interface Props {
    project: IProject
}

function IndividualProject({ project }: Props) {
    const [showConfirm, setShowConfirm] = useState(false);
    const { setProjects } = useContext(ProjectContext);
    const handleDeleteProject = () => {
        const deleteData = async () => {
            await deleteDoc(doc(db, FB_COLLECTIONS.PROJECTS, project.id));;
            setShowConfirm(!showConfirm);
            setProjects([]);
        }
        deleteData();
    }
    return (
        <>
            <span className='sidebar__dot'>&#183;</span>
            <span className='sidebar__project-name'>{project.name}</span>
            <span className='sidebar__project-delete'
                onClick={() => setShowConfirm(!showConfirm)}><FaTrashAlt />
                <Modal isShow={showConfirm} onClose={() => setShowConfirm(!showConfirm)} onConfirm={() => handleDeleteProject()} content='Are you sure you want to delete this project?' />
            </span>
        </>
    )
}

export default IndividualProject