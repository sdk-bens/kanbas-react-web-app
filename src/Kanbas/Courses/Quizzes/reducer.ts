import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizzes: [],
};


const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setQuizzes: (state, action) => {
            state.quizzes  = action.payload;
        },
        addQuiz : (state, { payload: quiz}) => {
            const newQuiz: any = {
                _id: new Date().getTime().toString(),
                title: quiz.title,
                course: quiz.course,
                availableFrom: quiz.available,
                dueDate: quiz.dueDate,
                dueTime: quiz.dueTime,
                points: quiz.points,
                description: quiz.description,
            };
            state.quizzes = [...state.quizzes, newQuiz] as any;
        },

        deleteQuiz: (state, { payload: quizId }) => {
            state.quizzes = state.quizzes.filter((a: any) => a._id !== quizId);
        },

       
        updateQuiz: (state, { payload: quiz }) => {
            state.quizzes = state.quizzes.map((a: any) => a._id === quiz._id ? quiz : a) as any;
        },
        
        editQuiz: (state, { payload: quizId }) => {
            state.quizzes = state.quizzes.map((a: any) =>
              a._id === quizId ? { ...a, editing: true } : a
            ) as any;
          },
    
    },
});
export const { setQuizzes, addQuiz, deleteQuiz, updateQuiz, editQuiz } = quizSlice.actions;
export default quizSlice.reducer;