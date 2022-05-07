import { addDoc, collection } from 'firebase/firestore';
import React, { useRef, useState } from 'react'
import { useContext } from 'react';
import { FB_COLLECTIONS } from '../consts';
import { ProjectContext } from '../context';
import { db } from '../firebase';
import { generateId } from '../helpers';

function AddProject() {
    const [showAdd, setShowAdd] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const { setProjects } = useContext(ProjectContext);
    const addHandler = () => {
        const name = inputRef.current?.value;
        if (!name) { return; }
        const addProject = async () => {
            await addDoc(collection(db, FB_COLLECTIONS.PROJECTS), {
                name,
                projectId: generateId(),
                userId: 'E8RT0a1RVfbpFSYnguX6'
            });
            setProjects([]);
            setShowAdd(!showAdd);
        }
        addProject();

    }
    return (
        <div className="add-project">
            <span className='add-project__plus'>+</span>
            <span className='add-project__text' onClick={() => setShowAdd(!showAdd)}>Add project</span>
            {showAdd && (
                <div className="add-project__input" data-testid="add-project-inner">
                    <input

                        className="add-project__name"
                        ref={inputRef}
                        type="text"
                        placeholder="Name your project"
                    />
                    <button
                        className="add-project__submit"
                        type="button"
                        onClick={addHandler}
                    >
                        Add Project
                    </button>
                    <span
                        className="add-project__cancel"
                        onClick={() => setShowAdd(!showAdd)}
                    >
                        Cancel
                    </span>
                </div>
            )}
        </div>
    )
}

export default AddProject