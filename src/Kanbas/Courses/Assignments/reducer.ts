import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
};

const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment : (state, { payload: assignment}) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                title: assignment.title,
                course: assignment.course,
                availableFrom: assignment.available,
                dueDate: assignment.dueDate,
                dueTime: assignment.dueTime,
                points: assignment.points,
                description: assignment.description,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter((a: any) => a._id !== assignmentId);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) => a._id === assignment._id ? assignment : a) as any;
        },
        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((a: any) =>
              a._id === assignmentId ? { ...a, editing: true } : a
            ) as any;
          },
    
    },
});
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } = assignmentSlice.actions;
export default assignmentSlice.reducer;