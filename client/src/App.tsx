import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "./components/Signin"; 
import Signup from "./components/Signup";
import Appbar from "./components/Appbar";
// import initUser from './components/initUser';
import TodoList from "./components/todoList"; 
// import AddCourse from './Addcourse.jsx';
// import Courses from "./Courses";
// import Course from "./Course";
import { useEffect, useState } from 'react';
import axios from "axios";
import { useSetRecoilState, RecoilRoot } from 'recoil';
import { userState } from './store/atoms/user';
import { Landing } from './components/Landing';
import TestTodo from './components/testTodo';


function App() {

    return (
        <RecoilRoot>
            <div style={{width: "100vw",
                height: "100vh",
                // backgroundColor: "#eeeeee", 
                // --tw-bg-opacity: 1;
                backgroundColor: 'rgba(17 24 39 / 1.0)'
            }}
            >
                    <Router>
                        <Appbar /> 
                        <InitUser />
                        <Routes>
                            {/* <Route path={"/addcourse"} element={<AddCourse />} /> */}
                            {/* <Route path={"/courses/:courseId"} element={<Course />} /> */}
                            {/* <Route path={"/courses"} element={<Courses />} /> */}
                            {/* <Route path={"/todoList"} element={<TodoList />} /> */}
                            <Route path={"/signin"} element={<Signin />} />
                            <Route path={"/signup"} element={<Signup />} />
                            <Route path={"/"} element={<Landing />} />
                            <Route path={"/todo"} element={<TestTodo />} />
                        </Routes>
                    </Router>

            </div>
        </RecoilRoot>
    );
}

function InitUser() { 
    const setUser = useSetRecoilState(userState); 
    const init = async () => {
        try { 
            const response = await axios.get('http://localhost:4000/auth/me', {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }); 

            if(response.data.username){
                setUser({ 
                    isLoading: false, 
                    userEmail: response.data.username 
                })
            } else { 
                setUser({ 
                    isLoading: false, 
                    userEmail: null 
                })
            }
        } catch (e) { 
            setUser({ 
                isLoading: false, 
                userEmail: null 
            })
        }
    }; 

    useEffect(() => {
        init(); 
    }, []); 

    return <></>
    
}

export default App;