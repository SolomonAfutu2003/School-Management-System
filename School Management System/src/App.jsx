import './App.css'
import { Route, Routes } from 'react-router-dom'
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage'
import PasswordResetSuccess from './pages/auth/PasswordResetSuccess'
import PasswordReset from './pages/auth/PasswordReset'
import SetNewPassword from './pages/auth/SetNewPassword'
import LoginPage from './pages/auth/LoginPage'
import ClientLayout from './layout/ClientLayout'
import AuthLayout from './layout/AuthLayout'
import Dashboard from './pages/Dashboard'
import MySubjects from './pages/MySubjects'
import MyClasses from './pages/MyClasses'
import Exams from './pages/Exams'
import MyStudents from './pages/MyStudents'
import Assignments from './pages/Assignments'
import Quiz from './pages/Quiz'
import Examinations from './pages/Examinations'
import ViewDetail from "./pages/ViewDetail"
import ProtectRoute from './components/ProtectRoute'
import Admin from "./pages/admin/Admin"
import AssignmentsAndQuizzes from "./pages/admin/AssignmentsAndQuizzes"
import Attendance from "./pages/admin/Attendance"
import Classes from "./pages/admin/Classes"
import AdminExams from "./pages/admin/AdminExams"
import Guardians from "./pages/admin/Guardians"
import MessagingPage from "./pages/admin/MessagingPage"
import Teachers from "./pages/admin/Teachers"
import Subjects from "./pages/admin/Subjects"
import Students from "./pages/admin/Students"
import SMS from "./pages/admin/SMS"



function App() {
  return (
    <Routes>
      <Route path='/auth' element={<AuthLayout />}>
        <Route path='login-page' element={<LoginPage />} />
        <Route path='forgot-password' element={<ForgotPasswordPage />} />
        <Route path='password-reset' element={<PasswordReset />} />
        <Route path='set-new-password' element={<SetNewPassword />} />
        <Route path='password-reset-success' element={<PasswordResetSuccess />} />
      </Route>

      <Route element={<ProtectRoute />}>
        <Route element={<ClientLayout />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/my-subjects' element={<MySubjects />} />
          <Route path='/my-classes' element={<MyClasses />} />
          <Route path='/exams' element={<Exams />} />
          <Route path='/my-students' element={<MyStudents />} />
          <Route path='/assignment' element={<Assignments />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/examination' element={<Examinations />} />
          <Route path='/view-detail/:id' element={<ViewDetail />} />
          <Route path='/admin/admin-page' element={<Admin />} />
          <Route path='/admin/exams' element={<AdminExams />} />
          <Route path='/admin/assignments-and-quizzes' element={<AssignmentsAndQuizzes />} />
          <Route path='/admin/messaging-page' element={<MessagingPage />} />
          <Route path='/admin/classes' element={<Classes />} />
          <Route path='/admin/subjects' element={<Subjects />} />
          <Route path='/admin/students' element={<Students/>} />
          <Route path='/admin/teachers' element={<Teachers/>} />
          <Route path='/admin/sms' element={<SMS />} />
          <Route path='/admin/guardians' element={<Guardians />} />
          <Route path='/admin/attendance' element={<Attendance />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
