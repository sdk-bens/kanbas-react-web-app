import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const QUIZ_API = `${REMOTE_SERVER}/api/quizzes`;

export const deleteQuiz = async (quizId: string) => {
    const response = await axios.delete(`${QUIZ_API}/${quizId}`);
    return response.data;
};

export const createQuiz = async (courseId: string, quiz: any) => {
    const response = await axios.post(`${COURSES_API}/${courseId}/quizzes`, quiz);
    return response.data;
};

export const findQuizzesForCourse = async (courseId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/quizzes`);
    return response.data;
};

export const updateQuiz = async (quiz: any) => {
    const response = await axios.put(`${QUIZ_API}/${quiz._id}`, quiz);
    return response.data;
};
